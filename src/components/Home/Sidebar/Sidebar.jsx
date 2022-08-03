import styles from "./Sidebar.module.scss";
import { Logo } from "../../index";
import { Button, Container } from "../../ui";
import { PHONE_NUMBER } from "../../../config";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Container>
        <div className={styles.content}>
          <div className={styles.leftBlock}>
            <Logo />
          </div>
          <div className={styles.centerBlock}>
            <span className="text-bold">{PHONE_NUMBER}</span>
            <Button variant="success" size="big">
              Call Back
            </Button>
          </div>
          <div className={styles.rightBlock}>
            <Button className={styles.navigateButton}>Menu</Button>
            <Button className={styles.navigateButton}>Contact us</Button>
            <div className={styles.links}>
              <a href="https://facebook.com" target="_blank">
                <span className="icon-facebook"></span>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <span className="icon-instagram"></span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;
