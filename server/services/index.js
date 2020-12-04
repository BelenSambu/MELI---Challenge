const client = require('../client');

//Function to get items´s list according to the search
exports.getItemsList = (query) => {

    return client.search(query).then((response => {

        const items = response.results.map((item) => {

            const [ amount, decimals ] = item.price.toString().split('.');

            //Create an object according the preferences by user
            return {
                id: item.id,
                title: item.title,
                image_src: item.thumbnail,
                free_shipping: item.shipping.free_shipping,
                link: {
                    url : item.permalink
                },
                price: {
                    price: item.price,
                    original_price: item.original_price,
                    currency: item.currency_id,
                    amount: parseInt(amount),
                    decimals: parseInt(decimals),
                    has_loyalty_discount: null
                }                
            }
        });
        return {
            items
        }
    }))
};

//Function to get items´s list by category according to the search
exports.getItemsByCategory = (query) => {

    return client.searchByCategory(query).then((response => {
        const items = response.results.map((item) => {
            const [amount, decimals] = item.price.toString().split('.');
            //Create an object according the preferences by user
            return {
                id: item.id,
                title: item.title,
                image_src: item.thumbnail,
                free_shipping: item.shipping.free_shipping,
                link: {
                    url : item.permalink
                },
                price: {
                    price: item.price,
                    original_price: item.original_price,
                    currency: item.currency_id,
                    amount: parseInt(amount),
                    decimals: parseInt(decimals),
                    has_loyalty_discount: null
                }                
            }
        });
        return {
            items
        }
    }))
}
