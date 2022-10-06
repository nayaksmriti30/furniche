import React from "react";
import { Container,Row , Col } from "react-bootstrap";

function footer() {
  return (
    <div className="footer">
      <Container>
   
        <Row className="flex-wrap">
            
          <div className="col-md-3 col-sm-6 col-6">
            <div className="f_menu">
            <h5>Shop</h5>
            <ul>
              <li>
                <a href="#">Sale</a>
              </li>
              <li>
                <a href="#">Furniture</a>
              </li>
              <li>
                <a href="#">Décor & Pillows</a>
              </li>
              <li>
                <a href="#">Bed & Bath</a>
              </li>
              <li>
                <a href="#">Kitchen & Dining</a>
              </li>
              <li>
                <a href="#">Lighting</a>
              </li>
              <li>
                <a href="#">Outdoor</a>
              </li>
            </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
          <div className="f_menu">
            <h5>Service</h5>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Bed & Bath</a>
              </li>
              <li>
                <a href="#">Returns & Exchanges</a>
              </li>
              <li>
                <a href="#">Faq’s</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
          <div className="f_menu">
            <h5>Account</h5>
            <ul>
              <li>
                <a href="#">Login as supplier</a>
              </li>
              <li>
                <a href="#">Account Overview</a>
              </li>
              <li>
                <a href="#">My Orders</a>
              </li>
              <li>
                <a href="#">My Favorites</a>
              </li>
              <li>
                <a href="#">Shipping & Billing</a>
              </li>
            </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
          <div className="f_menu">
          <h5>Download App</h5>
          <div className="">
          <img src="../assets/images/appStore.jpg" className="mb-3 mb-xl-0"/>
          <img src="../assets/images/appStore.jpg" className="mb-2 mb-xl-0"/>
          </div>
          <h5>Keep in Touch</h5>
          <ul className="d-flex social">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
          </div>
          
          </div>
          
        </Row>
         
      </Container>
      <div className="copyright">
        <Container>
            <p className="m-0">© 2020 furniche.com. All rights reserved.</p>
        
        </Container>
        </div>

       
    </div>
  );
}

export default footer;
