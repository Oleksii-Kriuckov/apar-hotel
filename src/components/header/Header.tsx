import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { hotels } from "../../assets/Info";
import logo_mob from "../images/logo-mob.png";
import logo from "../images/logo.png";
import bell from "../images/bell.png";
import phone from "../images/Phone.png";
import { HeaderLink } from "../UI/Links/HeaderLink";
import "./style/style.css";
import "./style/adaptive.css";

type Props = {};

export const Header = (props: Props) => {
  return (
    <Navbar expand="md">
      <Container>
        <Link to={hotels[0].city.toLocaleLowerCase()} className="navbar-brand">
          <img src={logo_mob} alt="logo" className="logo_mob mob" />
          <img src={logo} alt="logo" className="logo desktop" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-lg-around w-100">
            {hotels.map((el) => (
              <NavLink className='nav_link' key={el.city} to={`/${el.city.toLocaleLowerCase()}`}>
                {el.city}
              </NavLink>
            ))}
            {/* <NavLink to={MainPage_ROUTE}>{hotels[1].city}</NavLink> */}
            <HeaderLink alt="bell" src={bell}>
              reservation
            </HeaderLink>
            <HeaderLink alt="phone" src={phone}>
              +83 (097) 797 36 23
            </HeaderLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
