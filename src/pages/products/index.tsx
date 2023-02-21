import { Outlet } from 'react-router-dom';
import { useProductsSelector } from '../../redux/products/product.slice';
import ProductsList from './components/ProductsList';

const ProductsPage = () => {
  const products = useProductsSelector();

  return (
    <>
      <h1>Products</h1>
      <ProductsList products={products} />
      <Outlet />
    </>
  );
};

export default ProductsPage;
