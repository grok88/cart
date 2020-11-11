import {combineReducers} from "redux";
import {productsReducer} from "../../n2-features/f1-products/p2-bll/products-reducer";
import thunk from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";


const RootReducer = combineReducers({
    products: productsReducer
});

export type AppRootStateType = ReturnType<typeof RootReducer>;

//store for redux
// export const store = createStore(RootReducer, applyMiddleware(thunk));

//store for redux-toolkit
export const store = configureStore({
    reducer: RootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

// @ts-ignore
window.store = store;
