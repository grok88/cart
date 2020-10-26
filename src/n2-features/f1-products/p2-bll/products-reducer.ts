// export const LOGIN_IN = 'LOGIN/LOGIN_IN'; // blank
// export const SET_LOGIN_ERROR = 'LOGIN/SET_ERROR'; // blank

type loginInACType = ReturnType<typeof blank>;

export type ProductsReducerActions = loginInACType ;


export type ProductsInitialStateType = typeof productsInitialState;


export const productsInitialState = {};

export const productsReducer = (state: ProductsInitialStateType = productsInitialState, action: ProductsReducerActions) => {
    switch (action.type) {


        default: {
            return state;
        }
    }
};


export const blank = () => {
    return {
        type: 'BLANK'
    } as const
}
