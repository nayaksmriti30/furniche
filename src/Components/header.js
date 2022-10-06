import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from "react-bootstrap";
import Slider from "react-slick";
import Footer from "./Footer";
import Arrivals from "./Arrivals";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const TopRated = {
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 1,
    dots: true,
    nav: true,
    speed: 500,
  };

  return (
    <>
      <header className="py-3">
        <Container>
          <div className="top_header">
            <Row className="align-items-center">
              <Col lg={2} md={4} sm={4}>
                <div className="logo">
                  <img
                    src="../assets/images/logo.png"
                    className="header_logo"
                  />
                </div>
              </Col>
              <Col
                lg={6}
                md={12}
                className="order-3 order-lg-2 mt-3 mt-lg-0 search_form"
              >
                <Form className="d-flex position-relative">
                  <FormControl
                    type="search"
                    placeholder="Search Products.."
                    className="search_inp"
                    aria-label="Search"
                  />
                  <button
                    type="submit"
                    className="position-absolute search_icon"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </Form>
              </Col>
              <Col lg={4} md={8} sm={8} className="order-2 order-lg-3">
                <Button
                  onClick={handleShow}
                  className="border-0 rounded-circle d-sm-none d-block"
                >
                  <i class="fas fa-ellipsis-v login_menu d-sm-none"></i>
                </Button>

                <div className="header_right d-sm-flex align-items-center justify-content-lg-between justify-content-end d-none">
                  <div className="login_btn d-flex align-items-center">
                    <a href="#">Login</a>
                    <span>or</span>
                    <a href="#">Register</a>
                  </div>

                  <div className="cart">
                    <a href="#">
                      <i className="fas fa-heart"></i>
                      <span>12</span>
                    </a>
                    <a href="#">
                      <i className="fas fa-shopping-cart"></i>
                      <span>12</span>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </header>
      <div className="menu py-3">
        <Container>
          <Navbar expand="lg" className="d-flex m-0 p-0">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="justify-content-between w-100" navbarScroll>
                <Nav.Link href="#action1">Sofas</Nav.Link>
                <Nav.Link href="#action1">Living</Nav.Link>
                <Nav.Link href="#action1">Bedroom</Nav.Link>
                <Nav.Link href="#action1">Dining</Nav.Link>
                <Nav.Link href="#action1">Storage</Nav.Link>
                <Nav.Link href="#action1">Study & Office</Nav.Link>
                <Nav.Link href="#action1">Kids Room</Nav.Link>
                <Nav.Link href="#action1">Decor</Nav.Link>
                <Nav.Link href="#action1">Furniture Packages</Nav.Link>
                <Nav.Link href="#action1">Interior Design</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      <div className="main_slider me-auto position-relative">
        <div className="spiral">
          <div id="one"></div>
          <div id="two"></div>
        </div>
        <Slider {...TopRated}>
          <div className="position-relative">
            <a href="#" className="shop_btn1 d-sm-none d-inline-block">
              SHOP NOW
            </a>
            <div className="slider_desc position-absolute d-none d-sm-block">
              <h1>Find Best Furniture Here</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit am eu
                nulla onec lobortis purus vel urna unc laoreet lacinia nunc.
              </p>
              <a href="#" className="shop_btn">
                Shop Now
              </a>
            </div>
            <div className="banner_img">
              <img src="../assets/images/main_slider1.jpg" />
            </div>
          </div>
          <div className="position-relative">
            <a href="#" className="shop_btn1 d-sm-none d-inline-block">
              SHOP NOW
            </a>
            <div className="slider_desc position-absolute d-none d-sm-block">
              <h1>Find Best Furniture Here</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit am eu
                nulla onec lobortis purus vel urna unc laoreet lacinia nunc.
              </p>
              <a href="#" className="shop_btn">
                Shop Now
              </a>
            </div>
            <div className="banner_img">
              <img src="../assets/images/main_slider2.jpg" />
            </div>
          </div>
        </Slider>
      </div>

      <Arrivals />
      <Footer />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="logo">
              <img src="../assets/images/logo.png" className="header_logo" />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="header_right">
            <ul className="login_btn d-block text-center">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              </ul>
              <ul className="cart"> 
                  <li><a href="#">
                    <i className="fas fa-heart"></i>
                    <span>12</span>
                  </a></li>
                  <li>
                  <a href="#">
                    <i className="fas fa-shopping-cart"></i>
                    <span>12</span>
                  </a>
                  </li>
              </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
