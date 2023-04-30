import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { MainPage_ROUTE } from "../../routers/paths";
import { hotels } from "../../assets/Info";
import logo_mob from "../images/logo-mob.png";
import logo from "../images/logo.png";
import bell from "../images/bell.png";
import phone from "../images/Phone.png";
import "./style/style.css";
import "./style/adaptive.css";
import { HeaderLink } from "../UI/HeaderLink";

type Props = {};

export const Header = (props: Props) => {
  return (
    <Navbar expand="md">
      <Container>
        <Link to={MainPage_ROUTE} className="navbar-brand">
          <img src={logo_mob} alt="logo" className="logo_mob mob" />
          <img src={logo} alt="logo" className="logo desktop" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="d-flex justify-content-lg-around w-100">
            <NavLink to={MainPage_ROUTE}>{hotels[0].city}</NavLink>
            <NavLink to={MainPage_ROUTE}>{hotels[1].city}</NavLink>
            <HeaderLink alt="bell" src={bell}>reservation</HeaderLink>
            <HeaderLink alt="phone" src={phone}>+83 (097) 797 36 23</HeaderLink>
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
