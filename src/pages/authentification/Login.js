import React from 'react'
import Auth from '../../components/auth/Auth'
import { useFormik } from 'formik';
import Form from "react-bootstrap/Form";
const validate = (values) => {
	const errors = {};
	//e-mail
	if (!values.email) {
	  errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
	  errors.email = "Не корректный почтовый адресс";
	}
	//phone number
	if (!values.tel) {
	  errors.tel = "Required";
	} else if (values.tel.length !== 11 || /[^0-9]+/i.test(values.tel)) {
	  errors.tel = "Не корректный номер телефона";
	}
	//passwords
	if (values.password.length === 0) {
	  errors.password = "Required";
	} else if (
	  values.password.length < 8 ||
	  !/[0-9A-Z]{8,40}/i.test(values.password)
	) {
	  errors.password =
		"Пароль должен содержать минимум 8 символов, включающих в себя: латинские буквы нижнего или верхнего регистров, цифры";
	}
	if (values.repeatPassword !== values.password) {
	  errors.repeatPassword = "Пароли не совпадают";
	}
	return errors;
  };
export default function Login() {
	const formik = useFormik({
		initialValues: {
		  email: "",
		  password: "",
		  tel: "",
		  userName: "",
		  repeatPassword: "",
		},
		validate,
		onSubmit: (values) => {
		},
	  });
  return (
	<>
	<Auth title='Добро пожаловать!'>
		<div className='login-desc'>Войдите в аккаунт</div>
		<div><button className='btn btn-link fs20'>Закажите обратный звонок</button></div>
		<div className="df justify-content-between">
          <Form.Control
            className="form-control-lg mb16"
            name="tel"
            type="tel"
            placeholder="Номер телефона"
            aria-describedby="inputGroupPrepend"
            value={formik.values.tel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="cr mr-16">*</span>
        </div>
        {formik.touched.tel && formik.errors.tel ? (
          <div className="cr">{formik.errors.tel}</div>
        ) : null}
		<div className="df justify-content-between">
          <Form.Control
            className="form-control-lg mb16"
            name="password"
            type="password"
            placeholder="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="cr mr-16">*</span>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="cr">{formik.errors.password}</div>
        ) : null}
	</Auth>
	</>
  )
}
