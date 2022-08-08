import { useFormik } from "formik";
import paymentSchema from "../../../utils/schemas/payment.schema";
import { PAYMENT_METHODS } from "../../../utils/constants";
import { useUserData } from "../../../hooks";

const usePaymentForm = (onSubmit) => {
  const phone = useUserData().phoneNumber || "";

  const form = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      city: "",
      postCode: "",
      address: "",
      phone: phone,
      paymentMethod: PAYMENT_METHODS.card,
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: paymentSchema,
  });

  return form;
};

export default usePaymentForm;
