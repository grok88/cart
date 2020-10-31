import { ThunkDispatch } from "redux-thunk";
import {AppRootStateType} from "../../../n1-main/m2-bll/store";

import {SWActionType, ThunkType} from "../../../n1-main/m2-bll/thunk";
import {ProductType} from "../p1-ui/Products";
import {ProductAPI} from "../p3-dal/ProductAPI";

export const GET_PRODUCTS = 'PRODUCTS/GET_PRODUCTS'; // blank

type loginInACType = ReturnType<typeof getProducts>;

export type ProductsReducerActions = loginInACType ;

export type ProductsInitialStateType = {
    products:Array<ProductType>
};

export const productsInitialState:ProductsInitialStateType = {
    products: []
};

export const productsReducer = (state: ProductsInitialStateType = productsInitialState, action: ProductsReducerActions) => {
    switch (action.type) {
        case "PRODUCTS/GET_PRODUCTS":
            debugger
            return {
                ...state,
                products: [ ...action.products]
            }

        default: {
            return state;
        }
    }
};

export const getProducts = (products:any) => {
    return {
        type: GET_PRODUCTS,
        products
    } as const
}

export const getProductsTC = (): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        debugger
        try {
            const res = await ProductAPI.getProducts();
            console.log(res);
            dispatch(getProducts(res));
        } catch (e) {

        }
    }
}
