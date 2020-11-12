// import {SWActionType, ThunkType} from "../../../n1-main/m2-bll/thunk";
import {FormDataType} from "../../f2-cart/c1-ui/userInfo/UserInfo";
import {ProductType} from "../p1-ui/Products";
import {ProductAPI} from "../p3-dal/ProductAPI";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "react";


// export const GET_PRODUCTS = 'PRODUCTS/GET_PRODUCTS'; // blank
// export const GET_CARTS_PRODUCTS = 'PRODUCTS/GET_CARTS_PRODUCTS'; // blank
// export const INCREMENT_COUNT = 'PRODUCTS/INCREMENT_COUNT'; // blank
// export const DECREMENT_COUNT = 'PRODUCTS/DECREMENT_COUNT'; // blank
// export const TOTAL_PRICE = 'PRODUCTS/TOTAL_PRICE'; // blank
// export const SET_PRODUCT_TO_CART = 'PRODUCTS/SET_PRODUCT_TO_CART'; // blank

// type GetProductsACType = ReturnType<typeof getProducts>;
// type GetCartsProductsACType = ReturnType<typeof getCartsProducts>;
// type IncrementCountACType = ReturnType<typeof incrementCount>;
// type DecrementCountACType = ReturnType<typeof decrementCount>;
// type TotalPriceCountACType = ReturnType<typeof totalCartPrice>;
// type SetProductsToCardACType = ReturnType<typeof setProductsToCard>;

// export type ProductsReducerActions =
//
// // GetProductsACType
//     | GetCartsProductsACType
//     | IncrementCountACType
//     | DecrementCountACType
//     | SetProductsToCardACType;

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

export const getProductsTC = createAsyncThunk<{ products: ProductType[] }, undefined>('products/getProducts',
    async (param, thunkAPI) => {

        return await new Promise((res, rej) => {
            const cb = (elem: any) => {
                // thunkAPI.dispatch(getProducts({products: elem.val()}));
                res({products: elem.val()});
            }
            ProductAPI.getProducts(cb);
        })

    })
const slice = createSlice({
    name: 'products',
    initialState: productsInitialState,
    reducers: {
        // getProducts(state, action: PayloadAction<{ products: Array<ProductType> }>) {
        //     state.products = action.payload.products
        // },
        setProductsToCard(state, action: PayloadAction<{ product: ProductType }>) {
            // const newState = {
            //     ...state,
            //     productsInCart: [...state.productsInCart, action.payload.product],
            // }

            state.productsInCart = [...state.productsInCart, action.payload.product]
            localStorage.setItem('carts', JSON.stringify(state.productsInCart));
            state.totalCount = getTotalPrice(state.productsInCart)
            // return {
            //     ...newState,
            //     totalCount: getTotalPrice(newState.productsInCart)
            // }
        },
        getCartsProducts(state, action: PayloadAction<{ products: ProductType[] }>) {
            // const products = Object.values(action.payload.products).map(prod => prod);
            state.productsInCart = action.payload.products
            state.totalCount = getTotalPrice(action.payload.products)
            // return {
            //     ...state,
            //     productsInCart: products,
            //     totalCount: getTotalPrice(products)
            // }
        },
        incrementCount(state, action: PayloadAction<{ id: number }>) {
            // const newState = {
            //     ...state,
            //     productsInCart: state.productsInCart.map(p => p.id === action.payload.id ? {
            //         ...p,
            //         count: p.count + 1
            //     } : p)
            // }
            const index = state.productsInCart.findIndex(p => p.id === action.payload.id)
            if (index >= 0) {
                state.productsInCart[index].count += 1
            }
            // localStorage.setItem('carts', JSON.stringify(newState.productsInCart));
            localStorage.setItem('carts', JSON.stringify(state.productsInCart));
            state.totalCount = getTotalPrice(state.productsInCart)
            // return {
            //     ...newState,
            //     totalCount: getTotalPrice(newState.productsInCart)
            // };
        },
        decrementCount(state, action: PayloadAction<{ id: number }>) {
            // const newState = {
            //     ...state,
            //     productsInCart: state.productsInCart.map(p => p.id === action.payload.id ? {
            //         ...p,
            //         count: p.count - 1
            //     } : p)
            // }
            // //save to local
            // let data = {
            //     ...newState,
            //     productsInCart: newState.productsInCart.filter(prod => prod.count !== 0),
            //     totalCount: getTotalPrice(newState.productsInCart)
            // }
            // localStorage.setItem('carts', JSON.stringify(data.productsInCart));
            // return data;

            const index = state.productsInCart.findIndex(p => p.id === action.payload.id)
            if(index >=0){
                state.productsInCart[index].count -=1
            }
            const indexCount = state.productsInCart.findIndex(p => p.count === 0);

            if(indexCount !== -1){
                state.productsInCart.splice(indexCount,1)
            }
            state.totalCount = getTotalPrice(state.productsInCart)
            localStorage.setItem('carts', JSON.stringify(state.productsInCart));
        }
    },
    extraReducers: builder => {
        builder.addCase(getProductsTC.fulfilled, (state, action) => {
            if (action.payload) {
                state.products = action.payload.products
            }
        })
    }
});

//reducer
export const productsReducer = slice.reducer;

//actions
export const {decrementCount, getCartsProducts, incrementCount, setProductsToCard} = slice.actions;

/*export const productsReducer = (state: ProductsInitialStateType = productsInitialState, action: ProductsReducerActions) => {
        switch (action.type) {
            case "PRODUCTS/GET_PRODUCTS":
                return {
                    ...state,
                    products: action.products
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
            default: {
                return state;
            }
        }
    }
;*/

// old for redux
/*export const getProducts = (products: Array<ProductType>) => {
    return {
        type: GET_PRODUCTS,
        products
    } as const
}*/

/*
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
*/

//thunk
export const _getProductsTC = () => {
    return async (dispatch: Dispatch<any>) => {
        try {
            // const db = firebase.database()
            // const name = await db.ref('products/-MLJiLmOpramU8PpjJQj').on('value', elem => {
            //     // console.log(elem.val());
            //     dispatch(getProducts(elem.val()));
            // });
            // const cb = (elem: any) => {
            //     dispatch(getProducts({products: elem.val()}));
            // }
            // ProductAPI.getProducts(cb);
        } catch (e) {

        }
    }
}
export type OrderType = {
    carts: Array<ProductType>,
    userInfo: FormDataType
}

export const sendOrderTC = (order: OrderType) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const res = await ProductAPI.sendOrder(order);
            alert('success');
        } catch (e) {

        }
    }
}
