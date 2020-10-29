import {applyMiddleware, combineReducers, createStore} from "redux";
import {productsReducer} from "../../n2-features/f1-products/p2-bll/products-reducer";
import thunk from 'redux-thunk'


const RootReducer = combineReducers({
    products: productsReducer
});

export type AppRootStateType = ReturnType<typeof RootReducer>;
export const store = createStore(RootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;
