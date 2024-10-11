import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { useId } from "react";
import css from "../ContactForm/ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Невірний формат номеру телефону. Введіть у форматі 123-45-67"
    )
    .min(9, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const userNameId = useId();
  const userNumberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.list}>
          <label htmlFor={userNameId}>Name</label>
          <Field
            type="text"
            name="name"
            className={css.input}
            id={userNameId}
          />
          <ErrorMessage name="name" component="span" className={css.errMsg} />
        </div>

        <div className={css.list}>
          <label htmlFor={userNumberId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={userNumberId}
            className={css.input}
            placeholder="123-45-67"
          />
          <ErrorMessage name="number" component="span" className={css.errMsg} />
        </div>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
