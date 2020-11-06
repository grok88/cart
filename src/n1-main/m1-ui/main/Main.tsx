import React, { useEffect } from "react";
import {Products} from "../../../n2-features/f1-products/p1-ui/Products";
import {NavLink, Route} from "react-router-dom";
import {CartPage} from "../../../n2-features/f2-cart/c1-ui/CartPage";
import {AppBar, Button, Toolbar} from "@material-ui/core";
import {CartInfoBlock} from "../../../n2-features/f3-cartInfoBlock/c1-ui/CartInfoBlock";
import firebase from "firebase";

export const Main = () => {
    //
    // useEffect(() => {
    //     const db = firebase.database()
    //     const name = db.ref('order').on('value', elem => {
    //         // console.log(elem.val());
    //     });
    //     console.log(db);
    //     console.log(name);
    // }, [])

    // const [hasAcc, setHasAcc] = useState<boolean>(false)

    //firebase
    // const firebaseAccTest = () => {
    //     const [email, pass] = ['Alex@tut.by', '322322'];
    //     // firebase.auth().createUserWithEmailAndPassword(email,pass)
    //     //     .then(res =>  console.log(res))
    //     //     .catch(error => {
    //     //     console.log(error.code);
    //     //     console.log(error.message);
    //     // });
    //     firebase.auth().signInWithEmailAndPassword(email, pass)
    //         .then(res => {
    //                 setHasAcc(true)
    //             }
    //         )
    //         .catch(error => {
    //             console.log(error.code);
    //             console.log(error.message);
    //         });
    // }
    return (
        <>
            <AppBar position="static">
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <Button variant={"contained"} color={'secondary'} component={NavLink} to={'/'}>Shop</Button>
                    <CartInfoBlock/>
                    {/*<button onClick={firebaseAccTest}>Firebase test</button>*/}
                </Toolbar>
            </AppBar>

            <Route exact path={'/'} render={() => <Products/>}/> :
            <Route exact path={'/cart'} render={() => <CartPage/>}/>

        </>
    )
}
