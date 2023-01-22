import React from "react";
import Logo from "../../assets/img/svg/logo.svg";
import RegImg from "../../assets/img/registration-img.jpg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicSpinner from './../Spinner';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Auth(props) {
	const status=useSelector(state=>state.user.status)
  return (
    <div style={{width:'100%', height:'100vh', background:"white", position:'relative'}}>
		{status==='loading'&&<BasicSpinner />}
		{/* {<BasicSpinner />} */}
		<Link to="/">
			<div className="tar">
				<img
				src={Logo}
				alt=""
				className="logo-img"
				style={{ marginTop: "20px", textAlign: "right", marginRight: "80px" }}
				/>
			</div>
	  </Link>
      <section className="registration" style={{background:"white"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-7">
              <img src={RegImg} alt="" className="img-registre" />
            </div>
            <div className="col-sm-12 col-md-5 tac">
              <div className="registre-title">{props.title}</div>
              {/* <form action="" className="form"> */}
              {props.children}
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
