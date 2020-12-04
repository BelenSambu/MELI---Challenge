const https = require('https');

requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        let body = '';
        https.get(url, (response) => {
            response.on('data', (chunk) => {
                body += chunk;
            });
            response.on('end', () => {
                resolve(JSON.parse(body));
            })
        }).on('error', (error) => reject(error));
    })
};

exports.search = (query) => {
    return requestPromise(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
};

exports.searchByCategory = (query) => {
    return requestPromise(`https://api.mercadolibre.com//sites/MLA/search?category=${query}`);
};