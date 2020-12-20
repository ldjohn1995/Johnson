import React from 'react';
import {Link} from 'react-router-dom';
import inventoryList from '../inventoryList';


function homeScreen(props){
    return <ul className= "product-List">
    {
      inventoryList.products.map(product =>
    
        <li>
        <div className= "product">
        <Link to={'/everything.com/product/' + product._id}>
        <img className= "product-image"  src = {product.image} alt = "product"/>
        </Link>
        <div className= "product-name">
            <Link to={'/everyting.com/product/' + product._id}>{product.name}</Link>
         </div>
        <div className= "product-brand">{product.brand}</div>
        <div className= "product-catergory">{product.catergory}</div>
        <div className= "product-rating">{product.rating} Stars {product.numofReview}  </div>
        <div className= "product-price">${product.price}</div>
        </div>
        </li>)
      }                    
        
    </ul>
    

    }

export default homeScreen;
