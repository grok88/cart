import React from "react";
import styles from './CartInfoBlock.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../n1-main/m2-bll/store";

export const CartInfoBlock = React.memo(() => {

    const totalPrice = useSelector<AppRootStateType>(state => state.products.totalCount);

    console.log(totalPrice)

    return <div className={styles.CartInfoBlock}>
        {totalPrice ? totalPrice : ""}
        {/*totalPrice && <div>{totalPrice}</div>*/}
        <NavLink to={'/cart'} style={{padding: '10px'}}>Cart</NavLink>
    </div>

})
