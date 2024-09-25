import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { allHotels } from "../../assets/Info";
import logo_mob from "../images/logo-mob.png";
import logo from "../images/logo.png";
import bell from "../images/bell.png";
import { HeaderLink } from "../UI/Links/HeaderLink";
import { MyDropDown } from "../UI/DropDown/DropDown";
import { reservationItems } from "../../assets/links";
import "./style.css";

export const Header = () => {
  return (
    <div id="navbar">
      <Navbar id="navbar" expand="md">
        <Container>
          <Link
            to={allHotels[0].city.toLocaleLowerCase()}
            className="navbar-brand"
          >
            <img src={logo_mob} alt="logo" className="logo_mob" />
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex gap-3 justify-content-md-around align-items-md-baseline w-100">
              <div className="d-flex flex-column flex-sm-row">
                {allHotels.map((el) => (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav_link active_link" : "nav_link"
                    }
                    key={el.city}
                    to={`/${el.city.toLocaleLowerCase()}`}
                  >
                    {el.city}
                  </NavLink>
                ))}
              </div>

              <HeaderLink alt="bell" src={bell} isDropDown={true}>
                <MyDropDown items={reservationItems} styles={{fontSize: 16}}>Reservation</MyDropDown>  
              </HeaderLink>

              <div className="langs">
               <Link to={'https://ua-apart-hotels.netlify.app'}>UA</Link> /
               <span className="active_lang">EN</span> 
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
