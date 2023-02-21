import FavoriteItem from './components/FavoriteItem';
import { useFavoriteProductsSelector } from '../../redux/cart/cart.slice';

import './favorites.css';

const FavoritesPage = () => {
  const products = useFavoriteProductsSelector();

  return (
    <div className='favorites-page'>
      <h1>Favorite Products List</h1>
      <div className='favorites-list'>
        {products.map(favoriteProduct => (
          <FavoriteItem key={favoriteProduct.id} {...favoriteProduct} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
