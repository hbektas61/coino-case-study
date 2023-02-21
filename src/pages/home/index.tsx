import { Link } from 'react-router-dom';
import { useProductsSelector } from '../../redux/products/product.slice';
import ProductsList from '../products/components/ProductsList';

const HomePage = () => {
  const products = useProductsSelector();

  return (
    <div className='home-page'>
      <p>Hi, Guest</p>
      <h1>Welcome to React Store</h1>

      <div className='title'>
        <h2>Featured Products</h2>
        <Link to='/products'>See All</Link>
      </div>
      <ProductsList products={products.slice(0, 8)} />
    </div>
  );
};

export default HomePage;
