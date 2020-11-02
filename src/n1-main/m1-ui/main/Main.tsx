import React from "react";
import {Products} from "../../../n2-features/f1-products/p1-ui/Products";
import {Header} from "./header/Header";
import {NavLink, Route} from "react-router-dom";
import {CartPage} from "../../../n2-features/f2-cart/c1-ui/CartPage";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton/IconButton";
import { Menu } from "@material-ui/icons";
import {CartInfoBlock} from "../../../n2-features/f3-cartInfoBlock/c1-ui/CartInfoBlock";

export const Main = () => {


    return (
        <>
            <AppBar position="static">
                <Toolbar style={{justifyContent:'space-between'}}>
                    <Button variant={ "contained" } color={'secondary'}  component={NavLink} to={'/'} >Shop</Button>
                    <CartInfoBlock />
                </Toolbar>
            </AppBar>
            {/*<Header/>*/}
            <Route exact path={'/'} render={() => <Products/>}/>
            <Route exact path={'/cart'} render={() => <CartPage/>}/>
        </>
    )
}
