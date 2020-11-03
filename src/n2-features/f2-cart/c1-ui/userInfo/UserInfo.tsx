import {Button, FormControl, FormGroup, Grid, Paper, TextField} from '@material-ui/core';
import React from 'react'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {ProductType} from "../../../f1-products/p1-ui/Products";
import {sendOrderTC} from '../../../f1-products/p2-bll/products-reducer';
import {makeStyles} from '@material-ui/core/styles';

//styles
const useStyles = makeStyles({
    error: {
        color: 'red'
    },
    paperWrapper: {
        padding: '10px'
    }
});
export type FormDataType = {
    name: string,
    surname: string,
    address: string,
    phone: string,
}
export type FormErrorType = {
    name?: string,
    surname?: string,
    address?: string,
    phone?: string,
}

const validate = (values: FormDataType) => {
    const errors: FormErrorType = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }

    if (!values.surname) {
        errors.surname = 'Required';
    } else if (values.surname.length > 20) {
        errors.surname = 'Must be 20 characters or less';
    }
    if (!values.address) {
        errors.address = 'Required';
    } else if (values.address.length > 20) {
        errors.address = 'Must be 20 characters or less';
    }
    if (!values.phone) {
        errors.phone = 'Required';
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.phone)) {
        errors.phone = 'Invalid phone number';
    }

    return errors;
};
export const UserInfo = React.memo(() => {
    const dispatch = useDispatch();
    const carts = useSelector<AppRootStateType, Array<ProductType>>(state => state.products.productsInCart);

    //styles
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            address: '',
            phone: '',
        },
        validate,
        onSubmit: (values: FormDataType) => {
            const order = {
                carts,
                userInfo: values
            }
            dispatch(sendOrderTC(order));
        },
    });

    return (<Paper elevation={3} className={classes.paperWrapper}>
        <Grid container justify="center">
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField label="NAME" margin="normal"  {...formik.getFieldProps('name')}/>
                        {formik.touched.name && formik.errors.name ? (
                            <div className={classes.error}>{formik.errors.name}</div>
                        ) : null}
                        <TextField label="SURNAME" margin="normal" {...formik.getFieldProps('surname')}/>
                        {formik.touched.surname && formik.errors.surname ? (
                            <div className={classes.error}>{formik.errors.surname}</div>
                        ) : null}
                        <TextField label="ADDRESS" margin="normal"  {...formik.getFieldProps('address')}/>
                        {formik.touched.address && formik.errors.address ? (
                            <div className={classes.error}>{formik.errors.address}</div>
                        ) : null}
                        <TextField label="PHONE" margin="normal" {...formik.getFieldProps('phone')}/>
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className={classes.error}>{formik.errors.phone}</div>
                        ) : null}

                        <Button type={'submit'} variant={'contained'} color={'primary'}
                                style={{marginTop: '10px'}}>ORDER</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Paper>);
})
