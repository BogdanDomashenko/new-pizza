import { Modal, ModalBody, Title } from "../../../ui";
import { useDispatch, useSelector } from "react-redux";
import { resetDetailsOrderModal } from "../../../../redux/actions/admin";
import { Loader, OrderItem } from "../../../index";
import parsePhoneNumber from "libphonenumber-js";

import styles from "./DetailsModal.module.scss";

const DetailsModal = () => {
  const dispatch = useDispatch();

  const { visibility, products, shippingData } = useSelector(
    (state) => state.admin.detailsOrderModal
  );

  const onClose = () => {
    dispatch(resetDetailsOrderModal());
  };

  return (
    <Modal visible={visibility} onClose={onClose}>
      <ModalBody className={styles.body}>
        {products?.id ? (
          <div className={styles.content}>
            <div className={styles.products}>
              {products.pizzaOrders.map((item, index) => (
                <OrderItem
                  key={index}
                  title={item.pizza.name}
                  count={item.count}
                  price={item.totalPrice}
                  img={item.pizza.imageUrl}
                  props={item.props}
                />
              ))}
            </div>
            {shippingData?.firstName ? (
              <div className={styles.info}>
                <div className={styles.infoItem}>
                  <Title variant="h4">Order id:</Title>
                  {shippingData.userOrderID}
                </div>
                <div className={styles.infoItem}>
                  <Title variant="h4">First Name:</Title>
                  {shippingData.firstName}
                </div>
                <div className={styles.infoItem}>
                  <Title variant="h4">Last Name:</Title>
                  {shippingData.lastName}
                </div>
                <div className={styles.infoItem}>
                  <Title variant="h4">Email:</Title>
                  {shippingData.email}
                </div>
                <div className={styles.infoItem}>
                  <Title variant="h4">Phone:</Title>
                  {parsePhoneNumber(
                    "+" + shippingData.phone
                  ).formatInternational()}
                </div>
                <div className={styles.infoItem}>
                  <Title variant="h4">City:</Title>
                  {shippingData.city}
                </div>
                <div className={styles.infoItem}>
                  <Title variant="h4">Address:</Title>
                  {shippingData.address}
                </div>
                <div className={styles.infoItem}>
                  <Title variant="h4">Post Code:</Title>
                  {shippingData.postCode}
                </div>
                <div className={styles.infoItem}>
                  <Title variant="h4">Payment Method:</Title>
                  {shippingData.paymentMethod}
                </div>
              </div>
            ) : (
              <span>No shipping data</span>
            )}
          </div>
        ) : (
          <Loader />
        )}
      </ModalBody>
    </Modal>
  );
};

export default DetailsModal;
