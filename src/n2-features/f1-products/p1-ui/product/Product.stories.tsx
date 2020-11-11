import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {Product, ProductPropsType} from "./Product";
import {ReduxStoreProviderDecorator} from "../../../../ReduxStoreProviderDecorator";
import {Grid} from "@material-ui/core";

export default {
    title: 'Project/Products/Product',
    component: Product,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

// const removeCallback = action('Remove callback was clicked');

const Template: Story<ProductPropsType> = (args) => <Grid item xs={6} sm={4} style={{minWidth: '280px'}}>
    <Product {...args}/>
</Grid>

export const ProductBaseExample = Template.bind({});
ProductBaseExample.args = {
    product: {
        id: 1,
        title: 'Milk',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias!',
        price: 20,
        imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/98843/pub_5bd19777060b8d00aa9f34f9_5bd1de71ad476400aa79dd85/scale_1200',
        count: 0
    },
};
