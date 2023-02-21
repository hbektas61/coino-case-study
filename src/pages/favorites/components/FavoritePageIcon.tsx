import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFavoriteProductsSelector } from '../../../redux/cart/cart.slice';

const FavoritePageIcon = () => {
  const favorites = useFavoriteProductsSelector();

  return (
    <span className='favorite-page-icon'>
      <FavoriteBorderIcon />
      <span className='favorite-products-count'>{favorites.length}</span>
    </span>
  );
};

export default FavoritePageIcon;
