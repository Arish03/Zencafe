import "./App.css";

function App() {
  const menuItems = [
    {
      name: "Cappuccino",
      price: "₹180",
      desc: "Rich espresso with velvety steamed milk",
    },
    {
      name: "Cold Brew",
      price: "₹220",
      desc: "Slow-steeped coffee served chilled",
    },
    {
      name: "Croissant",
      price: "₹140",
      desc: "Freshly baked buttery pastry",
    },
  ];

  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <h1 className="logo">ZenCafe</h1>

          <div className="nav-links">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <span className="tag">Premium Coffee Experience</span>

          <h2>
            Crafted Coffee,
            <br />
            Calm Moments.
          </h2>

          <p>
            Experience hand-crafted beverages, fresh pastries, and a peaceful
            atmosphere designed for coffee lovers.
          </p>

          <button>Explore Menu</button>
        </div>
      </header>

      <section id="menu" className="menu">
        <h2>Featured Menu</h2>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.name}</h3>
              <span>{item.price}</span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <h2>About ZenCafe</h2>

        <p>
          ZenCafe combines specialty coffee with a minimalist ambiance. Whether
          you're working, meeting friends, or enjoying a quiet break, our space
          is designed to help you slow down and enjoy the moment.
        </p>
      </section>

      <section id="contact" className="contact">
        <h2>Visit Us</h2>

        <p>📍 Salem, Tamil Nadu</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ hello@zencafe.com</p>
      </section>
    </div>
  );
}

export default App;