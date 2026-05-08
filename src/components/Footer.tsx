import { SiFacebook, SiTiktok } from 'react-icons/si';
import { BiStore } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <BiStore size={36} color="var(--primary)" style={{ marginRight: '15px' }} />
          Ciksu sourdough bakery
        </div>
        
        <div className="social-links">
          <a href="https://facebook.com/SuhailawatiSubri" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook: Suhailawati subri">
            <SiFacebook size={20} />
            <span>Suhailawati subri</span>
          </a>
          <a href="https://tiktok.com/@suhailawatisubri" target="_blank" rel="noopener noreferrer" className="social-link" title="TikTok: suhailawatisubri">
            <SiTiktok size={20} />
            <span>suhailawatisubri</span>
          </a>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Pasraisydollah. All rights reserved. <br />
          Powered by Wesitex
        </p>
      </div>
    </footer>
  );
};

export default Footer;
