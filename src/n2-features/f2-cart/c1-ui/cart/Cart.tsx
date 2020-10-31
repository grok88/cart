import React from 'react'
import {ProductType} from "../../../f1-products/p1-ui/Products";

type CartPropsType = {
    cart: ProductType
}

export const Cart: React.FC<CartPropsType> = React.memo((props) => {
    const {cart: {id, title, description, imgUrl, price, count}} = props;
    return (<div style={{display: 'flex', padding: '10px'}}>
        <div>
            <img src={imgUrl} alt="Ptoduct"/>
        </div>
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{price}</div>
        </div>
        <div style={{display: 'flex', alignItems:'center'}}>
            <button>-</button>
            {count}
            <button>+</button>
        </div>
    </div>);
})
