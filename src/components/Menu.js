import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/img/svg/logo.svg";
import {Link} from "react-router-dom";
import Registration from "../pages/authentification/Registration";
export default function Menu(props) {
  return (
    <>
      <Navbar.Brand href="#home">
        <Link to='/Registration'>
          <div className="df g16">
            <img src={Logo} alt="" className="logo-img" />
            <div>
              <span className="logo-title">B67</span>
              <div className="logo-desc">
                Благотворительный сервис кондитеров
              </div>
            </div>
          </div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="fdc">
        <Nav className="ms-auto">
          <Link>
            	<Nav.Link href="#home">Ваш регион Сочи</Nav.Link>
          </Link>
          	<Nav.Link href="tel:+7 495 123-34-45" className=" cb fw7">
            	+7 495 123-34-45
        	</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
			{props.registered ?
				<>
					<Link>
						<Nav.Link href="#home">Личный кабинет</Nav.Link>
					</Link>
					<Link to='/registration' element={<Registration />}>
						<Nav.Link href="#link">Корзина</Nav.Link>
					</Link>
					<Link to='/registration' element={<Registration />}>
						<Nav.Link href="#link">Выход</Nav.Link>
					</Link>
				</>
				:
				<>
					<Link>
						<Nav.Link href="#home">Вход</Nav.Link>
					</Link>
					<Link to='/registration' element={<Registration />}>
						<Nav.Link href="#link">Регистрация</Nav.Link>
					</Link>
				</>
			}
        </Nav>
      </Navbar.Collapse>
    </>
  );
}
