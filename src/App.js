// import logo from './logo.svg';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home-page/Home'
import Registration from './pages/authentification/Registration';
import Recovery from './pages/Recovery';
import {Routes, Route} from 'react-router-dom'
import ConfectionaryRegistartion from './pages/ConfectionaryRegistartion';
import Confirmation from './pages/authentification/Confirmation';
import Login from './pages/authentification/Login';
import Privacy from './pages/privacy/Privacy';
import SuccessDowload from './pages/authentification/SuccessDowload';
import MainRegPage from './pages/MainRegPage';
function App() {

  return (
    <div >
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="registration" element={<Registration/>}/>
				<Route path="recovery" element={<Recovery/>}/>
				<Route path="confectionary-registration" element={<ConfectionaryRegistartion/>}/>
				<Route path="confirmation" element={<Confirmation/>}/>
				<Route path="login" element={<Login/>}/>
				<Route path="privacy" element={<Privacy/>}/>
				<Route path="succesdowload" element={<SuccessDowload/>}/>
				<Route path="main" element={<MainRegPage/>}/>
			</Routes>
	</div>
  );
}

export default App;
