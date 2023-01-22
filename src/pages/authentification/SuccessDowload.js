import React from 'react'
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from './../../components/auth/Auth';
import { Link } from 'react-router-dom';
export default function SuccessDowload() {
  return (
	<Auth title="Загрузка файла">
		<p>
		Профиль будет активиован после прохождения проверки
		</p>
		<p>
		Мы пришлем Вам смс-уведомление на телефон
		</p>
		<p>
		Спасибо за ожидание!
		</p>
		<Link to="/confirmation">Продолжить регистрацию</Link>
	</Auth>
  )
}
