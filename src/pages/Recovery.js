import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Auth from "../components/auth/Auth";
import Form from "../components/forms/Form";
import Select from "../components/forms/Select";
import AuthButton from "../components/auth/AuthButton";


export default function Registration() {
  	const [isDisabled, setIsdisabled] = useState(false);
 	const [inputs, setInputs] = useState([
    {
      purpose: "Name",
      type: "text",
      placeholder: "Ваше ФИО",
      isRequired: true,
      classes: "form-control form-control-lg mb16",
	  value:''
    },
    {
      purpose: "Phone",
      type: "tel",
      placeholder: "Номер телефона",
      isRequired: true,
      classes: "form-control form-control-lg mb16",
	  value:''
    },
    {
      purpose: "E-mail",
      type: "email",
      placeholder: "E-mail",
      isRequired: false,
      classes: "form-control form-control-lg mb16",
    },
    {
      purpose: "password1",
      type: "password",
      placeholder: "Придумайте пароль",
      isRequired: true,
      classes: "form-control form-control-lg mb16",
    },
    {
      purpose: "password2",
      type: "password",
      placeholder: "Повторите пароль",
      isRequired: true,
      classes: "form-control form-control-lg mb70",
    },
  ]);
  const [options, setOption] = useState([
    { value: "1", name: "Даритель" },
    { value: "2", name: "Подопечный" },
    { value: "3", name: "Кондитерская" },
  ]);

  return (
    <>
      <Auth title="Восстановление пароля">
        <Form {...inputs[1]}
		/>
        <div className="registre-role mb16">
          <span className="cr">*</span> Попробуйте указать:
        </div>
		<Form {...inputs[2]}/>
		<div className="registre-role mb16">
          <span className="cr">*</span> Попробуйте указать:
        </div>
        <Select options={options} className="mb16"/>
		<Form {...inputs[3]}/>
		<Form {...inputs[4]}/>
        <AuthButton
          type="button"
          isDisabled={isDisabled}
          btnName="Зарегистрироваться"
        />
      </Auth>
    </>
  );
}
