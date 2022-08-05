import { Container, Title } from "../ui";
import { PaymentForm } from "../Forms";
import { useCart } from "../../hooks";

import styles from "./Payment.module.scss";
import { CartItem } from "../Cart";
import { cartIdGenerate } from "../../utils/helpers";

const Payment = () => {
  const { items, totalPrice } = useCart();

  return (
    <Container>
      <div className={styles.payment}>
        <Title variant="h1" dashed={true}>
          Payment
        </Title>
        <div className={styles.content}>
          <div className={styles.form}>
            <PaymentForm />
          </div>
          <div className={styles.cartItems}>
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
        </div>
      </div>
    </Container>
  );
};

export default Payment;
