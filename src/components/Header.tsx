import { Link, useLocation } from 'react-router-dom';
import { BiStore, BiCartAlt } from 'react-icons/bi';
import { useCart } from '../context/CartContext';

const Header = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <BiStore size={32} color="var(--primary)" style={{ marginRight: '10px' }} />
            Ciksu sourdough bakery
          </Link>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/pricelist" 
                className={location.pathname === '/pricelist' ? 'active' : ''}
              >
                Price List
              </Link>
            </li>
            <li className="cart-container">
              <button className="cart-btn" onClick={() => window.dispatchEvent(new CustomEvent('open-cart'))} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--primary)', color: 'white', padding: '8px 16px', borderRadius: '50px' }}>
                <BiCartAlt size={22} />
                <span style={{ fontWeight: '600' }}>Cart</span>
                {totalItems > 0 && <span className="cart-badge-header" style={{ background: 'white', color: 'var(--primary)', padding: '2px 8px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: '800' }}>{totalItems}</span>}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
