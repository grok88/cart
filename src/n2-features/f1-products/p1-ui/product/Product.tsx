import React from "react";
import {ProductType} from "../Products";
import {useDispatch} from "react-redux";
import {incrementCount} from "../../p2-bll/products-reducer";

type ProductPropsType = {
    product: ProductType
}

export const Product: React.FC<ProductPropsType> = React.memo((props) => {
    const dispatch = useDispatch();

    const {product: {description, id, imgUrl, price, title}} = props;

    const incrementHandler = (id: number) => {
        dispatch(incrementCount(id));
        console.log(id)
    }
    return <div
        style={{width: '200px', outline: '1px solid red', padding: '10px', margin: '10px', textAlign: 'center'}}>
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
            <button onClick={() => incrementHandler(id)}>Add to Cart</button>
        </div>
    </div>
})
