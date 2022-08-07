import { Button, Container, Title } from "../ui";
import { PaymentForm, usePaymentForm } from "../Forms";
import { useCart } from "../../hooks";

import styles from "./Payment.module.scss";
import { CartItem } from "../Cart";
import { cartIdGenerate } from "../../utils/helpers";

const Payment = () => {
  const { items, totalPrice } = useCart();

  const handleSubmit = (values) => {
    console.log(values);
  };

  const form = usePaymentForm(handleSubmit);

  return (
    <Container>
      <div className={styles.payment}>
        <Title variant="h1" dashed={true}>
          Payment
        </Title>
        <div className={styles.content}>
          <div className={styles.form}>
            <PaymentForm form={form} />
          </div>
          <div className={styles.cart}>
            <div>
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
            </div>
            <div className={styles.cartUnderBlock}>
              <Title variant="h4" dashed={true} className={styles.textBlock}>
                <span>Delivery</span>
                <span>3$</span>
              </Title>
              <div className={styles.totalPrice}>
                <label>Total Price:</label>
                <span>{totalPrice + 3}$</span>
              </div>
              <Button onClick={form.handleSubmit} variant="primary" size="big">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Payment;
