import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { motion } from "framer-motion";
import { slideInFromTop } from "../../motion/motion";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  const orderError = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50).required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50).required("Required"),
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromTop()}
      className={s.formWrapper}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderError}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" />
            <ErrorMessage name="name" component="p" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number" />
            <ErrorMessage name="number" component="p" className={s.error} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </motion.div>
  );
};

export default ContactForm;
