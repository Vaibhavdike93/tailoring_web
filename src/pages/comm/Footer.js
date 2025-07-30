
function Footer()
{
  return (
    <footer className="footer">
      <div className="footer-main py-4">
        <div className="container">
          <div className="row g-4">
            {/* Brand Info */}
            <div className="col-lg-4 mb-lg-0">
              <div className="footer-brand">
                <img src="/footer_logo.png" className="footer-logo"/>
                <p className="footer-about">
                  Premium bespoke tailoring with impeccable craftsmanship since 2010. 
                  We create garments that fit perfectly and stand the test of time.
                </p>
                <div className="footer-contact">
                  <p><i className="fas fa-map-marker-alt me-2"></i> Chitale Rd, Nalegaon,</p>
                  <p><i className="fas fa-phone-alt me-2"></i> +91 70839 69199</p>
                  <p><i className="fas fa-envelope me-2"></i> D.chandrakant@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 col-lg-2 mb-md-0">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/"><i className="fas fa-chevron-right me-2"></i>Home</a></li>
                <li><a href="/about"><i className="fas fa-chevron-right me-2"></i>About Us</a></li>
                <li><a href="/services"><i className="fas fa-chevron-right me-2"></i>Services</a></li>
                <li><a href="/gallery"><i className="fas fa-chevron-right me-2"></i>Gallery</a></li>
                <li><a href="/gallery"><i className="fas fa-chevron-right me-2"></i>Appointment</a></li>
                <li><a href="/gallery"><i className="fas fa-chevron-right me-2"></i>Testimonials</a></li>
                <li><a href="/contact"><i className="fas fa-chevron-right me-2"></i>Contact us</a></li>
              </ul>
            </div>

            {/* What You Will Get */}
            <div className="col-md-4 col-lg-3">
              <h4 className="footer-heading">WHAT YOU WILL GET</h4>
              <ul className="footer-benefits">
                <li><i className="fas fa-check-circle me-2"></i> Best Quality</li>
                <li><i className="fas fa-check-circle me-2"></i> Best Style</li>
                <li><i className="fas fa-check-circle me-2"></i> Best Finishing</li>
                <li><i className="fas fa-check-circle me-2"></i> Best Design</li>
              </ul>
              <div className="footer-social mt-4">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>

                        {/* Google Map */}
            <div className="col-md-4 col-lg-3 mb-md-0">
              <h4 className="footer-heading">Our Location</h4>
              <div className="footer-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755837355258!2d72.8342143153774!3d19.05272225872683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df05cf75e1%3A0x6a6d02d642b3f4d1!2sTailor%20Studio!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="200" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Tailor's Studio Location"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} D.Chandrakant Fabric. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-legal-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/faq">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;