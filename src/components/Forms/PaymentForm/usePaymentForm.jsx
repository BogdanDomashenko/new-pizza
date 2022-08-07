import { useFormik } from "formik";
import paymentSchema from "../../../utils/schemas/payment.schema";
import { PAYMENT_METHODS } from "../../../utils/constants";

const usePaymentForm = (onSubmit) => {
  const form = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      city: "",
      postCode: "",
      address: "",
      phone: "",
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
