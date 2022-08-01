import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Container = ({ children, variant }) => {
  return (
    <div className={classNames("container", "container--" + variant)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  variant: PropTypes.oneOf(["small"]),
};

export default Container;
