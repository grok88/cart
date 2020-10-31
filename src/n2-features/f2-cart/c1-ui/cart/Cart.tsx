import React from 'react'
import {ProductType} from "../../../f1-products/p1-ui/Products";
import {decrementCount, incrementCount} from "../../../f1-products/p2-bll/products-reducer";
import {useDispatch} from "react-redux";

type CartPropsType = {
    cart: ProductType
}

export const Cart: React.FC<CartPropsType> = React.memo((props) => {
    const dispatch = useDispatch();

    const {cart: {id, title, description, imgUrl, price, count}} = props;

    const incrementHandler = (id: number) => {
        dispatch(incrementCount(id));
    }
    const decrementHandler = (id: number) => {
        dispatch(decrementCount(id));
    }

    return (<div style={{display: 'flex', padding: '10px'}}>
        <div>
            <img src={imgUrl} alt="Ptoduct"/>
        </div>
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{price}</div>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <button onClick={() => decrementHandler(id)}>-</button>
            {count}
            <button onClick={() => incrementHandler(id)}>+</button>
        </div>
    </div>);
})
