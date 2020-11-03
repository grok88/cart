import React from "react";
import styles from './CartInfoBlock.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../n1-main/m2-bll/store";
import { Button } from "@material-ui/core";

export const CartInfoBlock = React.memo(() => {

    const totalPrice = useSelector<AppRootStateType, number>(state => state.products.totalCount);

    return <div className={styles.CartInfoBlock} >

        {totalPrice ? <span className={styles.span}>{ totalPrice}</span> : ""}
        <Button variant={ "contained" } color={'secondary'}  component={NavLink} to={'/cart'}>Carts</Button>
        {/*<NavLink to={'/cart'} style={{padding: '10px'}}>Cart</NavLink>*/}
    </div>

})
