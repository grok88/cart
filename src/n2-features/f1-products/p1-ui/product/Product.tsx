import React from "react";
import {ProductType} from "../Products";
import {useDispatch, useSelector} from "react-redux";
import {incrementCount, setProductsToCard} from "../../p2-bll/products-reducer";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import { Paper } from "@material-ui/core";

type ProductPropsType = {
    product: ProductType
}

export const Product: React.FC<ProductPropsType> = React.memo((props) => {
    const dispatch = useDispatch();

    const {product: {description, id, imgUrl, price, title, count}} = props;
    const productsInCart = useSelector<AppRootStateType, Array<ProductType>>((state: AppRootStateType) => state.products.productsInCart)

    const incrementHandler = (id: number) => {
        const productInCart = productsInCart.find(product => product.id === id)
        if (productInCart) {
            dispatch(incrementCount(id));
        } else {
            const newProduct: ProductType = {
                ...props.product,
                count: 1
            }
            dispatch(setProductsToCard(newProduct));
        }

        console.log(id)
    }
    return <Paper elevation={3}>
        <div style={{ width: '128px',
            height: '128px'}}>
            <img src={imgUrl} alt="Product Image" style={{ maxWidth: '100%',
                maxHeight: '100%'}}/>
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
    </Paper>
})
