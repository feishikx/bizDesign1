import React from 'react';
import MyLess from '../components/MyLess/MyLess';

export default {
  title: 'Components/MyLess',
  component: MyLess,
};

export const Default = (args) => <MyLess {...args}>Default MyLess</MyLess>;
Default.args = {
};
