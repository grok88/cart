import React, {useEffect} from "react";
import {Product} from "./product/Product";
import {useDispatch, useSelector} from "react-redux";
import { getProductsTC } from "../p2-bll/products-reducer";
import {AppRootStateType} from "../../../n1-main/m2-bll/store";

export type ProductType = {
    id: number
    title: string
    description: string
    price: number
    imgUrl: string
}
export const Products = React.memo(() => {

    const products = useSelector<AppRootStateType,Array<ProductType>>(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProductsTC());
    },[]);

    return (<div>
            {
                products.map(product => {
                    return <Product product={product} key={product.id}/>
                })
            }
        </div>
    )
})
