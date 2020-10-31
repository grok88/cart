import { AppRootStateType } from "../../../n1-main/m2-bll/store";

export const cartsSelector = (state: AppRootStateType) => state.products.products.filter(product => product.count > 0);
