import React, {useEffect} from "react";
import {Product} from "./product/Product";
import {useDispatch, useSelector} from "react-redux";
import {getCartsProducts, getProductsTC} from "../p2-bll/products-reducer";
import {AppRootStateType} from "../../../n1-main/m2-bll/store";
import {Container, Grid} from "@material-ui/core";

export type ProductType = {
    id: number
    title: string
    description: string
    price: number
    imgUrl: string
    count: number
}
export const Products = React.memo(() => {

    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsTC());
        let carts = localStorage.getItem('carts')
        carts && dispatch(getCartsProducts(JSON.parse(carts)))
    }, []);

    return <Container fixed>
        <Grid container spacing={3} style={{padding: '30px 0'}} justify="center">
            {
                products.map(product => <Grid item key={product.id} xs={6} sm={4} style={{minWidth: 280}}>
                        <Product product={product}/>
                    </Grid>
                )
            }
        </Grid>
    </Container>

})
