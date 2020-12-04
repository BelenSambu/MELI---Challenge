import React, {Fragment, useContext} from 'react';
import ListCategories from '../../views/products/ListCategories/ListCategories';
import ListProducts from '../../views/products/ListProducts/ListProducts';
import  { 
    Grid,
    Container
  } from '@material-ui/core';
import './style.css';
import { DataContext } from '../../context/DataContext';

const Products = () => {
    //Call jsonData from my context to use the filters saved in json file
    const { jsonData } = useContext(DataContext);
    
    return ( 
        <Fragment>
            <div style={{width: "100%"}} className="background-viewproducts">
                <div style={{ margin: "0px auto", width: "90%" }} className="containerGrid">
                    <Grid 
                        container item xs={3}
                    >
                        <Container>
                            <ListCategories 
                                categories={jsonData.available_filters}
                            />
                        </Container>
                        
                    </Grid>
                    <Grid container item xs={9}
                    >   
                        <ListProducts />:
                    </Grid>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Products;