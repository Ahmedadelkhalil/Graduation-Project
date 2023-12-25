import React, { useState } from "react";

// FORM VALIDATION
import { useFormik } from "formik";
import * as Yup from "yup";

// Alert
import Alert from "../global/alert";
import { Toast } from "bootstrap";

const Form = () => {
  // Form Validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    msg: Yup.string().required("Write Your Message Please"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      msg: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setAlertMsg(`Your Message Have Been Sent Successfuly ${values.name}`);
      handleAlert();
      values.name = "";
      values.email = "";
      values.msg = "";
    },
  });
  // Alert
  const [alertMsg, setAlertMsg] = useState("");
  const alertParent = React.createRef();
  const handleAlert = () => {
    const alertHolder = alertParent.current;
    const toaster = new Toast(alertHolder);
    toaster.show();
  };
  return (
    <div className="contactUs-form-container">
      <h1>Send Us Your Questions!</h1>
      <p>We’ll get back to you within two days.</p>
      <form action="#" onSubmit={formik.handleSubmit} className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="contact-form-username">Name *</label>
          <input
            type="text"
            id="contact-form-username"
            name="contact-form-username"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-danger fw-semibold">{formik.errors.name}</div>
          )}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="contact-form-email">Email *</label>
          <input
            type="email"
            id="contact-form-email"
            name="contact-form-email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger fw-semibold">{formik.errors.email}</div>
          )}
        </div>
        <div className="col-md-12">
          <label htmlFor="contact-form-textArea">Message *</label>
          <textarea
            name="contact-form-textArea"
            id="contact-form-textArea"
            rows="10"
            {...formik.getFieldProps("msg")}
          />
          {formik.touched.msg && formik.errors.msg && (
            <div className="text-danger fw-semibold">{formik.errors.msg}</div>
          )}
        </div>
        <button type="submit">submit</button>
      </form>
      <Alert ref={alertParent} msg={alertMsg} />
    </div>
  );
};

export default Form;
