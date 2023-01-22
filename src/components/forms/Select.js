import React from 'react'
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Option from './Option';

export default function Select(props) {

  return (
	<div className="registre-block">
		<select
			className={`form-select form-control-lg ${props.className}`}
			aria-label="Default select example"
			placeholder="Выбрать"
		>
			<option value="0" disabled selected>Выбрать	</option>
			{props.options.map((o,i)=>{
				return <Option key={i} value={o.value} name={o.name} />;
			})}
		</select>
    </div>
  )
}
