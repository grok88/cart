import React, {useEffect} from 'react'
import {UserInfo} from "./userInfo/UserInfo";
import {Cart} from "./cart/Cart";
import {useDispatch, useSelector} from 'react-redux';
import {cartsSelector} from '../c2-bll/selectors';
import {getProducts, totalCartPrice} from '../../f1-products/p2-bll/products-reducer';
import {AppRootStateType} from "../../../n1-main/m2-bll/store";

export const CartPage = React.memo(() => {
    // const carts = useSelector(cartsSelector);
    const dispatch = useDispatch();

    const totalPrice = useSelector<AppRootStateType>(state => state.products.totalCount);
    const carts = useSelector(cartsSelector);

    // useEffect(() => {
    //     let carts = localStorage.getItem('carts')
    //     carts && dispatch(getProducts(JSON.parse(carts)))
    // }, [])


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
