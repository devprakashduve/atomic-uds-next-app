import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '.';
import { ButtonProps } from './ButtonProps.interface';

export default {
    title: 'Atoms/Button',
    component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const BaseButton = Template.bind({});
BaseButton.args = {
    label: 'Primary Button',
    disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
    variant: 'btn-primary',
    disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
    variant: 'btn-secondary',
};