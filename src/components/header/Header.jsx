import { useEffect } from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPerson, BsBookmark, BsCart, BsSearchHeart } from "react-icons/bs";
import { Form, InputGroup, Nav, Navbar, Dropdown } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

export default function Header({ language, setLanguage }) {

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    if (language === "AR") {
      document.documentElement.lang = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }
  }, [language]);

  return (
    <Navbar expand="lg" className='nav'>
      <Navbar.Brand as={Link} to="/" className="logo">
        <img src={logo} width="129px" height="120px" alt="logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="main-layout d-flex align-items-center justify-content-between ">
          <div className="header-icons">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#3D464D", color: "white", border: "none" }}
              >
                {language}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("EN")}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("AR")}>AR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <BsPerson className="icon person" />
            <BsBookmark className="icon bookmark" />
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <BsCart className="icon-cart" />
              <span className='span'>0</span>
            </div>
          </div>

          {/* Search */}
          <Form className="search-form">
            <InputGroup className="search-input-group">
              <InputGroup.Text className="search-input-group-text">
                <BsSearchHeart className="search-icon" />
              </InputGroup.Text>
              <Form.Control
                placeholder={language === "AR" ? "ابحث باسم الكتاب أو المؤلف" : "Search by book or author"}
                className="search-input"
              />
            </InputGroup>
          </Form>

          {/* Nav Links */}
          <Nav className="nav-links d-flex align-items-center ">
            <Nav.Link as={Link} to="/reviews" className="custom-link">
              {language === "AR" ? "المراجعات" : "Reviews"}
            </Nav.Link>
            <Nav.Link as={Link} to="/notes" className="custom-link">
              {language === "AR" ? "المذكرات" : "Notes"}
            </Nav.Link>
            <Nav.Link as={Link} to="/new-products" className="custom-link">
              {language === "AR" ? "منتجات جديدة" : "New Products"}
            </Nav.Link>
            <Nav.Link as={Link} to="/all-books" className="custom-link">
              {language === "AR" ? "جميع الكتب" : "All Books"}
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="custom-link">
              {language === "AR" ? "الرئيسية" : "Home"}
            </Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
