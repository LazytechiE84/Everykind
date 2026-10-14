import { Link } from "react-router-dom";
import logo from "../assets/pictures/everykind_logo.png";

function Header() {
  return (
    <header>
      <nav>
        <span id="logo">
          <img src={logo} alt="Everykind logo" />
        </span>
        <ul>
          <li><Link to="/products">Shop</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className="icons">
          <li><a href="#"><i className="fa-regular fa-heart"></i></a></li>
          <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;