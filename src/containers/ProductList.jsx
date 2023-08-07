import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";
import useGetProducts from "../hooks/useGetProducts";

const API_PRODUCTS = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const products = useGetProducts(API_PRODUCTS);
    
    return (
      <section className="main-container">
        <div className="ProductList">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
}

export default ProductList;