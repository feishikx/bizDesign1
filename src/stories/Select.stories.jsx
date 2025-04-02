import React from 'react';
import Select from '../components/Select/Select';


export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    options: { control: 'array' },
  },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '请选择',
  disabled: false,
  options: [
    { value: 'option1', label: '选项1' },
    { value: 'option2', label: '选项2' },
    { value: 'option3', label: '选项3' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: '不可用',
  disabled: true,
  options: [
    { value: 'option1', label: '选项1' },
    { value: 'option2', label: '选项2' },
  ],
};