import React from 'react';
import { Input as AntInput } from 'antd';
import styles from './Input.module.css';

const Input = ({ disabled = false, ...rest }) => {
  return (
    <AntInput disabled={disabled} className={styles.customInput} {...rest} />
  );
};

export default Input;