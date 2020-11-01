import { AppRootStateType } from "../../../n1-main/m2-bll/store";

export const cartsSelector = (state: AppRootStateType) => state.products.productsInCart.filter(product => product.count > 0);
