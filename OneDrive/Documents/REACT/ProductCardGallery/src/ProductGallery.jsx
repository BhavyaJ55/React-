import React from "react";
function ProductCard({name,price,image}){
    return (
        <div style={{
            backgroundColor:"black",
            color:"white",
            padding:"10px",
            borderRadius:"10px",
            textAlign:"center",
            width:"200px"
        }}>
            <img src={image} alt={name} width="100%" height="200px"  />
            <h4>{name}</h4>
            <h6>${price}</h6>
        </div>
    )
}
export default ProductCard;