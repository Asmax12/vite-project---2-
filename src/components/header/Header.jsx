import { useTranslation } from "react-i18next";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPerson, BsBookmark, BsCart, BsSearchHeart } from "react-icons/bs";
import { Form, InputGroup, Nav, Navbar, Dropdown, Offcanvas } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const { t, i18n } = useTranslation("header");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const currentLanguage = i18n.language;

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#3D464D" }}>
  
      {/* Toggle for mobile */}
      <Navbar.Toggle aria-controls="offcanvasNavbar" />

      {/* Offcanvas for mobile */}
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        style={{ backgroundColor: "#3D464D" }}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>

            {/* LINKS */}

          <Nav
            className="nav-links d-flex align-items-center mt-4 me-5"
            style={{ flexDirection: currentLanguage === "ar" ? "row-reverse" : "row" }}
          >
            <Nav.Link as={Link} to="/reviews" className="text-white fs-5 hover-orange">{t("reviews")}</Nav.Link>
            <div className="nav-separator"></div>
            <Nav.Link as={Link} to="/notes" className="text-white fs-5 hover-orange">{t("notes")}</Nav.Link>
            <div className="nav-separator"></div>
            <Nav.Link as={Link} to="/new-products" className="text-white fs-5 hover-orange">{t("new_products")}</Nav.Link>
            <div className="nav-separator"></div>
            <Nav.Link as={Link} to="/all-books" className="text-white fs-5 hover-orange">{t("all_books")}</Nav.Link>
            <div className="nav-separator"></div>
            <Nav.Link as={Link} to="/" className="text-white fs-5 hover-orange">{t("home")}</Nav.Link>
          </Nav>
            {/* SEARCH */}

          <Form className="search-form mt-5 me-5">
            <InputGroup
              className="search-input-group"
              style={{ flexDirection: currentLanguage === "ar" ? "row-reverse" : "row" }}
            >
              <InputGroup.Text className="search-input-group-text">
                <BsSearchHeart className="search-icon" />
              </InputGroup.Text>
              <Form.Control
                placeholder={t("search_placeholder")}
                className="search-input"
                dir={currentLanguage === "ar" ? "rtl" : "ltr"}
                style={currentLanguage === "ar" ? { textAlign: "right" } : {}}
              />
            </InputGroup>
          </Form>
{/* icon */}
          <div className="d-flex align-items-center mt-3 gap-4 me-5 pe-5 header-icons">
            <div style={{ position: "relative", display: "inline-block" }}>
              <BsCart className="fs-3 icon" />
              <span className="span">{t("cart_count")}</span>
            </div>
            <BsBookmark className="fs-3 icon" />
            <BsPerson className="fs-2 icon" />

               {/* LANGUAGE  */}

            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#3D464D", color: "white", border: "none" }}
              >
                {currentLanguage === "ar" ? t("language_ar") : t("language_en")}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("en")}>{t("language_en")}</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("ar")}>{t("language_ar")}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Offcanvas.Body>
      </Navbar.Offcanvas>

      {/* logo */}
             <Navbar.Brand as={Link} to="/" className="logo overflow-hidden" style={{ width: "110px", height: "110px" }}>
              <img src={logo} alt="logo" className="img-fluid" style={{ transition: "transform 0.3s ease" }}
               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} />
            </Navbar.Brand>

  
    </Navbar>
  );
}
