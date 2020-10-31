import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../n1-main/m2-bll/store";

import {SWActionType, ThunkType} from "../../../n1-main/m2-bll/thunk";
import {ProductType} from "../p1-ui/Products";
import {ProductAPI} from "../p3-dal/ProductAPI";

export const GET_PRODUCTS = 'PRODUCTS/GET_PRODUCTS'; // blank
export const INCREMENT_COUNT = 'PRODUCTS/INCREMENT_COUNT'; // blank
export const DECREMENT_COUNT = 'PRODUCTS/DECREMENT_COUNT'; // blank

type loginInACType = ReturnType<typeof getProducts>;
type incrementCountACType = ReturnType<typeof incrementCount>;
type decrementCountACType = ReturnType<typeof decrementCount>;

export type ProductsReducerActions = loginInACType | incrementCountACType | decrementCountACType ;

export type ProductsInitialStateType = {
    products: Array<ProductType>
};

export const productsInitialState: ProductsInitialStateType = {
    products: [] // add local
};

export const productsReducer = (state: ProductsInitialStateType = productsInitialState, action: ProductsReducerActions) => {
        switch (action.type) {
            case "PRODUCTS/GET_PRODUCTS":
                return {
                    ...state,
                    // products: [ ...action.products]
                    products: [...state.products.map(p => ({
                        ...p,
                        ...(action.products.find(a => a.id === p.id) || {}),
                        count: p.count
                    })),
                        ...action.products.filter(p => !state.products.find(s => s.id === p.id))
                    ]
                }

            case 'PRODUCTS/INCREMENT_COUNT': {
                const newState = {
                    ...state,
                    products: state.products.map(p => p.id === action.id ? {...p, count: p.count + 1} : p)
                }
                //save to local
                return newState;
            }
            case 'PRODUCTS/DECREMENT_COUNT': {
                const newState = {
                    ...state,
                    products: state.products.map(p => p.id === action.id ? {...p, count: p.count - 1} : p)
                }
                //save to local
                return newState;
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

export const getProductsTC = (): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        try {
            const res = await ProductAPI.getProducts();
            // console.log(res);
            dispatch(getProducts(res));
        } catch (e) {

        }
    }
}
