import { useContext } from "react";
import icon_close from "../assets/icons/icon_close.png";
import "../styles/OrderItem.scss"
import AppContext from "../context/AppContext";

const OrderItem = ({ product }) => {
    
  const { removeFromCart } = useContext(AppContext);
  
  const hangleRemove = product => {
    removeFromCart(product);
  }

    return (
      <div className="OrderItem">
        <figure>
          <img src={product.images[0]} alt={product.title} />
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <img src={icon_close} alt="close" onClick={() => hangleRemove(product)}/>
      </div>
    );
}

export default OrderItem;