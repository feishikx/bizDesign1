import React from 'react';
import Input from '../components/Input/Input';


export default {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
      disabled: { control: 'boolean' },
      placeholder: { control: 'text' },
    },
  };
  
  const Template = (args) => <Input {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    placeholder: '请输入内容',
    disabled: false,
  };

  export const Disabled = Template.bind({});
  Disabled.args = {
    placeholder: '',
    disabled: true,
  };
