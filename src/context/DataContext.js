import React, { createContext, useState } from 'react';
import jsonData from '../data.json';

export const DataContext = createContext(); 

const DataProvider = (props) => {

    //Status to pass the products globally through the app
    const [ products, saveProducts ] = useState([]);

    return (
        <DataContext.Provider
            value={{
                products,
                jsonData,
                saveProducts
            }}
        >
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;