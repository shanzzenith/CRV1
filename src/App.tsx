import React from 'react'

function App() {
  return (
    <>
      {/* Demo Banner */}
      <div className="demo-banner">
        <span>🚧 DEMO MODE: This is a prototype for demonstration purposes only.</span>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <i className="fas fa-city"></i>
            <span>CityRewards.app</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#map" className="nav-link">Map</a></li>
            <li><a href="#discover" className="nav-link">Discover</a></li>
            <li><a href="#rewards" className="nav-link">Rewards</a></li>
            <li><a href="#impact" className="nav-link">Impact</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
          </ul>
          <div className="nav-actions">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="highlight">Your Actions.</span><br />
              <span className="highlight">Our Value.</span><br />
              <span className="accent">A Better City.</span>
            </h1>
            <p className="hero-subtitle">
              Turn everyday actions into collective value. Join thousands of citizens building a sustainable,
              regenerative local economy.
            </p>
            <div className="hero-actions">
              <button className="btn-primary btn-large">Start Contributing</button>
              <button className="btn-outline btn-large">Watch Demo</button>
            </div>
          </div>
          <div className="hero-dashboard">
            <div className="dashboard-card">
              <h3>My Rewards</h3>
              <div className="reward-stats">
                <div className="stat">
                  <span className="stat-value">1,250</span>
                  <span className="stat-label">Action Points</span>
                </div>
                <div className="stat">
                  <span className="stat-value">45</span>
                  <span className="stat-label">CR - City Rewards</span>
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <h3>My Impact</h3>
              <div className="impact-stats">
                <div className="impact-item">
                  <i className="fas fa-tree"></i>
                  <span>12 Trees Planted</span>
                </div>
                <div className="impact-item">
                  <i className="fas fa-recycle"></i>
                  <span>85kg Recycled</span>
                </div>
                <div className="impact-item">
                  <i className="fas fa-mug-hot"></i>
                  <span>2,034 Cups Saved from Landfill</span>
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <h3>Suggested Actions</h3>
              <div className="action-suggestions">
                <div className="suggestion">
                  <i className="fas fa-seedling"></i>
                  <span>Plant a tree in Central Park</span>
                  <span className="reward">+50 AP</span>
                </div>
                <div className="suggestion">
                  <i className="fas fa-coffee"></i>
                  <span>Use reusable cup at The Green Bean</span>
                  <span className="reward">+15 AP</span>
                </div>
                <div className="suggestion">
                  <i className="fas fa-bicycle"></i>
                  <span>Bike to work today</span>
                  <span className="reward">+30 AP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="map" className="map-section">
        <div className="section-container">
          <h2 className="section-title">Explore Your City</h2>
          <p className="section-subtitle">
            Discover local businesses and community initiatives where your actions create value
          </p>
          <div className="map-container">
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <p>Interactive map coming soon</p>
              <p className="map-hint">Find participating merchants, community gardens, recycling centers, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Citizens vs Merchants Section */}
      <section id="discover" className="audience-section">
        <div className="section-container">
          <h2 className="section-title">Choose Your Path</h2>
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>For Citizens</h3>
              <p>Turn everyday sustainable actions into rewards. Shop local, reduce waste, and build a better community while earning benefits.</p>
              <ul className="audience-benefits">
                <li><i className="fas fa-check"></i> Earn rewards for sustainable actions</li>
                <li><i className="fas fa-check"></i> Support local businesses</li>
                <li><i className="fas fa-check"></i> Track your environmental impact</li>
                <li><i className="fas fa-check"></i> Connect with your community</li>
              </ul>
              <button className="btn-primary">Join as a Citizen</button>
            </div>
            <div className="audience-card">
              <div className="audience-icon">
                <i className="fas fa-store"></i>
              </div>
              <h3>For Merchants</h3>
              <p>Attract engaged customers who value sustainability. Build loyalty, increase foot traffic, and strengthen your community ties.</p>
              <ul className="audience-benefits">
                <li><i className="fas fa-check"></i> Attract conscious consumers</li>
                <li><i className="fas fa-check"></i> Build customer loyalty</li>
                <li><i className="fas fa-check"></i> Showcase your values</li>
                <li><i className="fas fa-check"></i> Grow your local network</li>
              </ul>
              <button className="btn-primary">Join as a Merchant</button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="rewards" className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <i className="fas fa-user-plus"></i>
              </div>
              <h3>Join the Movement</h3>
              <p>Sign up as a citizen or merchant and become part of the CityRewards community</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <h3>Take Action</h3>
              <p>Complete sustainable actions, shop at participating merchants, reduce waste, and contribute to your community</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h3>Earn Rewards</h3>
              <p>Collect Action Points (AP) and convert them to City Rewards (CR) for discounts and perks</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Build Community</h3>
              <p>Watch your collective impact grow as more people join and contribute to a regenerative local economy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="impact-section">
        <div className="section-container">
          <h2 className="section-title">Our Collective Impact</h2>
          <p className="section-subtitle">Together, we're building a more sustainable future</p>
          <div className="impact-grid">
            <div className="impact-card">
              <i className="fas fa-users"></i>
              <div className="impact-number">2,847</div>
              <div className="impact-label">Active Citizens</div>
            </div>
            <div className="impact-card">
              <i className="fas fa-store"></i>
              <div className="impact-number">156</div>
              <div className="impact-label">Partner Merchants</div>
            </div>
            <div className="impact-card">
              <i className="fas fa-leaf"></i>
              <div className="impact-number">45,230</div>
              <div className="impact-label">Sustainable Actions</div>
            </div>
            <div className="impact-card">
              <i className="fas fa-recycle"></i>
              <div className="impact-number">12.4T</div>
              <div className="impact-label">Waste Diverted</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About CityRewards.app</h2>
          <div className="about-content">
            <p>
              CityRewards.app is a community-driven platform that transforms sustainable actions into tangible value.
              We believe that everyday choices matter, and when communities come together around shared values,
              they can create meaningful change.
            </p>
            <p>
              Our platform connects citizens and merchants in a regenerative local economy where sustainable
              behaviors are recognized and rewarded. From using reusable cups to shopping locally, from planting
              trees to reducing waste - every action counts.
            </p>
            <div className="about-values">
              <div className="value-card">
                <i className="fas fa-leaf"></i>
                <h3>Sustainability</h3>
                <p>Building a regenerative economy that benefits both people and planet</p>
              </div>
              <div className="value-card">
                <i className="fas fa-hands-helping"></i>
                <h3>Community</h3>
                <p>Strengthening local connections and collective action</p>
              </div>
              <div className="value-card">
                <i className="fas fa-balance-scale"></i>
                <h3>Transparency</h3>
                <p>Open, fair, and accountable to all participants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-city"></i>
              <span>CityRewards.app</span>
            </div>
            <p>Building sustainable communities, one action at a time.</p>
          </div>
          <div className="footer-section">
            <h4>Platform</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#map">Map</a></li>
              <li><a href="#discover">Discover</a></li>
              <li><a href="#rewards">Rewards</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#partners">Partners</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 CityRewards.app. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
