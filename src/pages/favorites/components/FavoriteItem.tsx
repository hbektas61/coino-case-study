import { FC } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IFavoriteProducts } from '../../../redux/cart/cart.types';
import useActions from '../../../redux/hooks/useActions';
import AddToCartBtn from '../../cart/components/AddToCartBtn';
import RemoveFromCartBtn from '../../cart/components/RemoveFromCartBtn';

const FavoriteItem: FC<IFavoriteProducts> = ({ product: { price, thumbnail, title }, id }) => {
  const { removeFromFavoriteProduct } = useActions();

  return (
    <div className='favorite-item'>
      <div className='favorite-item__pic'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='favorite-item__info'>
        <div className='favorite-item__title'>{title}</div>
        <div className='favorite-item__price'>{price}$</div>
        <div className='favorite-item__controls'>
          <div className='favorite-item__count'>
            <RemoveFromCartBtn id={id}>-</RemoveFromCartBtn>
            <AddToCartBtn id={id}>+</AddToCartBtn>
          </div>
          <div
            className='favorite-item__delete'
            onClick={() => removeFromFavoriteProduct(id)}
            onKeyDown={() => removeFromFavoriteProduct(id)}
            role='button'
            tabIndex={0}
          >
            <DeleteOutlineIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
