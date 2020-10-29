import { ThunkDispatch } from "redux-thunk";
import {AppRootStateType} from "../../../n1-main/m2-bll/store";

import {SWActionType, ThunkType} from "../../../n1-main/m2-bll/thunk";
import {ProductType} from "../p1-ui/Products";
import {ProductAPI} from "../p3-dal/ProductAPI";

export const GET_PRODUCTS = 'PRODUCTS/GET_PRODUCTS'; // blank

type loginInACType = ReturnType<typeof getProducts>;

export type ProductsReducerActions = loginInACType ;
export type ProductsInitialStateType = typeof productsInitialState;


export const productsInitialState = {
    products: [] as Array<ProductType>
};

export const productsReducer = (state: ProductsInitialStateType = productsInitialState, action: ProductsReducerActions) => {
    switch (action.type) {
        case "PRODUCTS/GET_PRODUCTS":
            return {
                ...state,
                products: action.products
            }

        default: {
            return state;
        }
    }
};


export const getProducts = (products: any) => {
    return {
        type: GET_PRODUCTS,
        products
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
