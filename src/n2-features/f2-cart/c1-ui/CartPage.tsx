import React, {useEffect} from 'react'
import {UserInfo} from "./userInfo/UserInfo";
import {Cart} from "./cart/Cart";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../../n1-main/m2-bll/store";
import {ProductType} from "../../f1-products/p1-ui/Products";
import {Container, Grid, Paper, Typography} from '@material-ui/core';
import {getCartsProducts, getProductsTC} from "../../f1-products/p2-bll/products-reducer";
import {makeStyles} from '@material-ui/core/styles';
//styles
const useStyles = makeStyles({
    cartPage: {
        ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },

});

export const CartPage = React.memo(() => {
    //styles
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsTC());
        let carts = localStorage.getItem('carts')
        carts && dispatch(getCartsProducts({products:JSON.parse(carts)}))
    }, []);

    const totalPrice = useSelector<AppRootStateType>(state => state.products.totalCount);
    const carts = useSelector<AppRootStateType, Array<ProductType>>(state => state.products.productsInCart);

    return <Container fixed>
        <Grid container spacing={3} style={{padding: '30px 0'}}>
            <Grid item container spacing={3} className={classes.cartPage} justify={'center'}>
                <Grid item container spacing={3} xs={12} // при переносе длина
                      sm={8} //длина в рабочем состоянии
                >
                    {
                        carts.map(cart => <Paper elevation={3} style={{margin: 10, padding:'0 10px'}} key={cart.id}>
                            <Cart cart={cart}/>
                        </Paper>
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
