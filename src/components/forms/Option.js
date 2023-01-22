import React from 'react'
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Option(props) {
  return (
	<option value={props.value}>{props.name}</option>
  )
}
