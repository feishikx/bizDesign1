import React from 'react';
import Button from '../components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: { control: 'select', options: ['default', 'primary', 'dashed', 'link', 'text'] },
    disabled: { control: 'boolean' },
  },
};

export const Default = (args) => <Button {...args}>Custom Button</Button>;

Default.args = {
  type: 'primary',
  disabled: false,
};