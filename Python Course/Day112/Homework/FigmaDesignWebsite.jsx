import React from "react";
import "./App.css";

function App() {
    return (
      <div className="container">
        <header className="header">
          <div className="logo">
            <span className="s-symbol">S</span> E GURU
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#" className="sign-up">Sign Up</a></li>
            </ul>
          </nav>
        </header>
        <main className="hero">
          <div className="hero-content">
            <h1>STUDY FROM HOME WITH EXPERT</h1>
            <p>A learning system based on formalised teaching with the help of resources.</p>
            <button className="get-started">Get Started</button>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="hero-image">
            <div className="oval-shape"></div>
            <div className="oval-shape"></div>
            <img src="" alt="Person pointing upwards" />
          </div>
        </main>
        <section className="best-section">
          <h2>WHY WE ARE THE BEST</h2>
          <p>a learning system based on formalised teaching with help of...</p>
          <div className="features">
            <div className="feature">
              <img src="" alt="House icon" />
              <h3>EXPERT TEACHER</h3>
              <p>a learning system based on formalised teaching</p>
            </div>
            <div className="feature">
              <img src="" alt="Lightbulb icon" />
              <h3>ONLINE COURSES</h3>
              <p>a learning system based on formalised teaching</p>
            </div>
            <div className="feature">
              <img src="" alt="Book icon" />
              <h3>24/7 SUPPORT</h3>
              <p>a learning system based on formalised teaching</p>
            </div>
          </div>
        </section>
        <footer className="footer">
          <p>© 2023 E Guru. All rights reserved.</p>
        </footer>
      </div>
    )
}

export default App;