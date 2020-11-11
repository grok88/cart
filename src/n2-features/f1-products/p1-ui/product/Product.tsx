import React from "react";
import {ProductType} from "../Products";
import {useDispatch, useSelector} from "react-redux";
import {incrementCount, setProductsToCard} from "../../p2-bll/products-reducer";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

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
    price: {
        fontSize: 18,
        marginTop: 6
    },
    btn: {
        textAlign: 'center'
    }
});

export type ProductPropsType = {
    product: ProductType
}

export const Product: React.FC<ProductPropsType> = React.memo((props) => {
    const {product: {description, id, imgUrl, price, title}} = props;

    //styles
    const classes = useStyles();


    const productsInCart = useSelector<AppRootStateType, Array<ProductType>>((state: AppRootStateType) => state.products.productsInCart)
    const dispatch = useDispatch();

    const incrementHandler = (id: number) => {
        const productInCart = productsInCart.find(product => product.id === id)
        if (productInCart) {
            dispatch(incrementCount({id}));
        } else {
            const newProduct: ProductType = {
                ...props.product,
                count: 1
            }
            dispatch(setProductsToCard({product:newProduct}));
        }
    }
    return <Card elevation={3}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt="Product Image"
                height="auto"
                image={imgUrl}
                title="Product Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Typography gutterBottom className={classes.price}>
                    Price: {price}$
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button onClick={() => incrementHandler(id)} variant="outlined" color="primary">Add to Cart</Button>
        </CardActions>
    </Card>
})
