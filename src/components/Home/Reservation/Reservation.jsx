import styles from "./Reservation.module.scss";
import { Button, Container } from "../../ui";
import classNames from "classnames";

const Reservation = () => {
  return (
    <div className={styles.reservation} id="reservation">
      <Container variant="small">
        <div className={styles.block}>
          <div className={styles.title}>
            <h2>Reservation</h2>
          </div>
          <div className={styles.content}>
            <div>
              <span className="subtitle">Opening Times</span>
            </div>
            <div>
              <span className="text-light text-primary">Open 7 Days Week</span>
            </div>
            <div className={styles.table}>
              <div className={styles.item}>
                <span className="text-normal">Week Days</span>
                <span className="text-normal">9:30 am - 9:00 pm</span>
              </div>
              <div className={styles.item}>
                <span className="text-normal">Saturday</span>
                <span className="text-normal">11:00 am - 10:30 pm</span>
              </div>
              <div className={styles.item}>
                <span className="text-normal">Sunday</span>
                <span className="text-normal">11:00 am - 10:30 pm</span>
              </div>
            </div>
            <div
              className={classNames(styles.underText, "text-light text-muted")}
            >
              Book your table for lunch or dinner
            </div>
            <div>
              <Button className={styles.bookButton}>Book Now</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reservation;
