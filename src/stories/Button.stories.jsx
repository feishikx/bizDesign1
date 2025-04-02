import React from 'react';
import Button from '../components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'primary', 'dashed', 'link', 'text'] },
    disabled: { control: 'boolean' },
  },
};

export const Default = (args) => <Button {...args}>Default Button</Button>;
Default.args = {
  type: 'default',
  disabled: false,
};

export const Primary = (args) => <Button {...args}>Primary Button</Button>;
Primary.args = {
  type: 'primary',
  disabled: false,
};

export const Dashed = (args) => <Button {...args}>Dashed Button</Button>;
Dashed.args = {
  type: 'dashed',
  disabled: false,
};

export const Link = (args) => <Button {...args}>Link Button</Button>;
Link.args = {
  type: 'link',
  disabled: false,
};

export const Text = (args) => <Button {...args}>Text Button</Button>;
Text.args = {
  type: 'text',
  disabled: false,
};