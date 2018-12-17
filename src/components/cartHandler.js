import React from 'react';

/* cart Button Componenet*/
const cartHandler  = (props) => {
   
     return(
             <button className="cartButton" onClick={props.click}>{props.children}</button> 
    )
         
}



export default cartHandler;