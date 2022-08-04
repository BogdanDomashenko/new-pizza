import { Button, Modal, ModalBody, ModalBottom } from "../../ui";
import { MODALS } from "../../../utils/constants";
import { useCart } from "../../../hooks";
import { CartItem } from "../../Cart";
import { cartIdGenerate } from "../../../utils/helpers";

import styles from "./CartModal.module.scss";

const CartModal = () => {
  const { items, totalPrice } = useCart();

  return (
    <Modal name={MODALS.CartModal} className={styles.modal}>
      <ModalBody className={styles.body}>
        {items.map((item) => (
          <CartItem
            {...item}
            key={cartIdGenerate(
              item.item.id,
              item.selectedProps.type,
              item.selectedProps.size
            )}
            countSize="small"
          />
        ))}
      </ModalBody>
      <ModalBottom className={styles.bottom}>
        <div>
          <span className={styles.text}>Total Price: </span>
          <span className={styles.totalPrice}>{totalPrice}$</span>
        </div>
        <div className={styles.buttonBlock}>
          <Button variant="primary" size="big" className={styles.button}>
            Checkout
          </Button>
        </div>
      </ModalBottom>
    </Modal>
  );
};

export default CartModal;
