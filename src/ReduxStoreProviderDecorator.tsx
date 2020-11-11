import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {productsReducer} from "./n2-features/f1-products/p2-bll/products-reducer";
import {AppRootStateType} from "./n1-main/m2-bll/store";


const RootReducer = combineReducers({
    products: productsReducer
});

const initialGlobalState: AppRootStateType = {
    products: {
        totalCount: 60,
        productsInCart: [
            {
                id: 1,
                title: 'Milk',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
                price: 20,
                imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
                count: 3
            },
        ],
        products: [
            {
                id: 1,
                title: 'Milk',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
                price: 20,
                imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
                count: 0
            },
        ]
    }
}

export const storyBookStore = createStore(RootReducer, initialGlobalState);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>
        <BrowserRouter>
            {storyFn()}
        </BrowserRouter>
    </Provider>
}
