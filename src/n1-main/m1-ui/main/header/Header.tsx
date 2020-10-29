import React from "react";
import styles from './Header.module.css'
import {CartInfoBlock} from "../../../../n2-features/f3-cartInfoBlock/c1-ui/CartInfoBlock";
import {NavLink} from "react-router-dom";

export const Header = React.memo(() => {
    return (
        <div className={styles.headerBlock}>
            <NavLink to={'/'} style={{padding: '10px'}}>Home</NavLink>
            <CartInfoBlock/>
        </div>
    )
})
