import React from "react";
import Logo from '../assets/img/svg/logo.svg'
import Phone from '../assets/img/svg/phone.svg'
import Telegram from '../assets/img/svg/telegramm.svg'
import SvgEl from './SvgEl.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="df fdc aic mb100">
          <div >
            <div className="fs20 cg mb16">МЕСТОРАСПОЛОЖЕНИЕ</div>
            <h2 className="fs24 fw7 mb16">ГДЕ МЫ НАХОДИМСЯ</h2>
          </div>
          <div className="df g16">
           <SvgEl 
		   letter='location'
		   />
            <address className="fs16">
              Россия, г. Сочи
              <br /> ул. Дмитриевой, 13, корп. 1
            </address>
          </div>
        </div>
      </div>
      <div className="questions">
        <div className="container">
          <h3 className="fs32 fw7 cw mb16">Остались вопросы?</h3>
          <h3 className="fs32 fw7 cw mb16">Тогда свяжитесь с нами!</h3>
          <div className="fs24 fw7 cw lh2-8 mb32">
            Не стесняйтесь обращаться к нам, если у вас есть какие-либо вопросы,
            <br /> предложения или идеи для сотрудничества.
          </div>
          <div className="mb20">
            <a href="https://web.telegram.org/" className="mb20">
              <div className="df g16">
                <img src={Telegram} alt="telegram" />
                <div>
                  <div className="fs24 cw">@Olga_b67russia</div>
                  <div className="cg">Написать в Telegram</div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="tel:+7 (965) 479-09-46" className="mb20">
              <div className="df g16">
                <img src={Phone} alt="phone" />
                <div>
                  <div className="fs24 cw">+7 (965) 479-09-46</div>
                  <div className="cg">Позвонить</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <img src={Logo} alt="logo" />
            </div>
            <div className="col-auto">
              <div>
                <a href="#" className="cw">
                  Часто задаваемые вопросы
                </a>
              </div>
              <div>
                <a href="#" className="cw">
                  Документы и соглашения
                </a>
              </div>
              <div>
                <a href="./team.html" className="cw">
                  Команда
                </a>
              </div>
            </div>
            <div className="col-auto">
              <div>
                <a href="#" className="cw">
                  Электронная платёжная система
                </a>
              </div>
            </div>
            <div className="col">
              <div className="tar mb16">
                <a href="#" className="cw fs24 fw7">
                  Скачивайте наше приложение и совершайте добро в удобное время!
                </a>
              </div>
              <div className="tar">
                <a href="#" className="cw fs24 fw7">
                  Ссылка
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
