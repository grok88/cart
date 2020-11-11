import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import { ReduxStoreProviderDecorator } from '../../../../ReduxStoreProviderDecorator';
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import {Header} from "./Header";

export default {
    title: 'Project/Header/Header',
    decorators:[ReduxStoreProviderDecorator]
} as Meta;


const TemplateHeader: Story = (args) => <Header/>

export const HeaderBaseExample = TemplateHeader.bind({});
HeaderBaseExample.args = {};



const TemplateBtn: Story = (args) => <Button variant={"contained"} color={'secondary'} component={NavLink} to={'/'}>Shop</Button>

export const HomeBtn = TemplateBtn.bind({});
HomeBtn.args = {};


