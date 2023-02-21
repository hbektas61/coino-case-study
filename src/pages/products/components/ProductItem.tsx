import { FC } from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IProduct } from '../../../redux/products/product.types';
import AddToCartBtn from '../../cart/components/AddToCartBtn';
import AddToFavoriteBtn from '../../cart/components/AddToFavoriteBtn';
import { useFavoriteProductsSelector } from '../../../redux/cart/cart.slice';

const ProductItem: FC<IProduct> = ({ id, title, price, rating, thumbnail }) => {
  const favorites = useFavoriteProductsSelector();
  const isFavorite = favorites.find(product => product.id === id);

  return (
    <div className='product-item'>
      <div className='product-pic'>
        <Link to={`/products/${String(id)}`}>
          <img src={thumbnail} alt={title} />
        </Link>
      </div>
      <div className='product-title'>
        <Link to={`/products/${String(id)}`}>{title}</Link>
      </div>
      <div className='product-price'>{price}$</div>
      <div className='product-info'>
        <div className='product-rating'>
          <StarIcon />
          {rating}
        </div>
        <AddToCartBtn id={id}><ShoppingBasketIcon /></AddToCartBtn>
        <AddToFavoriteBtn id={id}>{isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </AddToFavoriteBtn>
      </div>
    </div>
  );
};

export default ProductItem;
