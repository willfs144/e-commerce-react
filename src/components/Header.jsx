import { useContext, useState } from 'react';
import '../styles/Header.scss';
import Menu from "../components/Menu";
import MyOrder from '../containers/MyOrder';
import icon_menu from "../assets/icons/icon_menu.svg";
import logo from "../assets/logos/logo_yard_sale.svg";
import icon_shopping_cart from "../assets/icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";


const Header = () => {
    
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setTogleOrders] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    } 
    
    return (
      <nav>
        <img src={icon_menu} alt="menu" className="menu" />
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" />
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Cafe</a>
            </li>
            <li>
              <a href="/">Pimentón</a>
            </li>
            <li>
              <a href="/">Semillero</a>
            </li>
            <li>
              <a href="/">Acerca de nostros</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              agrifilandia@outlook.com
            </li>
            <li className="navbar-shopping-cart"
              onClick={() => setTogleOrders(!toggleOrders)}>
              <img src={icon_shopping_cart} alt="shopping cart" />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder/>}
      </nav>
    );
}

export default Header;