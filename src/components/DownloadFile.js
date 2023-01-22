import React from 'react'
import { useState } from 'react';
import DowloadFile from '../assets/img/svg/download-file.svg'
import { useFormik } from 'formik';
export default function DownloadFile(props) {
	let [file, setfile]=useState(null)
	const formik=useFormik({
		initialValues: {
			userName: "",

			email: "",
			password: "",
			tel: "",
			repeatPassword: "",
		},
		validate(){

		},
		onSubmit: (values) => {
			console.log({ 
				fileName: values.file.name, 
				type: values.file.type,
				size: `${values.file.size} bytes`
			  })
		},
	})
  return (
	<div className="">
	<input name="file" type="file" id="input__file" className="input input__file" multiple 
	onChange={
		(e)=>{
			// prop("file", e.currentTarget.files[0])
			props.setFile(e.currentTarget.files[0])
		}}
		/>
	<label htmlFor="input__file" className="input__file-button-for-registration">
		<span className="btn btn-primary btn-sm w-75 df">
			<img src={DowloadFile} style={{width:'30px', height:'30px'}} className="mr16" alt="Download"/>
			<span >Загрузить справку </span>
		</span>
	</label>
	</div>
  )
}