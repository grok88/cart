import React, {useEffect} from 'react'
import {UserInfo} from "./userInfo/UserInfo";
import {Cart} from "./cart/Cart";
import {useDispatch, useSelector} from 'react-redux';
// import {cartsSelector} from '../c2-bll/selectors';
// import {getProducts, totalCartPrice} from '../../f1-products/p2-bll/products-reducer';

import {AppRootStateType} from "../../../n1-main/m2-bll/store";
import {ProductType} from "../../f1-products/p1-ui/Products";
import { getCartsProducts } from '../../f1-products/p2-bll/products-reducer';

export const CartPage = React.memo(() => {
    // const carts = useSelector(cartsSelector);
    const dispatch = useDispatch();

    const totalPrice = useSelector<AppRootStateType>(state => state.products.totalCount);
    const carts = useSelector<AppRootStateType,Array<ProductType> >(state => state.products.productsInCart );

    useEffect(() => {
        let carts = localStorage.getItem('carts')
        carts && dispatch(getCartsProducts(JSON.parse(carts)))
    }, [])


    return (<div>
        {
            carts.map(cart => <Cart cart={cart} key={cart.id}/>)
        }
        <UserInfo/>
        <div>
            Total: {totalPrice} $
        </div>
    </div>);
});
