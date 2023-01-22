import React from "react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swiper1 from "../Swiper";
import EntryImg from "../../assets/img/entry-form-img.jpg";
import ProjectImg from "../../assets/img/project-img.jpg";
import Header from "../Header"
import Footer from "../Footer"
import "swiper/css";
import Payment from './../Payment';
import { Link } from "react-router-dom";
import Registration  from "../../pages/authentification/Registration"
import Recovery  from "../../pages/Recovery"
export default function Home() {
  return (
    <>
	<Header />
      <main className="main">
        <section className="hero">
          <div className="container ">
            <div className="hero__container">
              <h1 className="visually-hidden">
                Благотворительный сервис кондитеров
              </h1>
              <h2 className="hero__title mb32">
                Помогать во&nbsp;благо другим и&nbsp;себе
              </h2>
              <p className="hero__descr">
                Развиваем позитивную благотворительность, раскрывая доброту
                в&nbsp;каждом
              </p>
            </div>

            <button className="btn btn-primary btn-lg w220" type="button">
              Заказать торт
            </button>
          </div>
        </section>
        <section className="project">
          <div className="container">
            <div className="row justify-content-between gy-4">
              <div className="col-lg-6 col-sm-12">
                <div className="project__info w-100">
                  <h2 className="project__title ">
                    Оказываем содействие семьям с&nbsp;детьми с&nbsp;ОВЗ
                  </h2>
                  <p className="project__descr">
                    Сообща мы&nbsp;поздравляем с&nbsp;важным событием
                    в&nbsp;жизни ребёнка&nbsp;&mdash; дарим подарок на&nbsp;день
                    рождения праздничный Торт.
                  </p>
                  <a href="#faq" className="project__link mb48">
                    Хочу узнать больше
                  </a>
                  <h3 className="fw7 fs24 mb16">КАК ЭТО РАБОТАЕТ?</h3>
                  <p className="project__descr mb48">
                    Вы можете поздравить ребёнка с днём рождения, заказав для
                    него торт. Отзыв о подарке Вам придёт на почту.
                    <br />
                    Каждый кондитер может стать волшебником для ребёнка.
                  </p>
                  <div className="project__btn row gy-3">
                    <div className="col">
                      <a href="#entry-form" className="project__btn-gift">
                        Хочу подарить
                      </a>
                    </div>
                    <div className="col">
                      <a href="#entry-form" className="project__btn-entrance">
                        Вход для родителя
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="project__img w-100">
                  <img src={ProjectImg} alt="" className="project-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partners">
          <div className="container">
            <h2 className="fs24 fw7">НАШИ ПАРТНЕРЫ</h2>
            <p className="partners__descr">
              Компании, которые оказывают помощь и&nbsp;поддержку
              благотворительной организации &laquo;Скорей Добрей&raquo;
              на&nbsp;регулярной основе
            </p>
            <div className="partners-sliders">
              <Swiper1 />
            </div>
          </div>
        </section>
        <section className="entry-form" id="entry-form">
          <div className="container">
            <h2 className="entry-form__title">Начните помогать прямо сейчас</h2>

            <div className="entry-form__content">
              <div className="row g-0">
                <div className="col-sm-12 col-lg-6">
                  <div className="entry-form__left w-100 h-100">
                    <img src={EntryImg} alt="" className="entry-form__img" />
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="entry-form__right w-100 h-100">
                    <div className="entry-form__right-content">
                      <h3 className="entry-form__subtitle">Пароль</h3>
                      <form action="" className="entry-form__regist">
                        <label className="entry-form__label">
                          <input
                            className="input-tel input-style"
                            type="tel"
                            name="phone"
                            placeholder="Номер телефона"
                          />
                        </label>
                        <label className="entry-form__label">
                          <input
                            className="input-password input-style"
                            type="password"
                            name="password"
                            placeholder="Пароль"
                          />
                        </label>
                      </form>
                      <div className="recover-password">
                        Забыли пароль?
						<Link to="/recovery" element={<Recovery />}>Восстановить </Link>
                      </div>
                      <button className="entry-form__btn btn-reset">
                        Войти
                      </button>
                      <div className="register-account">
                        Нет аккаунта?{" "}
						<Link to="/registration" element={<Registration />}>Зарегистрироваться </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
		<Payment/>
      </main>
	  <Footer />
    </>
  );
}
