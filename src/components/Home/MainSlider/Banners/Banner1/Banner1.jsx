import React from "react";
import styles from "./Banner1.module.scss";
import { Button, IconBlock } from "../../../../ui";

const Banner1 = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleItem}>
            It’s not just
            <span className="text-primary text-uppercase"> PIZZA</span>
          </span>
          <span className={styles.titleItem}>
            It's your
            <span className="text-success text-uppercase"> inspiration</span>
          </span>
        </h1>
        <p>
          PIZZA wanted to create a pizza with heat for "a new wave of pizza
          lovers"
        </p>
        <Button className={styles.button}>Order Now</Button>

        <div className={styles.icons}>
          <IconBlock
            color="white"
            iconName="icon-customers"
            textPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
