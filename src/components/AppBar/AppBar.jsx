import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRole } from "../../hooks";
import { logout } from "../../redux/actions/user";
import { ROLES } from "../../utils/constants";
import { Button, CartIcon, IconButton } from "../ui";
import logo from "../../assets/img/pizza-logo.svg";
import styles from "./AppBar.module.scss";
import classNames from "classnames";

const AppBar = () => {
  const [navBarOpened, setNavBarOpened] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRole = useRole();
  const { totalPrice, totalCount } = useSelector((state) => state.cart);

  const onLogoutClick = () => {
    dispatch(logout());
  };

  const onAdminClick = () => {
    navigate("/admin/orders");
  };

  const onSignInClick = () => {
    navigate("/auth/sign-in");
  };

  const onProfileClick = () => {
    navigate("/profile");
  };

  const toggleNavbar = () => {
    setNavBarOpened(!navBarOpened);
  };

  return (
    <div className={styles.appBar}>
      <IconButton
        onClick={toggleNavbar}
        className={styles.appBar__toggleBtn}
        iconName="icon-burger-menu"
      />
      <Link to="/" className={styles.appBar__logo}>
        <img width="38" src={logo} alt="Pizza logo" />
        <div>
          <h1>Pizza</h1>
          <p>the most delicious pizza in the universe</p>
        </div>
      </Link>
      <nav
        className={classNames(styles.appBar__items, {
          [styles.appBar_opened]: navBarOpened,
        })}
      >
        <div className={styles.appBar__items__left}>
          <div className={styles.appBar__item}>
            <Button className="button--light">Menu</Button>
          </div>
          <div className={styles.appBar__item}>
            <Button className="button--light">Special offers</Button>
          </div>
        </div>
        <div className={styles.appBar__items__right}>
          <div className={styles.appBar__item}>
            <a href="tel:+380992223311" className="bold-text">
              +38 (099) 222 33 11
            </a>
          </div>
          {userRole !== ROLES.phantom ? (
            <div className={styles.appBar__item}>
              <Button className="button--light" onClick={onProfileClick}>
                Profile
              </Button>
            </div>
          ) : (
            ""
          )}
          {userRole !== ROLES.phantom ? (
            <div className={styles.appBar__item}>
              <Button className="button--light" onClick={onLogoutClick}>
                Logout
              </Button>
            </div>
          ) : (
            <div className={styles.appBar__item}>
              <Button className="button--light" onClick={onSignInClick}>
                Sign in
              </Button>
            </div>
          )}
          <div className={styles.appBar__item}>
            <Link to="/cart">
              <Button className={styles.appBar__cartBtn}>
                <span>{totalPrice} $</span>
                <div className={styles.appBar__cartBtn__delimiter}></div>
                <CartIcon />
                <span>{totalCount}</span>
              </Button>
            </Link>
          </div>
        </div>
        {navBarOpened ? (
          <IconButton
            onClick={toggleNavbar}
            className={styles.appBar__closeBtn}
            iconName="icon-burger-remove"
          />
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default AppBar;
