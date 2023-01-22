import React from "react";
import Visa from "../assets/img/svg/visa.svg";
import Mastercard from "../assets/img/svg/mastercard.svg";
import Maestro from "../assets/img/svg/maestro.svg";
import Mir from "../assets/img/svg/mir-logo.svg";
export default function Payment() {
  return (
    <section className="section">
      <hr />
      <div className="container">
        <div className="fs32 mb32 tac">Электронная платёжная система</div>
        <div className="fs24 mb32">Информация о компании</div>
        <ul className="hero__info">
          <li className="hero__item">
            Вид деятельности: агрегатор сервис кондитеров
          </li>
          <li className="hero__item">
            Сервис позволяет оставить заявку на торт для детей с ОВЗ на день
            рождения
          </li>
          <li className="hero__item">
            Любой зарегистрированный человек в сервисе может подарить ребёнку
            торт
          </li>
        </ul>
        <div className="fs24 mb32">Как происходит оплата</div>
        <div className="df g16 aic mb32">
          <img src="./img/svg/hero-icon-card.svg" alt="" />
          <div className="hero__text">
            <p>Оплата происходит банковской картой, через интернет</p>
            <p>
              Номер карты (PAN) должен иметь не менее 15 и не более 19 символов
            </p>
          </div>
        </div>
        <div className="mb32">
          Мы принимаем платежи с сайта по следующим банковским картам:
        </div>
        <div className="bank-cards">
          <img src={Visa} alt="" />
          <img src={Mastercard} alt="" />
          <img src={Maestro} alt="" />
          <img src={Mir} alt="" />
        </div>
      </div>
    </section>
  );
}
