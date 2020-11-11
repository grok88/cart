import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {CartPage} from "./CartPage";
import {ReduxStoreProviderDecorator} from '../../../ReduxStoreProviderDecorator';

export default {
    title: 'Project/Carts/Carts',
    component: CartPage,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

// const removeCallback = action('Remove callback was clicked');

const Template: Story = (args) => <CartPage/>

export const CartPageBaseExample = Template.bind({});
CartPageBaseExample.args = {};
