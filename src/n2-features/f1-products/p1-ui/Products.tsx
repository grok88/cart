import React from "react";
import {Product} from "./product/Product";

export type ProductType = {
    id: number
    title: string
    description: string
    price: number
    imgUrl: string
}
export const Products = React.memo(() => {
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
    return (<div>
            {
                products.map(product => {
                    return <Product product={product} key={product.id}/>
                })
            }
        </div>
    )
})
