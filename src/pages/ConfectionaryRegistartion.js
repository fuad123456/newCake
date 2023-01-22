import { useFormik } from "formik";
import React from "react";
import Auth from "../components/auth/Auth";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import AuthButton from "../components/auth/AuthButton";

export default function ConfectionaryRegistartion() {
  const formik = useFormik({
    initialValues: {
		companyName: "",
		adres: "",
		description: "",
		validateBtn: false,
    },
    validate: (values) => {
      const errors = {};
      //   console.log(values);
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Не корректный почтовый адресс";
      }

      if (!values.tel) {
        errors.tel = "Required";
      } else if (values.tel.length < 11 || /[^0-9]+/i.test(values.tel)) {
        errors.tel = "Не корректный номер телефона";
      }
      if (values.password.length === 0) {
        errors.password = "Required";
      } else if (values.password.length < 3) {
        errors.password = "Пароль должен состоять не менее из 3 символов";
      }
      if (values.repeatPassword !== values.password) {
        console.log(values.password);
        errors.repeatPassword = "Пароли не совпадают";
      }
      if (
        values.tel.length !== 11 &&
        values.repeatPassword !== values.password
      ) {
        errors.validateBtn = false;
      } else if (
        values.tel.length === 11 &&
        values.repeatPassword === values.password
      ) {
        errors.validateBtn = true;
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // formik.resetForm()
    },
  });
  return (
    <>
      <Auth title="Регистрация кондитерской">
        <form onSubmit={formik.handleSubmit}>
          <div className="df justify-content-between">
            <Form.Control
              className="form-control-lg mb16"
              type="text"
              placeholder="Название"
              aria-describedby="inputGroupPrepend"
              {...formik.getFieldProps("companyName")}
            />
            <span className="cr mr-16">*</span>
          </div>
          {formik.touched.text && formik.errors.text ? (
            <div>{formik.errors.text}</div>
          ) : null}
          <div className="df justify-content-between">
            <Form.Control
              className="form-control-lg mb16"
              type="text"
              placeholder="Адрес"
              aria-describedby="inputGroupPrepend"
              {...formik.getFieldProps("adres")}
            />
            <span className="cr mr-16">*</span>
          </div>
          <div className="">
            <FloatingLabel controlId="floatingTextarea2" label="Описание...">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px", width: "100%" }}
				{...formik.getFieldProps("description")}
              />
			  <span className="position-absolute end-0 top-0 mr-16 cr">*</span>
            </FloatingLabel>
          </div>
		  <AuthButton
            type="submit"
			className="mt70"
            disabled={!formik.errors.validateBtn}
            btnName="Зарегистрироваться"
            classes={
              formik.errors.validateBtn
                ? "cy cg1 btn cg2 w-100 mt70"
                : "bgcg cg1 btn cg2 w-100 mt70"
            }
            onSubmit={formik.submitForm}
          ></AuthButton>
        </form>
      </Auth>
    </>
  );
}
