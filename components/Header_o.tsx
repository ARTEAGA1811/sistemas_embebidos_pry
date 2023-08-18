import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo_epn from '../assets/logo_epn.png';
export const Header_o = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark" className={"justify-center"}>
            <Container className={"text-center"}>
                <Navbar.Brand href="#home">
                    <img
                        src={logo_epn.src}
                        width="50"
                        height=""
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{'  '}
                    <span className={"m-0 fs-2"}>Proyecto Segundo Bimestre </span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}