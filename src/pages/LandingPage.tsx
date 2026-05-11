import { Link } from 'react-router-dom';
import { SiFacebook } from 'react-icons/si';

const LandingPage = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Good for your gut, <br /> better for your soul.</h1>
            <p>Experience the art of slow-fermented perfection. Handcrafted sourdough, now freshly baked right here in Sungai Petani.</p>
            <Link to="/pricelist" className="btn">View Price List</Link>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)' }}>
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div className="profile-image-container" style={{ position: 'relative' }}>
              <img 
                src="/sticker.jpeg" 
                alt="Suhailawati Subri - Wild Flour Bakery" 
                style={{ borderRadius: '32px', width: '100%', height: 'auto', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', background: 'white' }}
              />
              <div className="followers-badge">
                <SiFacebook size={24} />
                <div className="badge-text">
                  <strong>5.1K</strong>
                  <span>Followers</span>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.5rem 1.2rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '700' }}>
                  Sourdough Homebaker
                </span>
                <span style={{ color: '#999', fontSize: '0.9rem' }}>Profile • Public figure</span>
              </div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Suhailawati Subri</h2>
              
              <div className="profile-details" style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '2rem', color: '#444', lineHeight: '1.8' }}>
                  🥖🍞 SOURDOUGH HOMEBAKER 🍞🥖
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#666' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                      <span style={{ fontSize: '1.2rem' }}>📍</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#999' }}>Location</div>
                      <div style={{ fontWeight: '700' }}>Sungai Petani, Kedah</div>
                    </div>
                  </div>

                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#666' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                      <span style={{ fontSize: '1.2rem' }}>📜</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#999' }}>No. Pendaftaran SSM</div>
                      <div style={{ fontWeight: '700' }}>003827649-A</div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/pricelist" className="btn" style={{ padding: '1rem 2.5rem' }}>View My Products</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
