import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Menu from './Menu'
export default function Header(props) {

  return (
    <header className="header">
      <Navbar bg="bgcw" expand="lg" className="bgcw fixed-top">
        <Container>
            <Menu
			registered={props.registered}
			/>
        </Container>
      </Navbar>
    </header>

  );
}
