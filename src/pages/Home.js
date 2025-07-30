import React from "react";
import Navbar from "./comm/Navbar";
import OurWorkSlider from "./brand_Slider";
import { Link } from "react-router-dom";
import Footer from "./comm/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section with Background Video */}
      <section className="hero-video-section">
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="tailor_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="video-overlay" />
        <div className="video-content">
          <div className="hero-text">
            <h1 className="hero-headline">
              Perfect Fit,<br className="md:hidden" /> Timeless Style
            </h1>
            <p className="hero-subhead">
              Custom men's tailoring designed to complement your lifestyle
            </p>
          </div>

          <div className="hero-cta flex flex-wrap gap-4">
            <Link href="/appointment">
            <button className="btn_enquiry">
              Book Appointment
            </button>
            </Link>
            <Link href="/services">
            <button className="btn_view">
              View Collections
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="about-content pe-lg-5">
                <span className="about-tagline">About Our Legacy</span>
                <h2 className="about-heading">Master Tailors Since 1998</h2>
                <p className="about-lead">
                  For over two decades, we've been transforming fabric into art with precision tailoring
                  that celebrates individuality.
                </p>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="about-feature-icon">
                        <i className="bi bi-scissors"></i>
                      </div>
                      <div>
                        <h5 className="about-feature-title">Handcrafted Excellence</h5>
                        <p className="about-feature-desc">Every garment receives 50+ hours of meticulous handwork</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="about-feature-icon">
                        <i className="bi bi-award"></i>
                      </div>
                      <div>
                        <h5 className="about-feature-title">Award Winning</h5>
                        <p className="about-feature-desc">Recognized by Fashion Council for 5 consecutive years</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="about-feature-icon">
                        <i className="bi bi-people"></i>
                      </div>
                      <div>
                        <h5 className="about-feature-title">Client-Centric</h5>
                        <p className="about-feature-desc">5000+ satisfied clients worldwide</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="about-feature-icon">
                        <i className="bi bi-flower3"></i>
                      </div>
                      <div>
                        <h5 className="about-feature-title">Sustainable</h5>
                        <p className="about-feature-desc">Ethically sourced premium materials</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="/contact" className="about_btn">
                  Schedule Your Fitting <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              <div className="about-img-container position-relative">
                <img
                  src="https://img.freepik.com/premium-photo/young-man-tailor-working-new-clothing_85869-8465.jpg"
                  alt="Master Tailor at work"
                  className="about-main-img img-fluid rounded-3 shadow-lg"
                />
                <div className="about-img-badge">
                  <h4 className="mb-0">25+</h4>
                  <small>Years Experience</small>
                </div>
                <div className="about-rating-badge">
                  <div className="d-flex align-items-center">
                    <div className="about-rating-icon">
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div>
                      <h6 className="mb-0">4.9/5</h6>
                      <small className="text-muted">Customer Rating</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="service_title">OUR SERVICES</h2>
          <div className="service_underline"></div>
          <div className="row g-4">
            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/27748182/2024/2/21/f7c1aabb-1505-4630-bd25-53eb15a153711708492338173TwoPieceNavyTexturedFormalSuits-Waves1.jpg"
                  alt="Beige suit"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">SUIT</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://imagescdn.louisphilippe.com/img/app/product/8/896216-13787432.jpg?auto=format&w=390"
                  alt="Formal shirt"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">SHIRT</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://pantproject.com/cdn/shop/files/angled_view_with_a_close_fit_of_Pant_Project_raven_black_stretchable_trousers.jpg?v=1726637258"
                  alt="Navy pant"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">PANT</div>
                </div>
              </div>
            </div>

            {/* //// */}

            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://imagescdn.louisphilippe.com/img/app/product/3/39632887-13137512.jpg?auto=format&w=390"
                  alt="Blazer"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">Blazer</div>
                </div>
              </div>
            </div>


            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://kajols.com/cdn/shop/products/pink-engagement-jacquard-jodhpuri-suit-241202-1000x1375.jpg?v=1669636370"
                  alt="Jodhpuri suit"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">JODHPURI</div>
                </div>
              </div>
            </div>


            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://images.wholesalesalwar.com/2024y/September/52679/Sea%20Blue-Banarasi%20Silk-Wedding%20Wear-Digital%20Print-Radymade%20Modi%20Jacket%20Kurta%20Pajama-3249%20(4).jpg"
                  alt="Modi Jacket"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">MODI JACKET</div>
                </div>
              </div>
            </div>

            {/* /// */}

            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://img.faballey.com/images/Product/XMS00225Z/3.jpg"
                  alt="kurta"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">KURTA</div>
                </div>
              </div>
            </div>


            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://rajanyas.com/cdn/shop/files/1K2A1852_ef0e7781-3c02-4a10-b5a6-207936185ad8.jpg?v=1718718966&width=1946"
                  alt="Beige suit"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">PATHANI KURTA</div>
                </div>
              </div>
            </div>


            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://shreeman.in/cdn/shop/products/DSC3426.jpg?v=1650721591"
                  alt="Beige suit"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">SHERWANI</div>
                </div>
              </div>
            </div>

            {/* /// */}

            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://cdn.sareesaga.com/image/cache/data18/indo-western-sherwani-buttons-fancy-fabric-in-blue-215261-1000x1375.jpg"
                  alt="Indo Western Sherwani"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">INDOWESTERN</div>
                </div>
              </div>
            </div>


            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://sayyedalitailor.com/wp-content/uploads/2024/03/0a0a0944-1000x1000-1.jpg"
                  alt="Safaari"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">SAFARI</div>
                </div>
              </div>
            </div>


            <div className="col-md-4 mt-4 mb-4">
              <div className="service_card">
                <img
                  src="https://www.sainly.com/cdn/shop/files/men_selegantweddingsuit_3.jpg?v=1697781757"
                  alt="waistcoat"
                  className="service_image"
                />
                <div className="service_overlay">
                  <div className="service_marker"></div>
                  <div className="service_name">WAISTCOAT</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="py-4">
        <div className="container">
          <div className="mb-4">
            <h2 className="choose-title">Why Choose Us</h2>
            <div className="choose-underline"></div>
          </div>

          <div className="row g-4">
            <div className="col-md-4 ">
              <div className="choose-card p-4 h-100 text-center " data-aos="fade-right">
                <div className="choose-icon-wrapper mb-4">
                  <i className="fas fa-cut choose-icon"></i>
                </div>
                <h5 className="choose-card-title fw-semibold mb-3">Expert Tailoring</h5>
                <p className="choose-card-text text-muted text-muted">
                  Professional craftsmanship with attention to every detail, tailored to perfection.
                </p>
              </div>
            </div>

            <div className="col-md-4" >
              <div className="choose-card p-4 h-100 text-center" data-aos="flip-up">
                <div className="choose-icon-wrapper mb-4">
                  <i className="fas fa-stopwatch choose-icon"></i>
                </div>
                <h5 className="choose-card-title fw-semibold mb-3">Timely Delivery</h5>
                <p className="choose-card-text text-muted">
                  We value your time and guarantee prompt delivery for every order.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="choose-card p-4 h-100 text-center" data-aos="flip-left">
                <div className="choose-icon-wrapper mb-4">
                  <i className="fas fa-heart choose-icon"></i>
                </div>
                <h5 className="choose-card-title fw-semibold mb-3">Customer Satisfaction</h5>
                <p className="choose-card-text text-muted">
                  100% satisfaction with personalized service and perfect fitting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <div className="mb-4">
            <h2 className="benefit-title">WHAT YOU WILL GET</h2>
            <div className="benefit-underline"></div>
          </div>

          <div className="row g-4">
            <div className="col-md-3 col-12">
              <div className="benefit-item h-100"  data-aos="flip-down">
                <i class="fa-solid fa-ranking-star fs-4 me-3"></i>
                <span className="benefit-name">BEST QUALITY</span>
              </div>
            </div>

            <div className="col-md-3 col-12">
              <div className="benefit-item h-100"  data-aos="flip-down">
                <i class="fa-solid fa-vest fs-4 me-3"></i>
                <span className="benefit-name">BEST STYLE</span>
              </div>
            </div>

            <div className="col-md-3 col-12">
              <div className="benefit-item h-100"  data-aos="flip-down">
                <i class="fa-solid fa-shirt fs-4 me-3"></i>
                <span className="benefit-name">BEST FINISHING</span>
              </div>
            </div>

            <div className="col-md-3 col-12">
              <div className="benefit-item h-100"  data-aos="flip-down">
                <i class="fa-solid fa-wand-magic-sparkles fs-4 me-3"></i>
                <span className="benefit-name">BEST DESIGN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="container">
          <div className="mb-1">
            <h2 className="brand-title">FABRIC BRANDS WE USE</h2>
            <div className="brand-underline"></div>
          </div>
          <OurWorkSlider />
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <div className="testimonial-header mb-4">
            <h2 className="testimonial-title">Client Testimonials</h2>
            <div className="testimonial-underline"></div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card " data-aos="zoom-in">
                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p className="testimonial-text">"Great fitting and quality service! The attention to detail is remarkable."</p>
                <div className="client-info">
                  <h6 className="client-name">Ravi Kulkarni</h6>
                  <p className="client-detail">Regular Customer</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-card " data-aos="zoom-in">
                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p className="testimonial-text">"Timely delivery and perfect tailoring. Exceeded my expectations!"</p>
                <div className="client-info">
                  <h6 className="client-name">Amit Desai</h6>
                  <p className="client-detail">Business Professional</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-card " data-aos="zoom-in">
                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p className="testimonial-text">"Highly recommended for custom wear! Perfect fit every time."</p>
                <div className="client-info">
                  <h6 className="client-name">Nikhil Joshi</h6>
                  <p className="client-detail">Wedding Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />

    </>
  );
}

export default Home;
