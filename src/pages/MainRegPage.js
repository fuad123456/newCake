import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import ImgChild1 from '../assets/img/child-img1.png'
import ImgChild2 from '../assets/img/child-img2.jpg'
export default function MainRegPage() {
  return (
	<>
		<Header 
		registered={true}
		/>
		<main className="main">
		<section className="catalog">
			<div className="container help-child">
				<h2 className="help-child__title">
					Выберите подопечного, которому хотите помочь
				</h2>
				<div className="row mb32">
					<div className="col-sm-12 col-lg-3">
						<div className="card">
							<img src={ImgChild1} className="card-img-top" alt="..."/>
							<div className="card-body">
							  <h5 className="card-title tac">Анна Иванова</h5>
							  <div className="mb8 ">О подопечном</div>
							  <div className="mb16 fs16">Спастический тетрапарез,	задержка психомоторного	развития. </div>
							  <div className="mb8">Пожелания к виду изделия</div>
							  <div className="fs16">Аллергия на лактозу</div>
							  <a href="#" className="btn cy w-100"><span className="fw7">Оплатить 4 620 руб.</span></a>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-lg-3">
						<div className="card">
							<img src={ImgChild1} className="card-img-top" alt="..."/>
							<div className="card-body">
							  <h5 className="card-title tac">Анна Иванова</h5>
							  <div className="mb8 ">О подопечном</div>
							  <div className="mb16 fs16">Спастический тетрапарез,	задержка психомоторного	развития. </div>
							  <div className="mb8">Пожелания к виду изделия</div>
							  <div className="fs16">Аллергия на лактозу</div>
							  <a href="#" className="btn cy w-100"><span className="fw7">Оплатить 2 800 руб.</span></a>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-lg-3">
						<div className="card">
							<img src={ImgChild2} className="card-img-top" alt="..."/>
							<div className="card-body">
							  <h5 className="card-title tac">Анна Иванова</h5>
							  <div className="mb8 ">О подопечном</div>
							  <div className="mb16 fs16">Спастический тетрапарез,	задержка психомоторного	развития. </div>
							  <div><button className="fs16 btn btn-link btn-hid">Увидеть полностью</button></div>
							  <div className="hidden-text d-none">
								<div className="fs16">Генетическая энцефалопатия развития и фокальная эпилепсия; задержка психо-речевого, моторного	развития; расстройства движения – дистонические атаки.</div>
							  <div className="mb8">Пожелания к виду изделия</div>
							  </div>
							  <div className="fs16">Аллергия на лактозу</div>
							  <a href="#" className="btn cy w-100"><span className="fw7">Оплатить 1 500 руб.</span></a>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-lg-3">
						<div className="card">
							<img src={ImgChild1} className="card-img-top" alt="..."/>
							<div className="card-body">
							  <h5 className="card-title tac">Анна Иванова</h5>
							  <div className="mb8 ">О подопечном</div>
							  <div className="mb16 fs16">Спастический тетрапарез,	задержка психомоторного	развития. </div>
							  <div className="mb8">Пожелания к виду изделия</div>
							  <div className="fs16">Аллергия на лактозу</div>
							  <a href="#" className="btn cy w-100"><span className="fw7">Оплатить 4 620 руб.</span></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
		<Footer />
	</>
  )
}
