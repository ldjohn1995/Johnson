import React from 'react';
import inventoryList from '../inventoryList';

function productScreen(props){
    console.log(props.match.params.id);
    const product = inventoryList.products.find(x => x._id === props.match.params.id)
     return <div className= "product-container">
     <div className= "product-pic"> 
     <img src = {product.image} alt="product"/>
     </div>

     <div className="product-info">
     <ul>
     <li> <b>{product.name}</b></li> <br></br>
     <li> ${product.price}</li>
     <li>{product.rating} Stars {product.numofReview} Reviews</li>
     </ul>
     
     </div>

     <div className="product-action">
     <ul>

     <li>Price: {product.price} </li>

     <li>status: </li> 

     <li>
     <select>
     <option vaule="1"> 1 </option>
     <option vaule="2"> 2 </option>
     <option vaule="3"> 3 </option>
     <option vaule="4"> 4 </option>
     <option vaule="5"> 5 </option>
     </select>
     </li>

     <li> 
     <button className ="cart"> add to cart</button>
     </li>
     </ul>
     </div>



      
      </div>



    
     }



export default productScreen;