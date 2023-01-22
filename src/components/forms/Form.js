import React from 'react'
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
export default function Form(props) {

  return (
	<>
		<div className="registre-block w-100">
			<input 	className={props.classes}
					type={props.type}
					placeholder={props.placeholder}
					aria-label="form-control-lg example"
					// required={req?true:false}
					// onChange={changeValue}
					/>
			{/* {req?<div className="cr registre-icon-req">*</div>:''} */}
		</div>
	</>
  )
}
