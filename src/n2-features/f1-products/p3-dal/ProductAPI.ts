import {ProductType} from "../p1-ui/Products";

const products: Array<ProductType> = [
    {
        id: 1,
        title: 'Milk',
        description: 'description',
        price: 20,
        imgUrl: 'url',
        count:0
    },
    {
        id: 2,
        title: 'Beer',
        description: 'description',
        price: 30,
        imgUrl: 'url',
        count:0
    },
    {
        id: 3,
        title: 'Bread',
        description: 'description',
        price: 10,
        imgUrl: 'url',
        count:1
    },
    {
        id: 4,
        title: 'apple',
        description: 'description',
        price: 5,
        imgUrl: 'url',
        count:2
    }
]

export const ProductAPI = {
    getProducts() {
        return new Promise<Array<ProductType>>((res) => {
            setTimeout(() => {
                // res(products.map(p => ({ ...p, count:0})));
                res(products);
            }, 3000);
        })
    }

}
