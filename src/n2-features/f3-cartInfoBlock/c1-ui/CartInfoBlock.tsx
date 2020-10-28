import React from "react";
import styles from './CartInfoBlock.module.css'
import {NavLink} from "react-router-dom";

export const CartInfoBlock = React.memo(() => {
    return (<div className={styles.CartInfoBlock}>
            <NavLink to={'/cart'} style={{padding: '10px'}}>Cart</NavLink>
        </div>
    )
})
