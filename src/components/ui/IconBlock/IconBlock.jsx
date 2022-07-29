import React from "react";
import styles from "./IconBlock.module.scss";
import { Icon } from "../index";
import PropTypes from "prop-types";
import classNames from "classnames";

const TEXT_POSITION = {
  right: "right",
  down: "down",
};

const IconBlock = ({ iconName, color, textPosition }) => {
  return (
    <div
      className={classNames(styles.iconBlock, {
        [styles.iconBlock_textRigth]: textPosition === TEXT_POSITION.right,
        [styles.iconBlock_textDown]: textPosition === TEXT_POSITION.down,
      })}
    >
      <Icon name={iconName} color={color} className={styles.icon} />
      <div className={styles.iconText}>
        <h2 style={{ color }}>2100+</h2>
        <span style={{ color }}>Customers</span>
      </div>
    </div>
  );
};

IconBlock.propTypes = {
  textPosition: PropTypes.oneOf([TEXT_POSITION.right, TEXT_POSITION.down]),
};

export default IconBlock;
