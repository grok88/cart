import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {ReduxStoreProviderDecorator} from "../../../../ReduxStoreProviderDecorator";
import {Grid} from "@material-ui/core";
import {UserInfo} from "./UserInfo";

export default {
    title: 'Project/Carts/UserInfo',
    component: UserInfo,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

// const removeCallback = action('Remove callback was clicked');

const Template: Story = (args) => <Grid item xs={12} sm={4}>
    <UserInfo/>
</Grid>

export const UserInfoBaseExample = Template.bind({});
UserInfoBaseExample.args = {};
