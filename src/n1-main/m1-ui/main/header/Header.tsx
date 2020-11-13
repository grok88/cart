import React from "react";
import {AppBar, Button, Toolbar} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {CartInfoBlock} from "../../../../n2-features/f3-cartInfoBlock/c1-ui/CartInfoBlock";

export const Header = () => {
    return <AppBar position="static">
        <Toolbar style={{justifyContent: 'space-between'}}>
            <Button variant={"contained"} color={'secondary'} component={NavLink} to={'/'}>Shop</Button>
            <CartInfoBlock/>
        </Toolbar>
    </AppBar>
}
