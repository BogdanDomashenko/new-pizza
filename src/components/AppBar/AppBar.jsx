import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRole } from "../../hooks";
import { logout } from "../../redux/actions/user";
import { ROLES } from "../../utils/constants";
import { Button, IconButton } from "../ui";
import logo from "../../assets/img/pizza-logo.svg";
import styles from "./AppBar.module.scss";
import classNames from "classnames";
import CartButton from "./CartButton/CartButton";
import { Link as ScrollLink } from "react-scroll";

const AppBar = () => {
  const [navBarOpened, setNavBarOpened] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRole = useRole();
  const { totalPrice, totalCount } = useSelector((state) => state.cart);

  const toggleNavbar = () => {
    setNavBarOpened(!navBarOpened);
  };

  const onLogoutClick = () => {
    dispatch(logout());
  };

  const onAdminClick = () => {
    navigate("/admin/orders");
    toggleNavbar();
  };

  const onSignInClick = () => {
    navigate("/auth/sign-in");
    toggleNavbar();
  };

  const onProfileClick = () => {
    navigate("/profile");
    toggleNavbar();
  };

  const onCartClick = () => {
    navigate("/cart");
    toggleNavbar();
  };

  return (
    <div className={styles.appBar}>
      <div className={styles.appBar__first}>
        <IconButton
          onClick={toggleNavbar}
          iconClassName={styles.appBar__toggleBtn__icon}
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
      </div>
      <nav
        className={classNames(styles.appBar__items, {
          [styles.appBar_opened]: navBarOpened,
        })}
      >
        <div className={styles.appBar__items__left}>
          <div className={styles.appBar__item}>
            <ScrollLink to="menu" smooth={true}>
              <Button
                className={classNames(styles.appBar__btn, "button--light")}
              >
                Menu
              </Button>
            </ScrollLink>
          </div>
          <div className={styles.appBar__item}>
            <Button className={classNames(styles.appBar__btn, "button--light")}>
              Special offers
            </Button>
          </div>
        </div>
        <div className={styles.appBar__items__right}>
          <div
            className={classNames(
              styles.appBar__item,
              styles.appBar__phoneNumber
            )}
          >
            <a href="tel:+380992223311">+38 (099) 222 33 11</a>
          </div>
          {userRole !== ROLES.phantom ? (
            <div className={styles.appBar__item}>
              <Button
                className={classNames(styles.appBar__btn, "button--light")}
                onClick={onProfileClick}
              >
                Profile
              </Button>
            </div>
          ) : (
            ""
          )}
          {userRole !== ROLES.phantom ? (
            <div className={styles.appBar__item}>
              <Button
                className={classNames(styles.appBar__btn, "button--light")}
                onClick={onLogoutClick}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className={styles.appBar__item}>
              <Button
                className={classNames(styles.appBar__btn, "button--light")}
                onClick={onSignInClick}
              >
                Sign in
              </Button>
            </div>
          )}
          <div className={styles.appBar__item}>
            <CartButton
              totalPrice={totalPrice}
              totalCount={totalCount}
              onClick={onCartClick}
            />
          </div>
        </div>
        <IconButton
          onClick={toggleNavbar}
          className={styles.appBar__closeBtn}
          iconClassName={styles.appBar__closeBtn__icon}
          iconName="icon-remove"
        />
      </nav>
      <div className={styles.appBar__mobileHeaderItems}>
        <div className={styles.appBar__item}>
          <a
            href="tel:+380992223311"
            className={classNames(
              "text-bold",
              styles.appBar__mobileHeaderItems__phoneNumber
            )}
          >
            +38 (099) 222 33 11
          </a>
        </div>
        <CartButton
          totalPrice={totalPrice}
          totalCount={totalCount}
          onClick={onCartClick}
        />
      </div>
    </div>
  );
};

export default AppBar;
