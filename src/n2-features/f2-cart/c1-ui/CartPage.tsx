import React from 'react'
import {UserInfo} from "./userInfo/UserInfo";
import {Cart} from "./cart/Cart";

export const CartPage = React.memo(() => {
    return (<div>
        <div>
            <Cart/>
        </div>
        <UserInfo/>
    </div>);
});
