import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { MainPage_ROUTE } from "../../routers/paths";
import { hotelInfo } from "../../assets/Info";
import logo_mob from "../images/logo-mob.png";
import logo from "../images/logo.png";
import "./style/style.css";
import "./style/adaptive.css";

type Props = {};

export const Header = (props: Props) => {
  return (
    <Navbar expand="md">
      <Container>
        <Link to={MainPage_ROUTE} className="navbar-brand">
          <img src={logo_mob} alt="logo" className="logo_mob" />
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={MainPage_ROUTE}>{hotelInfo[0].city}</NavLink>
            <NavLink to={MainPage_ROUTE}>{hotelInfo[1].city}</NavLink>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
