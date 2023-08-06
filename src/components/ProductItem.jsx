import { useContext } from "react";
import icon_add_cart from "../assets/icons/bt_add_to_cart.svg";
import "../styles/ProductItem.scss";
import AppContext from "../context/AppContext";

const ProductItem = ({ product }) => {

    //const [cart, setCart] = useState([]);
    const { addToCart } = useContext(AppContext);

    const handleClick = item => {
         
      addToCart(item);
    };
    
    return (
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title}/>
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={icon_add_cart} alt=""/>
                </figure>               
            </div>
        </div>
    );    
}

export default ProductItem;