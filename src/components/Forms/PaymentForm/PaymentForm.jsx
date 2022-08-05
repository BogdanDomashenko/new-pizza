import styles from "./PaymentForm.module.scss";
import { Input, Title } from "../../ui";

const PaymentForm = () => {
  return (
    <form className={styles.form}>
      <Title variant="h4" tiny={true}>
        Contact information
      </Title>
      <Input label="Email" type="email" />
      <Title variant="h4" tiny={true}>
        Shipping address
      </Title>
      <div className={styles.doubleInput}>
        <Input label="First Name" />
        <Input label="Last Name" />
      </div>
      <Input label="City" />
      <Input label="Address" />
      <Input label="Phone Number" />
    </form>
  );
};

export default PaymentForm;
