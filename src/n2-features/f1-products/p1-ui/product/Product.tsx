import React from "react";
import {ProductType} from "../Products";

type ProductPropsType = {
    product: ProductType
}

export const Product: React.FC<ProductPropsType> = (props) => {
    const {product:{description,id,imgUrl,price,title}} = props;
    return <div style={{width:'200px', outline:'1px solid red', padding:'10px', margin:'10px', textAlign:'center'}}>
       <div>
           <img src={imgUrl} alt="Product Image"/>
       </div>
        <div>
            {title}
        </div>
        <div>
            {description}
        </div>
        <div>
            {price}
        </div>
        <div>
            <button>Add to Cart</button>
        </div>
    </div>
}
