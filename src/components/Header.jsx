import '../styles/Header.scss';

const Header = () => {
    return (
         <nav>
            <img src="./icons/icon_menu.svg" alt="menu" className="menu"/>
            <div className="navbar-left">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Cafe</a></li>
                    <li><a href="/">Pimentón</a></li>
                    <li><a href="/">Semillero</a></li>
                    <li><a href="/">Acerca de nostros</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">agrifilandia@outlook.com</li>
                    <li className="navbar-shopping-cart">
                        <img src="./icons/icon_shopping_cart.svg" alt="shopping cart"/>
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;