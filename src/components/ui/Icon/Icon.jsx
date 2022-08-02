import React from "react";
import styles from "./Icon.module.scss";
import classNames from "classnames";

const Icon = ({ name, className, size, color }) => {
  return (
    <div
      style={{ borderColor: color }}
      className={classNames(className, styles.icon)}
    >
      <span style={{ fontSize: size, color }} className={name}></span>
    </div>
  );
};

export default Icon;
