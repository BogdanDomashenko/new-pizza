import React from "react";
import classNames from "classnames";
import styles from "./IconButton.module.scss";

const IconButton = ({ className, onClick, iconName }) => {
  return (
    <button
      className={classNames(className, styles.burgerButton)}
      onClick={onClick}
    >
      <span className={iconName}></span>
    </button>
  );
};

export default IconButton;
