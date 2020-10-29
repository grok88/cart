import React from "react";
import {Products} from "../../../n2-features/f1-products/p1-ui/Products";
import {Header} from "./header/Header";
import {Route} from "react-router-dom";
import {CartPage} from "../../../n2-features/f2-cart/c1-ui/CartPage";

export const Main = () => {
    return (
        <>
            <Header/>
            <Route exact path={'/'} render={() => <Products/>}/>
            <Route exact path={'/cart'} render={() => <CartPage/>}/>
        </>
    )
}
