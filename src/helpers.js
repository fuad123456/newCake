import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import DownloadFile from "./components/DownloadFile"
import Uploadfile from "./pages/Uploadfile"

export const setOptionRegistration=(option,fn)=>{
	if(option==='Кондитерская'){
		return <div className="text-start"><Link to='/confectionary-registration'><Button variant="primary" >Регистрация кондитерской</Button></Link></div>
	}else if(option==='Подопечный'){
		return <DownloadFile
		fn={fn}
		/>
	}
}