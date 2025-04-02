import React from "react";
import { Select as AntSelect } from "antd";
import styles from "./Select.module.css";

const Select = ({ disabled = false, ...rest }) => {
  return <AntSelect disabled={disabled} className={styles.customSelect} {...rest} />;
};

export default Select;
