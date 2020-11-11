import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {CartInfoBlock} from './CartInfoBlock';
import { ReduxStoreProviderDecorator } from '../../../ReduxStoreProviderDecorator';
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

export default {
    title: 'Project/Header/CartInfoBlock',
    component: CartInfoBlock,
    decorators:[ReduxStoreProviderDecorator]
} as Meta;

// const removeCallback = action('Remove callback was clicked');

const Template: Story = (args) => <CartInfoBlock/>

export const CartInfoBlockBaseExample = Template.bind({});
CartInfoBlockBaseExample.args = {};


const TemplateBtn: Story = (args) =>  <Button variant={ "contained" } color={'secondary'}  component={NavLink} to={'/cart'}>Carts</Button>

export const CartInfoBlockBtnBaseExample = TemplateBtn.bind({});
CartInfoBlockBtnBaseExample.args = {};

