import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Auth from '../../components/auth/Auth'
import { useSelector, useDispatch } from 'react-redux';
import { registerFull } from '../../store/slices/userSlice';

export default function Confirmation() {
	let reg=useSelector(state=>state.user.fullReg)
	const dispatch=useDispatch()

	let [inp1,setInp1]=useState(null)
	let [inp2,setInp2]=useState(null)
	let [inp3,setInp3]=useState(null)
	let [inp4,setInp4]=useState(null)
	let [inp5,setInp5]=useState(null)
	let sum=[inp1,inp2,inp3,inp4]
	let dis=false
	if(sum.includes(null)){
		dis=false
	}else{
		dis=true
	}
	console.log(sum.includes(null));
	if(reg){
		return <Navigate to={"/main"}/>
	}
  return (
		<Auth title="Подтверждение">
		<div className="tac fs20 mb32">Введите код подтверждения, отправленный на ваш номер</div>
		<form action="" className="form" method="post">
			<div className="df flex-column justify-content-between">
				<div className="registre-block tac mb70">
					<div className="df g16 jcc mb16">
						<input 
							className="confirm-tel-input" 
							type="number" 
							aria-label=".form-control-lg example" 
							required maxLength="1" 
							onChange={(e)=>setInp1(e.currentTarget.value)}
							/>
						<input 
							className="confirm-tel-input" 
							type="number" 
							aria-label=".form-control-lg example" 
							required maxLength="1"
							onChange={(e)=>setInp2(e.currentTarget.value)}
							/>
						<input 
							className="confirm-tel-input" 
							type="number" 
							aria-label=".form-control-lg example" 
							required maxLength="1"
							onChange={(e)=>setInp3(e.currentTarget.value)}
							/>
						<input 
							className="confirm-tel-input" 
							type="number" 
							aria-label=".form-control-lg example" 
							required maxLength="1"
							onChange={(e)=>setInp4(e.currentTarget.value)}
							/>
					</div>
					<div className="mb32">
						<a href="#" className="tac">Отправить код повторно</a>
					</div>
					<div className="df g8 align-items-start tal mb16">
						<div>
							<input className="form-control-md mt-0 checkbox" type="checkbox" value="" aria-label="Checkbox for following text input" required/>
						</div>
						<div className="text-start">Я согласен на <a href="#">обработку персональных данных</a></div>
					</div>
					<div className="df g8 align-items-start tal">
						<div>
							<input className="form-control-md mt-0 checkbox" type="checkbox" value="" aria-label="Checkbox for following text input" required/>
						</div>
						<div className="text-start">Я согласен на <a href="#">с условиями политики конфиденциальности </a></div>
					</div>
				</div>
				<div>
					<button 
						className={dis===true?"cy cg1 btn cg2 w-100 mt70 mb16":"btn btn-lg cg2 w-100 bgcg"}
						type="submit"
						onClick={()=>{
							dispatch(registerFull(dis))
						}}
						>Продолжить
					</button>
				</div>
			</div>
		</form>
		</Auth>
  )
}
