import { FC, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ICartProducts } from '../../../redux/cart/cart.types';
import useActions from '../../../redux/hooks/useActions';
import AddToCartBtn from './AddToCartBtn';
import DeleteItemPopup from './DeleteItemPopup';
import RemoveFromCartBtn from './RemoveFromCartBtn';

const CartItem: FC<ICartProducts> = ({ product: { price, thumbnail, title }, quantity, id }) => {
  const { addToFavoriteProduct, deleteCartItem } = useActions();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className='cart-item'>
      {isPopupOpen && (
      <DeleteItemPopup
        product={{ id, price, thumbnail, title }}
        deleteItem={() => deleteCartItem(id)}
        deleteAndSetFavorite={() => {
          deleteCartItem(id);
          addToFavoriteProduct({ id, product: { id, title, thumbnail, price } });
        }}
        onClosePopup={() => setIsPopupOpen(false)}
      />
      )}
      <div className='cart-item__pic'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='cart-item__info'>
        <div className='cart-item__title'>{title}</div>
        <div className='cart-item__price'>{price}$</div>
        <div className='cart-item__controls'>
          <div className='cart-item__count'>
            <RemoveFromCartBtn id={id}>-</RemoveFromCartBtn>
            <span>{quantity}</span>
            <AddToCartBtn id={id}>+</AddToCartBtn>
          </div>
          <div
            className='cart-item__delete'
            onClick={() => setIsPopupOpen(true)}
            onKeyDown={() => setIsPopupOpen(true)}
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

export default CartItem;
