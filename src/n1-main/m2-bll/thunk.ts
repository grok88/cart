import {AppRootStateType} from "./store";
import {ProductsReducerActions} from "../../n2-features/f1-products/p2-bll/products-reducer";
import {ThunkAction} from "redux-thunk";

export type SWActionType = | ProductsReducerActions;


export type ThunkType = ThunkAction<void, AppRootStateType, unknown, SWActionType>;
