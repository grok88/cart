import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../n1-main/m2-bll/store";

import {SWActionType, ThunkType} from "../../../n1-main/m2-bll/thunk";
import {ProductType} from "../p1-ui/Products";
import {ProductAPI} from "../p3-dal/ProductAPI";

export const GET_PRODUCTS = 'PRODUCTS/GET_PRODUCTS'; // blank
export const GET_CARTS_PRODUCTS = 'PRODUCTS/GET_CARTS_PRODUCTS'; // blank
export const INCREMENT_COUNT = 'PRODUCTS/INCREMENT_COUNT'; // blank
export const DECREMENT_COUNT = 'PRODUCTS/DECREMENT_COUNT'; // blank
export const TOTAL_PRICE = 'PRODUCTS/TOTAL_PRICE'; // blank
export const SET_PRODUCT_TO_CART = 'PRODUCTS/SET_PRODUCT_TO_CART'; // blank

type GetProductsACType = ReturnType<typeof getProducts>;
type GetCartsProductsACType = ReturnType<typeof getCartsProducts>;
type IncrementCountACType = ReturnType<typeof incrementCount>;
type DecrementCountACType = ReturnType<typeof decrementCount>;
type TotalPriceCountACType = ReturnType<typeof totalCartPrice>;
type SetProductsToCardACType = ReturnType<typeof setProductsToCard>;

export type ProductsReducerActions =
    GetProductsACType
    | GetCartsProductsACType
    | IncrementCountACType
    | DecrementCountACType
    | TotalPriceCountACType
    | SetProductsToCardACType;

export type ProductsInitialStateType = {
    products: Array<ProductType>
    productsInCart: Array<ProductType>
    totalCount: number
};

export const productsInitialState: ProductsInitialStateType = {
    products: [], //data in server
    totalCount: 0,
    productsInCart: [] // add product to cart
}

const getTotalPrice = (products: Array<ProductType>) => {
    return products.reduce((acc, cart) => {
        return acc + cart.count * cart.price
    }, 0);
}

export const productsReducer = (state: ProductsInitialStateType = productsInitialState, action: ProductsReducerActions) => {
        switch (action.type) {
            case "PRODUCTS/GET_PRODUCTS":
                return {
                    ...state,
                    products: action.products
                    // products: [...state.products.map(p => ({
                    //     ...p,
                    //     ...(action.products.find(a => a.id === p.id) || {}),
                    //     count: p.count
                    // })),
                    //     ...action.products.filter(p => !state.products.find(s => s.id === p.id))
                    // ]
                }
            case "PRODUCTS/GET_CARTS_PRODUCTS": {
                const products = Object.values(action.products).map(prod => prod);
                return {
                    ...state,
                    productsInCart: products,
                    totalCount: getTotalPrice(products)
                }
            }

            case "PRODUCTS/SET_PRODUCT_TO_CART": {
                const newState = {
                    ...state,
                    productsInCart: [...state.productsInCart, action.product],
                }
                localStorage.setItem('carts', JSON.stringify(newState.productsInCart));
                return {
                    ...newState,
                    totalCount: getTotalPrice(newState.productsInCart)
                }
            }

            case 'PRODUCTS/INCREMENT_COUNT': {
                const newState = {
                    ...state,
                    productsInCart: state.productsInCart.map(p => p.id === action.id ? {...p, count: p.count + 1} : p)
                }
                localStorage.setItem('carts', JSON.stringify(newState.productsInCart));
                return {
                    ...newState,
                    totalCount: getTotalPrice(newState.productsInCart)
                };
            }
            case 'PRODUCTS/DECREMENT_COUNT': {
                const newState = {
                    ...state,
                    productsInCart: state.productsInCart.map(p => p.id === action.id ? {...p, count: p.count - 1} : p)
                }
                //save to local
                let data = {
                    ...newState,
                    productsInCart: newState.productsInCart.filter(prod => prod.count !== 0),
                    totalCount: getTotalPrice(newState.productsInCart)
                }
                localStorage.setItem('carts', JSON.stringify(data.productsInCart));
                return data;
            }
            case "PRODUCTS/TOTAL_PRICE":
                return {
                    ...state,
                    totalCount: action.totalPrice
                }
            default: {
                return state;
            }
        }
    }
;

export const getProducts = (products: Array<ProductType>) => {
    return {
        type: GET_PRODUCTS,
        products
    } as const
}
export const setProductsToCard = (product: ProductType) => {
    return {
        type: SET_PRODUCT_TO_CART,
        product
    } as const
}
export const getCartsProducts = (products: Array<ProductType>) => {
    return {
        type: GET_CARTS_PRODUCTS,
        products
    } as const
}
export const incrementCount = (id: number) => {
    return {
        type: INCREMENT_COUNT,
        id
    } as const
}
export const decrementCount = (id: number) => {
    return {
        type: DECREMENT_COUNT,
        id
    } as const
}
export const totalCartPrice = (totalPrice: number) => {
    return {
        type: TOTAL_PRICE,
        totalPrice
    } as const
}

export const getProductsTC = (): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        try {
            const res = await ProductAPI.getProducts();
            dispatch(getProducts(res));
        } catch (e) {

        }
    }
}
