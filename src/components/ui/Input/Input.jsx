import classNames from "classnames";

import styles from "./Input.module.scss";

function Input(props) {
  return (
    <div
      className={classNames(styles.input, props.className, {
        "input--with-icon": props.icon,
        [styles.input_error]: props.error,
      })}
    >
      <div className={styles.icon}>{props.icon}</div>
      <input {...props}></input>
      {props.label ? <div className={styles.label}>{props.label}</div> : ""}
      {props.error ? <span className={styles.error}>{props.error}</span> : ""}
    </div>
  );
}

export default Input;
