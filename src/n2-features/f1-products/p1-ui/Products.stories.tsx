import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {Grid} from "@material-ui/core";
import {Products} from "./Products";
import { ReduxStoreProviderDecorator } from '../../../ReduxStoreProviderDecorator';

export default {
    title: 'Project/Products/ProductsPage',
    component: Products,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

// const removeCallback = action('Remove callback was clicked');

const Template: Story = (args) => <Products/>

export const ProductsPageBaseExample = Template.bind({});
ProductsPageBaseExample.args = {
};
