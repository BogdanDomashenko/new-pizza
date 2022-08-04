import { Modal, ModalBody } from "../../ui";
import { MODALS } from "../../../utils/constants";
import { useCart } from "../../../hooks";
import { CartItem } from "../../Cart";
import { cartIdGenerate } from "../../../utils/helpers";

import styles from "./CartModal.module.scss";

const CartModal = () => {
  const cartItems = useCart();

  return (
    <Modal name={MODALS.CartModal} className={styles.modal}>
      <ModalBody className={styles.body}>
        {cartItems.map((item) => (
          <CartItem
            {...item}
            key={cartIdGenerate(
              item.id,
              item.selectedProps.type,
              item.selectedProps.size
            )}
            countSize="small"
          />
        ))}
      </ModalBody>
    </Modal>
  );
};

export default CartModal;
