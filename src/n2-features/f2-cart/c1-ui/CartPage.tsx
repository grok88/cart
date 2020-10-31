import React from 'react'
import {UserInfo} from "./userInfo/UserInfo";
import {Cart} from "./cart/Cart";
import { useSelector } from 'react-redux';
import {AppRootStateType} from "../../../n1-main/m2-bll/store";
// import { filterCarts } from '../c2-bll/selectors';

export const CartPage = React.memo(() => {
    const res = useSelector<AppRootStateType>(state => state.products.products);
    // console.log(res.filter(cart => ))
    // const Carts = useSelector(filterCarts);
    return (<div>
        <div>
            <Cart/>
        </div>
        <UserInfo/>
    </div>);
});
