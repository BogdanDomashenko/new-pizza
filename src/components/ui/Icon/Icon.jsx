import React from "react";
import styles from "./Icon.module.scss";
import classNames from "classnames";

const Icon = ({ name, className, size, color }) => {
  return (
    <div className={classNames(className, styles.icon)}>
      <span
        style={{ fontSize: size, color, borderColor: color }}
        className={name}
      ></span>
    </div>
  );
};

export default Icon;
