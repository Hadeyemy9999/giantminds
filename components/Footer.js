export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col logo-info">
            <h4 className="logo">GIANT MINDS</h4>
            <p>
              Building a system that works. Fueling your next breakthrough hire.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/#hero">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#network">Our Network</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-col social-links">
            <h4>Connect</h4>
            <a href="https://www.instagram.com/7giantminds/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://x.com/7GiantMinds" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="mailto:giantminds3@gmail.com"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} GIANT MINDS. All rights reserved.</p>
      </div>
    </footer>
  );
}
