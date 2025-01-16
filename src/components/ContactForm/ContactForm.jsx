import { useId } from 'react';
import s from './ContactForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAdd }) => {
  const nameFildId = useId();
  const numberFildId = useId();
  const initialValues = {
    name: '',
    number: '',
  };

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={s.form}>
        <div className={s.wrapForm}>
          <div className={s.wrapInput}>
            <label className={s.formLabel} htmlFor={nameFildId}>
              Name
            </label>
            <Field
              className={s.formInput}
              type="text"
              name="name"
              id={nameFildId}
              placeholder="Name"
            />
            <ErrorMessage
              className={s.formInputError}
              name="name"
              component="span"
            />
          </div>
          <div className={s.wrapInput}>
            <label className={s.formLabel} htmlFor={numberFildId}>
              Number
            </label>
            <Field
              className={s.formInput}
              type="tel"
              name="number"
              placeholder="xxx-xx-xx"
            />
            <ErrorMessage
              className={s.formInputError}
              name="number"
              component="span"
            />
          </div>
          <button className={s.formBtn} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
