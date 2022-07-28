import React from "react";
import classNames from "classnames";

const Button = ({
  children,
  onClick,
  className,
  outline,
  type = "button",
  style,
}) => {
  return (
    <button
      style={style}
      type={type}
      className={classNames(className, "button button--default", {
        "button-outline": outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
