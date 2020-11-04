import {ProductType} from "../p1-ui/Products";
import {OrderType} from "../p2-bll/products-reducer";

 export const products: Array<ProductType> = [
    {
        id: 1,
        title: 'Milk',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 20,
        imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
        count:0
    },
    {
        id: 2,
        title: 'Beer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 30,
        imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
        count:0
    },
    {
        id: 3,
        title: 'Bread',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 10,
        imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
        count:0
    },
    {
        id: 4,
        title: 'apple',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 5,
        imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
        count:0
    },
    {
        id: 5,
        title: 'carpet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 50,
        imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
        count:0
    },
    {
        id: 6,
        title: 'phone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 100,
        imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
        count:0
    },

]

export const ProductAPI = {
    getProducts() {
        return new Promise<Array<ProductType>>((res) => {
            setTimeout(() => {
                // res(products.map(p => ({ ...p, count:0})));
                res(products);
            }, 1000);
        })
    },
    sendOrder(order:OrderType) {
        return new Promise<OrderType>((res) => {
            setTimeout(() => {
                res(order);
            }, 1000);
        })
    }
}
