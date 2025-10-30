import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPerson, BsBookmark, BsCart, BsSearchHeart } from "react-icons/bs";
import { Form, InputGroup, Nav, Navbar, Dropdown } from "react-bootstrap";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Navbar expand="lg" className='nav' style={{ height: '120px' }}>
      <div className="container-fluid">

        {/* Logo */}
        <Navbar.Brand href="#home" className="logo" style={{ paddingTop: '15px' }}>
          <img src={logo} width="100" height="110" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <div className="main-layout d-flex align-items-center justify-content-between w-100">

            {/* Dropdown + Icons */}
            <div className="d-flex align-items-center gap-2 lang-icons" style={{ marginTop: '22px' }}>

              <Dropdown>
                <Dropdown.Toggle style={{ background: '#3D464D', border: 'none' }} id="dropdown-basic">
                  EN
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" style={{ color: '#E99239' }}>AR</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div className="header-icons">
                <BsPerson className="icon person" />
                <BsBookmark className="icon bookmark" />

                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <BsCart className="icon cart" />
                  <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    background: '#E99239',
                    color: 'white',
                    fontSize: '10px',
                    padding: '1px 5px',
                    borderRadius: '50%',
                    fontWeight: 'bold',
                  }}>0</span>
                </div>
              </div>

            </div> {/* end Dropdown + Icons */}

            {/* Search */}
            <Form className="search-form" style={{ width: '333px', marginTop: '40px' }}>
              <InputGroup className="search-input-group">
                <InputGroup.Text className="search-input-group-text">
                  <BsSearchHeart className="search-icon" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="بحث ب اسم الكتاب .المؤلف.العنوان"
                  className="search-input"
                />
              </InputGroup>
            </Form>

            {/* Nav Links */}
            <Nav className="nav-links d-flex align-items-center gap-3 mt-5">
              <Nav.Link className="custom-link" href="#home">المراجعات</Nav.Link>
              <Nav.Link className="custom-link" href="#home">المذكرات</Nav.Link>
              <Nav.Link className="custom-link" href="#about">المنتجات الجديدة</Nav.Link>
              <Nav.Link className="custom-link" href="#shop">جميع الكتب</Nav.Link>
              <Nav.Link className="custom-link" href="#contact">الرئيسية</Nav.Link>
            </Nav>

          </div> {/* end main-layout */}
        </Navbar.Collapse>

      </div> {/* end container-fluid */}
    </Navbar>
  );
}
