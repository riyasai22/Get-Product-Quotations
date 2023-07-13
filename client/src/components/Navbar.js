import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle =
    scrollPosition >= 250
      ? {
          background: "linear-gradient(90deg, #092225 0%, #196975 0%)",
          boxShadow: "4px 4px 8px rgb(0, 0, 0, 0.5)",
        }
      : {
          background: "rgba(0,0,0,.2)",
          boxShadow: "0px 0px 0px rgb(0, 0, 0, 0.2)",
        };

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="nav_container">
        <div className="logo">
          <div className="logo-img">
            <a href="/">
              <img src="logo.png" alt="logo" />
            </a>
          </div>
          <h1 className="logo-head">
            <a href="/">BIODIMENSION</a>
          </h1>
        </div>
        <div className="toggleBtn" id="toggler">
          <i className="fas fa-bars"></i>
        </div>
        <div className="nav-items">
          <ul className="nav-ul">
            <li>
              <a className="hover-underline-animation" href="/">
                HOME
              </a>
            </li>
            <li className="hover-underline-animation">
              <a href="/about">ABOUT</a>
            </li>
            <li className="hover-underline-animation products">
              <a href="/product">PRODUCTS</a>
              <div className="product-list-small">
                {/* <a href="/products/bioDcornea" class="product-list-item">
                  BioDcornea
                </a>
                <a href="/products/bioDskin" class="product-list-item">
                  BioDskin
                </a>
                <a href="/products/bioDvaginal" className="product-list-item">
                  BioDvaginal
                </a> */}
              </div>
            </li>
            <li className="hover-underline-animation">
              <a href="/join">JOIN US</a>
            </li>
            <li className="hover-underline-animation">
              <a href="/blogs">BLOGS</a>
            </li>
            <li className="hover-underline-animation">
              <a href="/contact">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
