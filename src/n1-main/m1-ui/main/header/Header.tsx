import React from "react";
import styles from './Header.module.css'
import {CartInfoBlock} from "../../../../n2-features/f3-cartInfoBlock/c1-ui/CartInfoBlock";

export const Header = React.memo(() => {
    return (
        <div className={styles.headerBlock}>
            Header
            <CartInfoBlock/>
        </div>
    )
})
