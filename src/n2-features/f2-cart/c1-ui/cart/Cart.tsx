import React from 'react'
import {ProductType} from "../../../f1-products/p1-ui/Products";
import {decrementCount, incrementCount} from "../../../f1-products/p2-bll/products-reducer";
import {useDispatch} from "react-redux";
import {ButtonBase, Grid, IconButton, Typography} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

type CartPropsType = {
    cart: ProductType
}

export const Cart: React.FC<CartPropsType> = React.memo((props) => {
    const dispatch = useDispatch();

    const {cart: {id, title, description, imgUrl, price, count}} = props;

    const incrementHandler = (id: number) => {
        dispatch(incrementCount(id));
    }
    const decrementHandler = (id: number) => {
        dispatch(decrementCount(id));
    }

    return <Grid item container spacing={3}>
        <Grid item xs={3}>
            <ButtonBase style={{
                width: '123px',
                height: '128px'
            }}>
                <img alt="complex" src={imgUrl} style={{
                    maxWidth: '100%',
                    maxHeight: '100%'
                }}/>
            </ButtonBase>
        </Grid>
        <Grid item container direction="column" spacing={2} justify={'center'} xs={6}>
            <Typography gutterBottom variant={'subtitle1'}>{title}</Typography>
            <Typography gutterBottom variant="body2">{description}</Typography>
            <Typography>Price : {price} $</Typography>
        </Grid>
        <Grid item container xs={3} alignItems={'center'}>
            <IconButton onClick={() => decrementHandler(id)}>
                <RemoveCircleOutlineIcon fontSize={'large'}/>
            </IconButton>
            <Typography variant={'h5'}> {count}</Typography>

            <IconButton onClick={() => incrementHandler(id)}>
                <AddCircleOutlineOutlinedIcon fontSize={'large'}/>
            </IconButton>
        </Grid>
    </Grid>
})
