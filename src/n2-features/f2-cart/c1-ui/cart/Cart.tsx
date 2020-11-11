import React from 'react'
import {ProductType} from "../../../f1-products/p1-ui/Products";
import {decrementCount, incrementCount} from "../../../f1-products/p2-bll/products-reducer";
import {useDispatch} from "react-redux";
import {ButtonBase, Grid, IconButton, Typography} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import {makeStyles} from '@material-ui/core/styles';

export type CartPropsType = {
    cart: ProductType
}

//styles
const useStyles = makeStyles({
    image: {
        width: 128,
        height: 128,
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    cartWidth: {
        ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    // cartItem : {
    //     ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
    //         width: '100%'
    //     }
    // }
});

export const Cart: React.FC<CartPropsType> = React.memo((props) => {
    const {cart: {id, title, description, imgUrl, price, count}} = props;

    //styles
    const classes = useStyles();

    const dispatch = useDispatch();

    const incrementHandler = (id: number) => {
        dispatch(incrementCount({id}));
    }
    const decrementHandler = (id: number) => {
        dispatch(decrementCount({id}));
    }

    return <Grid item container spacing={3} style={{minWidth: '550px'}}>
        <Grid item xs={12} sm={3}>
            <ButtonBase className={classes.image}>
                <img alt="complex" src={imgUrl} className={classes.img}/>
            </ButtonBase>
        </Grid>
        <Grid item container direction="column" spacing={2} justify={'center'} xs={12} sm={5}>
            <Typography gutterBottom variant={'subtitle1'}>{title}</Typography>
            <Typography gutterBottom variant="body2">{description}</Typography>
            <Typography>Price : {price} $</Typography>
        </Grid>
        <Grid item container xs={12} alignItems={'center'} sm={4}>
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
