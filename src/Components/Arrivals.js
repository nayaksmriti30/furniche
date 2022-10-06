import React from 'react'
import { Container, Row, Col,Form , FormControl , Button } from 'react-bootstrap';
import Slider from "react-slick";

function Arrivals() {
    const new_arrival = {
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 4,
        dots: false,
        nav: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "40px",
                },
            },
        ],
    };
    const testimonial_slider= {
        infinite: true,
        
        slidesToShow: 1,
        dots: true,
        nav: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "40px",
                },
            },
        ],
    };
    
    return (
        <div>
             <div className="category">
        <Container>
          <Row>
            <Col md={3}>
              <div className="heading">
                <h2>
                  Shop by <span>Category</span>
                </h2>
              </div>
            </Col>
            <Col md={9}>
              <div className="shop">
                <ul className="d-flex p-0 m-0">
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop1.png" />
                      <span>Sofa</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop2.png" />
                      <span>Beds</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop3.png" />
                      <span>Dining</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop4.png" />
                      <span>Bookshelves</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop5.png" />
                      <span>Study</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop6.png" />
                      <span>Decor</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop7.png" />
                      <span>Mettresses</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop8.png" />
                      <span>Storage</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop9.png" />
                      <span>TV Units</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop10.png" />
                      <span>Cupboards</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop11.png" />
                      <span> Shoe Racks</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/shop12.png" />
                      <span>More</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


    <div className='purple_bg'>
      <div className="advt1">
        <Container>
          <div className="ad_space text-white position-relative">
            <img src="../assets/images/furniture.jpg" />
            <span> Advertising Space</span>
          </div>
        </Container>
      </div>

      <Container>
        <Row className="comfort">
            <Col lg={3} md={6} sm={6}>
              <div className="d-flex design">
              <div className="position-relative">
                <img src="../assets/images/smart_obj1.png"></img>
                <span className="img_bg"></span>
                </div>
                <div className="ms-3">
                  <h5>Design</h5>
                  <span>Smart, designs for the way you live.</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="d-flex design">
                <div className="position-relative">
                   <img src="../assets/images/smart_obj2.png"></img>
                <span className="img_bg"></span>
                </div>
                <div className="ms-3">
                  <h5>Comfort</h5>
                  <span>Supportive, comfy & stays that way.</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="d-flex design">
              <div className="position-relative">
                <img src="../assets/images/smart_obj3.png"></img>
                <span className="img_bg"></span>
                </div>
                <div className="ms-3">
                  <h5>Quality</h5>
                  <span>Family friendly & crafted to last.</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="d-flex design">
              <div className="position-relative">
                <img src="../assets/images/smart_obj4.png"></img>
                <span className="img_bg"></span>
                </div>
                <div className="ms-3">
                  <h5>Choice</h5>
                  <span>Pick your size, shape & fabric.</span>
                </div>
              </div>
            </Col>
          
        </Row>
      </Container>
      </div>          
           
        <div className='arrival_slider img_overlay'>
            <Container>

                <div className='heading'>
                    <h2>
                        New <span>Arrivals</span>
                    </h2>

                </div>
                <Slider {...new_arrival}>
                    <div>
                        <div className='position-relative'>

                            <img src="../assets/images/gallery1.jpg" />
                            <div className='overlay'>
                                <a href='#' className='shop_btn'>Buy Now</a>
                            </div>
                        </div>
                        <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                    </div>
                    <div>
                        <div className='position-relative'>
                            <img src="../assets/images/gallery2.jpg" />
                            <div className='overlay'>
                                <a href='#' className='shop_btn'>Buy Now</a>
                            </div>
                        </div>
                        <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                    </div>
                    <div>
                        <div className='position-relative'>
                            <img src="../assets/images/gallery3.jpg" />
                            <div className='overlay'>
                                <a href='#' className='shop_btn'>Buy Now</a>
                            </div>
                        </div>
                        <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                    </div>
                    <div>
                        <div className='position-relative'>
                            <img src="../assets/images/gallery4.jpg" />
                            <div className='overlay'>
                                <a href='#' className='shop_btn'>Buy Now</a>
                            </div>
                        </div>
                        <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                    </div>
                    <div>
                        <div className='position-relative'>
                            <img src="../assets/images/gallery2.jpg" />
                            <div className='overlay'>
                                <a href='#' className='shop_btn'>Buy Now</a>
                            </div>
                        </div>
                        <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                    </div>
                    <div>
                        <div className='position-relative'>
                            <img src="../assets/images/gallery4.jpg" />
                            <div className='overlay'>
                                <a href='#' className='shop_btn'>Buy Now</a>
                            </div>
                        </div>
                        <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                    </div>
                    <div>
                        <div className='position-relative'>
                            <img src="../assets/images/gallery1.jpg" />
                            <div className='overlay'>
                                <a href='#' className='shop_btn'>Buy Now</a>
                            </div>
                        </div>
                        <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                    </div>
                </Slider>
            </Container>
        </div>
            <div className='product_slider img_overlay'>
                <Container>

                    <div className='heading'>
                        <h2>
                            Featured <span>Products</span>
                        </h2>

                    </div>
                    <Slider {...new_arrival}>
                        <div>
                            <div className='position-relative'>

                                <img src="../assets/images/products1.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/products1.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/products2.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/products3.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/products4.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/products3.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/products1.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                    </Slider>
                </Container>
            </div>
            <div className='rooms img_overlay'>
                <Container>
                    <Row>
                        <Col md={4} sm={4}>
                            <div className='position-relative'>
                                <img src="../assets/images/room1.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <h3>Living Room</h3>
                        </Col>
                        <Col md={4} sm={4}>
                            <div className='position-relative'>
                                <img src="../assets/images/room2.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <h3>Bed Room</h3>
                        </Col>
                        <Col md={4} sm={4}>
                            <div className='position-relative'>
                                <img src="../assets/images/room3.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <h3>Dining Room</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='advt'>
                <Container>
                    <div className='text-center'>
                        <img src="../assets/images/advt1.jpg" />
                    </div>
                </Container>
            </div>
            <div className='product_slider img_overlay pb-0'>
                <Container>

                    <div className='heading'>
                        <h2>
                            Limited <span>Time Offers</span>
                        </h2>

                    </div>
                    <Slider {...new_arrival}>
                        <div>
                            <div className='position-relative'>

                                <img src="../assets/images/offer1.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                            <div className='time_ends'>
                                <h5> Ends in 09:55:30</h5>
                           
                            </div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/offer2.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                             <div className='time_ends'>
                                <h5> Ends in 09:55:30</h5>
                           
                            </div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/offer3.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                             <div className='time_ends'>
                                <h5> Ends in 09:55:30</h5>
                           
                            </div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/offer4.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                             <div className='time_ends'>
                                <h5> Ends in 09:55:30</h5>
                           
                            </div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/offer1.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                             <div className='time_ends'>
                                <h5> Ends in 09:55:30</h5>
                           
                            </div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/offer3.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                             <div className='time_ends'>
                                <h5> Ends in 09:55:30</h5>
                            </div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/offer2.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                             <div className='time_ends'>
                                <h5> Ends in 09:55:30</h5>
                            </div>
                        </div>
                    </Slider>
                </Container>
            </div>
            <div className='product_slider img_overlay'>
                <Container>

                    <div className='heading'>
                        <h2>
                            Special <span>Deals</span>
                        </h2>

                    </div>
                    <Slider {...new_arrival}>
                        <div>
                            <div className='position-relative'>

                                <img src="../assets/images/deals1.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/deals2.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/deals3.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/deals4.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/deals1.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/deals2.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                        <div>
                            <div className='position-relative'>
                                <img src="../assets/images/deals3.jpg" />
                                <div className='overlay'>
                                    <a href='#' className='shop_btn'>Buy Now</a>
                                </div>
                            </div>
                            <div className='deal_caption'><h5>Eowyn Bed</h5><span>From ₹35,499</span></div>
                        </div>
                    </Slider>
                </Container>
            </div>
            <div className='customer_slider'>
                <Container>

                    <div className='heading'>
                        <h2>
                            Happy <span>Customers</span>
                        </h2>

                    </div>
                    <Slider {...testimonial_slider}>
                        <div className='review position-relative p-lg-4 p-2'>
                            <img src="../assets/images/quotes.png" className='position-absolute quotes' />
                            <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Nam eu nulla. Donec lobortis purus vel urna. Nunc laoreet lacinia nunc. In volutpat sodales ipsum. Sed vestibulum. Integer in ante. </p>
                            <div className='d-flex align-items-center'>
                                <img src="../assets/images/profile1.png" />
                                <div className='name'>
                                    <h4>Mr. Amit Sharma </h4>
                                    <h5>New Delhi</h5></div>
                            </div>
                        </div>
                        <div className='review position-relative p-lg-4 p-2'>
                            <img src="../assets/images/quotes.png" className='position-absolute quotes' />
                            <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Nam eu nulla. Donec lobortis purus vel urna. Nunc laoreet lacinia nunc. In volutpat sodales ipsum. Sed vestibulum. Integer in ante. </p>
                            <div className='d-flex align-items-center'>
                                <img src="../assets/images/profile2.png" />
                                <div className='name'>
                                    <h4>Mr. Amit Sharma </h4>
                                    <h5>New Delhi</h5></div>
                            </div>
                        </div>
                        <div className='review position-relative p-lg-4 p-2'>
                            <img src="../assets/images/quotes.png" className='position-absolute quotes' />
                            <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Nam eu nulla. Donec lobortis purus vel urna. Nunc laoreet lacinia nunc. In volutpat sodales ipsum. Sed vestibulum. Integer in ante. </p>
                            <div className='d-flex align-items-center'>
                                <img src="../assets/images/profile3.png" />
                                <div className='name'>
                                    <h4>Ms. Amita Sharma </h4>
                                    <h5>New Delhi</h5></div>
                            </div>
                        </div>
                        <div className='review position-relative p-lg-4 p-2'>
                            <img src="../assets/images/quotes.png" className='position-absolute quotes' />
                            <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Nam eu nulla. Donec lobortis purus vel urna. Nunc laoreet lacinia nunc. In volutpat sodales ipsum. Sed vestibulum. Integer in ante. </p>
                            <div className='d-flex align-items-center'>
                                <img src="../assets/images/profile1.png" />
                                <div className='name'>
                                    <h4>Mr. Amit Sharma </h4>
                                    <h5>New Delhi</h5></div>
                            </div>
                        </div>
                        <div className='review position-relative p-lg-4 p-2'>
                            <img src="../assets/images/quotes.png" className='position-absolute quotes' />
                            <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Nam eu nulla. Donec lobortis purus vel urna. Nunc laoreet lacinia nunc. In volutpat sodales ipsum. Sed vestibulum. Integer in ante. </p>
                            <div className='d-flex align-items-center'>
                                <img src="../assets/images/profile2.png" />
                                <div className='name'>
                                    <h4>Mr. Amit Sharma </h4>
                                    <h5>New Delhi</h5></div>
                            </div>
                        </div>

                    </Slider>
                </Container>
            </div>
            <div className='email_ad py-3'>
                <Container>
                    <div className='d-lg-flex align-items-center justify-content-between'>
                        <div>
                    <h1>Be the first to know...</h1>
                    <h6>Sign up for emails packed with finds and inspiration</h6>
                    </div>
                    <div className='search_bar'>
                    <Form className="d-flex me-0 my-lg-0 my-3">
                        <FormControl
                            type="search"
                            placeholder="Email Address"
                            className=""
                            aria-label="Search"
                        />
                        <button type='submit' className='shop_btn'>SUBSCRIBE</button>
                    </Form>
                    </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Arrivals