import {combineReducers, createStore} from "redux";
import {productsReducer} from "../../n2-features/f1-products/p2-bll/products-reducer";


const RootReducer = combineReducers({
    products: productsReducer
});

export type AppRootStateType = ReturnType<typeof RootReducer>;
export const store = createStore(RootReducer);
