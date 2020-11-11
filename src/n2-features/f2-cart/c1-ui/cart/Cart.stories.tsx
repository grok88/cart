import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {ReduxStoreProviderDecorator} from "../../../../ReduxStoreProviderDecorator";
import {Paper} from "@material-ui/core";
import {Cart, CartPropsType} from "./Cart";

export default {
    title: 'Project/Carts/Cart',
    component: Cart,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

// const removeCallback = action('Remove callback was clicked');

const Template: Story<CartPropsType> = (args) => <Paper elevation={3} style={{margin: 10, padding: '0 10px'}}>
    <Cart {...args}/>
</Paper>

export const CartBaseExample = Template.bind({});
CartBaseExample.args = {
    cart: {
        id: 1,
        title: 'Milk',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 20,
        imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
        count: 3
    },
};
