import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPerson, BsBookmark, BsCart, BsSearchHeart } from "react-icons/bs";
import { Form, InputGroup, Nav, Navbar, Dropdown ,Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'; 

export default function Header() {
  return (
    <Navbar expand="lg" className='nav'>
       {/* <Container > */}
        
      {/* Logo */}
      <Navbar.Brand as={Link} to="/" className="logo" >
        <img src={logo} width="129px" height="128px" alt="logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <div className="main-layout d-flex align-items-center justify-content-between ">

          {/* Dropdown + Icons */}
            <div className="header-icons">

            <Dropdown>
              <Dropdown.Toggle  id="dropdown-basic">
                EN
              </Dropdown.Toggle>
              <Dropdown.Menu >
                 <Dropdown.Item onClick={() => changeLanguage('ar')} style={{color:'orange'}}>AR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

              <BsPerson className="icon person" />
              <BsBookmark className="icon bookmark" />
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <BsCart className="icon-cart" />
                <span className='span'>0</span>
              </div>
            </div>  {/* end Dropdown + Icons */}

          {/* Search */}
          <Form className="search-form" >
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
            <Nav className="nav-links d-flex align-items-center ">
            <Nav.Link as={Link} to="/reviews" className="custom-link">المراجعات</Nav.Link>
            <Nav.Link as={Link} to="/notes" className="custom-link">المذكرات</Nav.Link>
            <Nav.Link as={Link} to="/new-products" className="custom-link">المنتجات الجديدة</Nav.Link>
            <Nav.Link as={Link} to="/all-books" className="custom-link">جميع الكتب</Nav.Link>
            <Nav.Link as={Link} to="/" className="custom-link">الرئيسية</Nav.Link>
          </Nav>

        </div> {/* end main-layout */}
      </Navbar.Collapse>
             {/* </Container> */}
       
    </Navbar>
  );
}
