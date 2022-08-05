import { useState } from "react";
import { Checkbox, Input, Title } from "../../ui";
import PhoneInput from "react-phone-input-2";
import { PAYMENT_METHODS } from "../../../utils/constants";

import styles from "./PaymentForm.module.scss";
import { NavLink } from "react-router-dom";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS.card);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.currentTarget.value);
  };

  const isSelectedMethod = (method) => {
    return method === paymentMethod;
  };

  return (
    <form className={styles.form}>
      <div className={styles.firstBlock}>
        <Title variant="h4" tiny={true}>
          Contact information
        </Title>
        <div>
          <span>Already have an account?</span>
          <NavLink to="/auth/sign-in">Log in</NavLink>
        </div>
      </div>
      <Input label="Email" type="email" />
      <Title variant="h4" tiny={true}>
        Shipping address
      </Title>
      <div className={styles.doubleInput}>
        <Input label="First Name" />
        <Input label="Last Name" />
      </div>
      <div className={styles.doubleInput}>
        <Input label="City" />
        <Input label="Post code" />
      </div>
      <Input label="Address" />
      <PhoneInput
        country="us"
        id="phone"
        name="phone"
        inputStyle={{ width: "100%" }}
      />
      <Title variant="h4" tiny={true}>
        Payment method
      </Title>
      <div className={styles.paymentCheckboxes}>
        <div className={styles.checkbox}>
          <Checkbox
            type="radio"
            name="paymentMethod"
            value={PAYMENT_METHODS.cash}
            onChange={handlePaymentMethodChange}
            checked={isSelectedMethod(PAYMENT_METHODS.cash)}
          />
          Cash
        </div>
        <div className={styles.checkbox}>
          <Checkbox
            type="radio"
            name="paymentMethod"
            value={PAYMENT_METHODS.card}
            onChange={handlePaymentMethodChange}
            checked={isSelectedMethod(PAYMENT_METHODS.card)}
          />
          Card
        </div>
      </div>
      {paymentMethod === PAYMENT_METHODS.card ? (
        <>
          <Input label="Card Number" />
          <div className={styles.doubleInput}>
            <Input label="Expiration Year" />
            <Input label="Expiration Month" />
          </div>
          <div className={styles.doubleInput}>
            <Input label="CVV" />
            <Input label="Postal code" />
          </div>
        </>
      ) : (
        ""
      )}
    </form>
  );
};

export default PaymentForm;
