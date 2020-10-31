import React from 'react'
import {UserInfo} from "./userInfo/UserInfo";
import {Cart} from "./cart/Cart";
import {useSelector} from 'react-redux';
import {cartsSelector} from '../c2-bll/selectors';
// import { filterCarts } from '../c2-bll/selectors';

export const CartPage = React.memo(() => {
    const carts = useSelector(cartsSelector);
    console.log(carts)
    return (<div style={{display:'flex'}}>
        {
            carts.map(cart => <Cart cart={cart} key={cart.id}/>)
        }
        <UserInfo/>
    </div>);
});
