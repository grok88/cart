import {OrderType} from "../p2-bll/products-reducer";
import firebase from 'firebase'


export const ProductAPI = {
    sendOrder(order: OrderType) {
        const db = firebase.database();
        return db.ref('order/').push(order);
    },
    getProducts(cb: any) {
        const db = firebase.database()
        db.ref('products/-MLJiLmOpramU8PpjJQj').on('value', cb);
    }
}
