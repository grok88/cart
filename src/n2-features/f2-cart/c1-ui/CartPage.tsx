import React, {useEffect} from 'react'
import {UserInfo} from "./userInfo/UserInfo";
import {Cart} from "./cart/Cart";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../../n1-main/m2-bll/store";
import {ProductType} from "../../f1-products/p1-ui/Products";
import {Container, Grid, Paper, Typography} from '@material-ui/core';
import {getCartsProducts, getProductsTC} from "../../f1-products/p2-bll/products-reducer";
// import {cartsSelector} from '../c2-bll/selectors';
// import {getProducts, totalCartPrice} from '../../f1-products/p2-bll/products-reducer';

export const CartPage = React.memo(() => {
    // const carts = useSelector(cartsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsTC());
        let carts = localStorage.getItem('carts')
        carts && dispatch(getCartsProducts(JSON.parse(carts)))
    }, []);

    const totalPrice = useSelector<AppRootStateType>(state => state.products.totalCount);
    const carts = useSelector<AppRootStateType, Array<ProductType>>(state => state.products.productsInCart);

    return <Container fixed>
        <Grid container spacing={3} style={{padding: '30px 0'}}>
            <Grid item container spacing={3}>
                <Grid item spacing={1} xs={12} // при переносе длина
                      sm={8} //длина в рабочем состоянии
                >
                    {
                        carts.map(cart => <Cart cart={cart} key={cart.id}/>
                        )
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    <UserInfo/>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'h5'}> Total: {totalPrice} $</Typography>
            </Grid>
        </Grid>
    </Container>;
});
