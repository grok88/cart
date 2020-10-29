import {ProductType} from "../p1-ui/Products";

const products: Array<ProductType> = [
    {
        id: 1,
        title: 'Milk',
        description: 'description',
        price: 20,
        imgUrl: 'url'
    },
    {
        id: 2,
        title: 'Beer',
        description: 'description',
        price: 30,
        imgUrl: 'url'
    },
    {
        id: 3,
        title: 'Bread',
        description: 'description',
        price: 10,
        imgUrl: 'url'
    },
    {
        id: 4,
        title: 'apple',
        description: 'description',
        price: 5,
        imgUrl: 'url'
    }
]

export const ProductAPI = {
    getProducts() {
        return new Promise((res) => {
            setTimeout(() => {
                res(products);
            }, 3000);
        })
    }
}
