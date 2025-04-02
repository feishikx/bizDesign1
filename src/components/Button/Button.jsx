import React from "react";
import { Button as AntButton } from "antd";
import styles from "./Button.module.css";

const Button = ({ children, type = "default", disabled = false, ...rest }) => {
  return (
    <AntButton type={type} disabled={disabled} className={styles.customButton} {...rest}>
      {children}
    </AntButton>
  );
};

export default Button;
