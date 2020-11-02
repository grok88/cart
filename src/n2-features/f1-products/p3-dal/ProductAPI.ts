import {ProductType} from "../p1-ui/Products";

const products: Array<ProductType> = [
    {
        id: 1,
        title: 'Milk',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 20,
        imgUrl: 'https://pbs.twimg.com/media/ECuRR7zWsAIVkj4.jpg:large',
        count:0
    },
    {
        id: 2,
        title: 'Beer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 30,
        imgUrl: 'https://pbs.twimg.com/media/ECuRR7zWsAIVkj4.jpg:large',
        count:0
    },
    {
        id: 3,
        title: 'Bread',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 10,
        imgUrl: 'https://pbs.twimg.com/media/ECuRR7zWsAIVkj4.jpg:large',
        count:0
    },
    {
        id: 4,
        title: 'apple',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 5,
        imgUrl: 'https://pbs.twimg.com/media/ECuRR7zWsAIVkj4.jpg:large',
        count:0
    }
]

export const ProductAPI = {
    getProducts() {
        return new Promise<Array<ProductType>>((res) => {
            setTimeout(() => {
                // res(products.map(p => ({ ...p, count:0})));
                res(products);
            }, 1000);
        })
    }
}
