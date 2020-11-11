import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {Main} from "./Main";
import {ReduxStoreProviderDecorator} from "../../../ReduxStoreProviderDecorator";

export default {
    title: 'Project/Main',
    component: Main,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;


const Template: Story = (args) => <Main/>

export const UserInfoBaseExample = Template.bind({});
UserInfoBaseExample.args = {};
