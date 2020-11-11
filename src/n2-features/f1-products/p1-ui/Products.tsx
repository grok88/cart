import React, {useEffect} from "react";
import {Product} from "./product/Product";
import {useDispatch, useSelector} from "react-redux";
import {getCartsProducts, getProductsTC} from "../p2-bll/products-reducer";
import {AppRootStateType} from "../../../n1-main/m2-bll/store";
import {Container, Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

//styles
const useStyles = makeStyles({
    container: {
        padding: '30px 0'
    },
    item: {
        minWidth: '280px'
    }
});

export type ProductType = {
    id: number
    title: string
    description: string
    price: number
    imgUrl: string
    count: number
}
export const Products = React.memo(() => {
    //styles
    const classes = useStyles();

    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsTC());
        let carts = localStorage.getItem('carts')
        if (carts) {
            dispatch(getCartsProducts({products: JSON.parse(carts)}))
        }
    }, []);

    return <Container fixed>
        <Grid container spacing={3} justify="center" className={classes.container}>
            {
                products.map(product => <Grid item key={product.id} xs={6} sm={4} className={classes.item}>
                        <Product product={product}/>
                    </Grid>
                )
            }
        </Grid>
    </Container>

})
