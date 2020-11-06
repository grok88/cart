import {
    decrementCount,
    getProducts,
    incrementCount,
    ProductsInitialStateType,
    productsReducer, setProductsToCard
} from "./products-reducer";

let startState: ProductsInitialStateType;


beforeEach(() => {
    startState = {
        products: [
            {
                id: 1,
                title: 'Milk',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
                price: 20,
                imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
                count: 0
            },
            {
                id: 2,
                title: 'Beer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
                price: 30,
                imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
                count: 0
            }
        ],
        totalCount: 0,
        productsInCart: [
            {
                id: 1,
                title: 'Milk',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
                price: 20,
                imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
                count: 1
            },
            {
                id: 2,
                title: 'Beer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
                price: 30,
                imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
                count: 2
            }]
    }
});

test('correct Array<ProductType> should be added to startState.products', () => {
    let startInitialState: ProductsInitialStateType = {
        products: [],
        totalCount: 0,
        productsInCart: []
    }

    const products = [
        {
            id: 1,
            title: 'Milk',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
            price: 20,
            imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
            count: 0
        },
        {
            id: 2,
            title: 'Beer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
            price: 30,
            imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
            count: 0
        }
    ]
    const endState = productsReducer(startState, getProducts(products));

    expect(endState.products.length).toBe(2);
})
test('correct count in correct productsInCart should be increment by 1', () => {

    const endState = productsReducer(startState, incrementCount(1));

    expect(endState.products[0].count).toBe(0);
    expect(endState.products[0].count).toBe(0);
    expect(endState.productsInCart[0].count).toBe(2);
    expect(endState.productsInCart[1].count).toBe(2);
})
test('correct product should be added in productsInCart if this product is not in productsInCart', () => {
    let startInitialState: ProductsInitialStateType = {
        products: [],
        totalCount: 0,
        productsInCart: []
    }
    const product = {
        id: 1,
        title: 'Milk',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 20,
        imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
        count: 1
    }
    const endState = productsReducer(startInitialState, setProductsToCard(product));

    expect(endState.productsInCart[0]).toBeDefined();
    expect(endState.productsInCart[0].count).toBe(1);
})
test('correct count in correct productsInCart should be decrement by 1', () => {

    const endState = productsReducer(startState, decrementCount(2));

    expect(endState.products[0].count).toBe(0);
    expect(endState.products[0].count).toBe(0);
    expect(endState.productsInCart[0].count).toBe(1);
    expect(endState.productsInCart[1].count).toBe(1);
})
test('correct product should be deleted in  correct productsInCart  if count 1', () => {
    let startState = {
        products: [
            {
                id: 1,
                title: 'Milk',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
                price: 20,
                imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
                count: 0
            },
            {
                id: 2,
                title: 'Beer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
                price: 30,
                imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
                count: 0
            }
        ],
        totalCount: 0,
        productsInCart: [
            {
                id: 1,
                title: 'Milk',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
                price: 20,
                imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
                count: 1
            },
            {
                id: 2,
                title: 'Beer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
                price: 30,
                imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
                count: 1
            }]
    }

    const endState = productsReducer(startState, decrementCount(2));

    expect(endState.products[0].count).toBe(0);
    expect(endState.products[0].count).toBe(0);
    expect(endState.productsInCart.length).toBe(1);
    expect(endState.productsInCart[0].count).toBe(1);
    expect(endState.productsInCart[1]).toBeUndefined();
})

