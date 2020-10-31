import React from 'react'
import {UserInfo} from "./userInfo/UserInfo";
import {Cart} from "./cart/Cart";
import {useSelector} from 'react-redux';
import {cartsSelector} from '../c2-bll/selectors';

export const CartPage = React.memo(() => {
    const carts = useSelector(cartsSelector);

    const TotalPrice = carts.reduce((acc, cart) => {
        return acc + cart.count * cart.price
    }, 0);

    return (<div>
        {
            carts.map(cart => <Cart cart={cart} key={cart.id}/>)
        }
        <UserInfo/>
        <div>
            Total: {TotalPrice} $
        </div>
    </div>);
});
