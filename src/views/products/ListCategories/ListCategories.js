import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../ListCategories/styles.css';
import '../../../assets/fonts/proximanova-light.woff2';
import { DataContext } from '../../../context/DataContext';
import styled from 'styled-components'

const ListCategories = ({categories}) => {

    //Call the global state
    const { saveProducts } = useContext(DataContext);

    const handleCategory = (e) => {
        e.preventDefault();
        requestToCategory(e.target.value)
    }

    //Function to get items's list by category
    const requestToCategory = (query) => {

        axios.get(`http://localhost:8080/api/items/category?q=${query}`)
        .then((res) => {
            //if find results, save them in useState 'saveProducts' 
            saveProducts({
                items : res.data.items
            });
        })
        .catch(error => {
            console.error(error);
        });
    }

    const Container = styled.div`
        margin-top:50px;
    `;

    return (  
        <Container >
            <h4 className="subtituleListCategory-style sizeMainSubtitle">Todas</h4>
            <p className="extra_field">10.000 productos</p>
            <h4 className="subtituleListCategory-style sizeMainSubtitle">Categorías</h4>
            <h5 className="subtituleListCategory-style sizeSubtitule">Todas las categorías</h5>
            {categories.map(item => (
                <li 
                    className="li_item"
                    key={item.id}
                >
                    <button  
                        href="#" 
                        className="category_item"
                        value={item.id} 
                        onClick={(e) => handleCategory(e)}
                    >
                        {item.name}
                    </button>   
                </li>
            ))}
        </Container>
     );
}
 
export default ListCategories;