import React from 'react'
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AuthButton(props) {
  return (
	<button className={props.classes} type={props.type} disabled={props.disabled}>
         {props.btnName}
    </button>
  )
}
