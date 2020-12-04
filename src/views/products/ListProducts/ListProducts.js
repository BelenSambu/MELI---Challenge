import React, { useContext }  from'react';
import  { 
    Box,
    Container
  } from '@material-ui/core';
import ProductCard from './ProductCard';
import { DataContext } from '../../../context/DataContext';
import './styles.css';


const ListProducts = () => {

    const { jsonData, products } = useContext(DataContext);

    var data = products; 

    if(products.length === 0) {
        data = jsonData
    }
    
    return (
        <Container className="mainContainer_products" >
                <Box className="containerBox_product">
                    {
                        data.items.map(product  => (
                            <ProductCard 
                                key={product.id}
                                item={product}
                            />
                        ))
                    }
                </Box>
        </Container>
     );
}
 
export default ListProducts;