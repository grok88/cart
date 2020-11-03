import {Button, FormControl, FormGroup, Grid, Paper, TextField} from '@material-ui/core';
import React from 'react'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {ProductType} from "../../../f1-products/p1-ui/Products";
import {sendOrderTC} from '../../../f1-products/p2-bll/products-reducer';

export const UserInfo = React.memo(() => {
    const dispatch = useDispatch();
    const carts = useSelector<AppRootStateType, Array<ProductType>>(state => state.products.productsInCart);

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            address: '',
            phone: '',
        },
        onSubmit: values => {
            const order = {
                carts,
                userInfo: values
            }
            dispatch(sendOrderTC(order));
        },
    });

    return (<Paper elevation={3} style={{padding: '10px'}}>
        <Grid container justify="center">
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField label="NAME" margin="normal"  {...formik.getFieldProps('name')}/>
                        <TextField label="SURNAME" margin="normal" {...formik.getFieldProps('surname')}/>
                        <TextField label="ADDRESS" margin="normal"  {...formik.getFieldProps('address')}/>
                        <TextField label="PHONE" margin="normal" {...formik.getFieldProps('phone')}/>

                        <Button type={'submit'} variant={'contained'} color={'primary'}>ORDER</Button>
                    </FormGroup>
                </FormControl>
            </form>
            {/*<div>*/}
            {/*    <input type="text" placeholder={'NAME'}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input type="text" placeholder={'SURNAME'}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input type="text" placeholder={'ADDRESS'}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input type="text" placeholder={'PHONE'}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button type={'submit'}>ORDER</button>*/}
            {/*</div>*/}
        </Grid>
    </Paper>);
})
