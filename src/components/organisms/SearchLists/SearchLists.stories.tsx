import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchLists from '.';

export default {
  title: 'Organisms/SearchLists',
  component: SearchLists,
} as Meta;

const Template: StoryFn = (args) => <SearchLists {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  // Add custom props here
};