import { Modal, ModalBody } from "../../ui";
import { MODALS } from "../../../utils/constants";
import { useSelector } from "react-redux";

const ProductModal = () => {
  const { id } = useSelector((state) => state.modals[MODALS.ProductModal]);

  return (
    <Modal name={MODALS.ProductModal}>
      <ModalBody>{id}</ModalBody>
    </Modal>
  );
};

export default ProductModal;
