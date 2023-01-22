import React,{useState} from "react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "../../components/auth/Auth";
import AuthButton from "../../components/auth/AuthButton";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { registreUser, setRole } from "../../store/slices/userSlice";
// import DownloadFile from './../components/DownloadFile';
import DowloadFile from '../../assets/img/svg/download-file.svg'
import { Button } from "react-bootstrap";

const validate = (values) => {
  const errors = {};
  //user
  if (!values.userName){
	errors.userName = "Required";
  }
  else if(values.userName.trim().split(' ').length!==3){
	console.log(errors.userName);
	errors.userName="Некорректное имя пользователя"
  }
  //e-mail
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Не корректный почтовый адресс";
  }
  //phone number
  if (!values.tel) {
    errors.tel = "Required";
  } else if (values.tel.length !== 11) {
    errors.tel = "Не корректный номер телефона";
  }else if(/[A-Z]+/i.test(values.tel)){
	errors.tel = "Не корректный номер телефона";
  } else if(!/^7/g.test(values.tel)){
	errors.tel = "Не корректный номер телефона";
  }

  //passwords
  if (values.password.length === 0) {
    errors.password = "Required";
  } else if (
    values.password.length < 8 ||
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/i.test(values.password)
  ) {
    errors.password =
      "Пароль должен содержать минимум 8 символов, включающих в себя: латинские буквы нижнего или верхнего регистров, цифры";
  }
  if (values.repeatPassword !== values.password) {
    errors.repeatPassword = "Пароли не совпадают";
  }
  return errors;
};
export default function Registration() {
	
	let [option,setOption]=useState(null)
	let role=useSelector(state=>state.user.role)
	const [file, setFile] = useState(null);
	const isRegistered=useSelector(state=>state.user.isRegistered)
	const dispatch=useDispatch()
	console.log(role);
  const formik = useFormik({
    initialValues: {
		userName: "",
		email: "",
		password: "",
		tel: "",
		repeatPassword: "",
		status:''
    },
    validate,
    onSubmit: (values,actions) => {
		const data=new FormData();
		let name=values.userName.split(' ')[0];
		let patronymic=values.userName.split(' ')[1];
		let last_name=values.userName.split(' ')[2];
		data.append('email',values.email);
		data.append('phone',values.tel);
		data.append('password',values.password);
		data.append('name',name);
		data.append('patronymic',patronymic);
		data.append('last_name',last_name);
		data.append('status',option);
		console.log(values.status);
		// console.log(values);
		if (file){
			data.append('save_file',file)
		}
		for(let key in data.keys()){
			console.log(`${key}: ${data.get(key)}`);
		}
		console.log(role);
	dispatch(setRole(option))
	dispatch(registreUser(data))
    },
  });

	if(isRegistered && role==='ward'){
		console.log(role);
		return <Navigate to ={'/succesdowload'}/>
	}
	else if(isRegistered && role!=='ward'){
		return <Navigate to ={'/confirmation'}/>
	}
  return (
    <>
      <Auth title="Регистрация">
      <form id="form" onSubmit={formik.handleSubmit}>
        <div className="df justify-content-between">
          <Form.Control
            className="form-control-lg mb16"
            name="userName"
            type="text"
            placeholder="Ваше ФИО"
            aria-describedby="inputGroupPrepend"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
          <span className="cr mr-16">*</span>
        </div>
        {formik.touched.userName && formik.errors.userName ? (
          <div className="cr">{formik.errors.userName}</div>
        ) : null}
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
        <Form.Control
          className="form-control-lg mb16"
          name="email"
          type="email"
          placeholder="E-mail"
          aria-describedby="inputGroupPrepend"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="cr">{formik.errors.email}</div>
        ) : null}
        <div className="df justify-content-between">
          <Form.Control
            className="form-control-lg mb16"
            name="password"
            type="password"
            placeholder="Придумайте пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="cr mr-16">*</span>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="cr">{formik.errors.password}</div>
        ) : null}
        <div className="df justify-content-between">
          <Form.Control
            className="form-control-lg mb16"
            type="password"
            name="repeatPassword"
            placeholder="Повторите пароль"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeatPassword}
          />
          <span className="cr mr-16">*</span>
        </div>
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <div className="cr mb-16">{formik.errors.repeatPassword}</div>
        ) : null}
        <div>
          Ваша роль <span className="cr mb16">*</span>
        </div>
        <Form.Select size="lg"
		  	className="mb16"
			defaultValue='Выбрать'
		  	onChange={
				  (e)=>{setOption(e.currentTarget.value)
					setFile(e.target.files[0])
				}
			}
			// onBlur={formik.handleBlur}
			// value={formik.values.status}
			>ds
				<option disabled >Выбрать</option>
				<option value="Даритель">Даритель</option>
				<option value="ward">Подопечный</option>
				<option value="confectioner">Кондитерская</option>
          </Form.Select>
		  {/* {setOptionRegistration(option,setUploadFile)} */}
			{option==='Даритель'?null
			:option==='ward'
			?<div>
				<input name="file" type="file" id="input__file" className="input input__file" multiple 
			onChange={
				(e)=>{
					// prop("file", e.currentTarget.files[0])
					console.log(e.currentTarget.files);
					setFile(e.currentTarget.files[0])
				}}
		/>
	<label htmlFor="input__file" className="input__file-button-for-registration">
		<span className="btn btn-primary btn-sm w-75 df">
			<img src={DowloadFile} style={{width:'30px', height:'30px'}} className="mr16" alt="Download"/>
			<span >Загрузить справку</span>
		</span>
	</label>
			</div>
			:option==='confectioner'
			?<div className="text-start"><Link to='/confectionary-registration'><Button variant="primary" >Регистрация кондитерской</Button></Link></div>
			:null}
        <AuthButton
          type="submit"
          className="mt70"
          disabled={!(formik.isValid && formik.dirty)}
          btnName="Зарегистрироваться"
          classes={
			(formik.isValid && formik.dirty)
              ? "cy cg1 btn cg2 w-100 mt70 mb16"
              : "bgcg cg1 btn cg2 w-100 mt70 mb16"
          }
          onSubmit={ formik.submitForm }
        />
      </form>
      </Auth>
    </>
  );
}