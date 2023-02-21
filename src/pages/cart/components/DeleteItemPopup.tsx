import { FC } from 'react';
import { useFavoriteProductsSelector } from '../../../redux/cart/cart.slice';
import { ICartProduct } from '../../../redux/cart/cart.types';

interface IDeleteItemPopupProps {
  product: ICartProduct;
  deleteItem: () => void;
  deleteAndSetFavorite: () => void;
  onClosePopup: () => void;
}

const DeleteItemPopup: FC<IDeleteItemPopupProps> = ({
  product,
  deleteItem,
  deleteAndSetFavorite,
  onClosePopup,
}) => {
  const favorites = useFavoriteProductsSelector();
  const isFavorite = favorites.find(favoriteItem => favoriteItem.id === product.id);

  return (
    <>
      <div
        className='delete-item-overlay'
        onClick={onClosePopup}
        onKeyDown={onClosePopup}
        role='button'
        tabIndex={0}
      >{}
      </div>
      <div
        id={String(product.id)}
        className='delete-item-popup'
      >
        <div className='delete-item-container'>
          <div className='upper-element'>
            <div className='product-item'>
              <div className='product-pic'>
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className='product-title'>
                <div>{product.title}</div>
              </div>
              <div className='product-price'>{product.price}$</div>
            </div>
            <button
              type='button'
              className='close-button'
              onClick={onClosePopup}
            >X
            </button>
          </div>
          <div className='delete-item-sub-elements'>
            <button
              type='button'
              className='delete-item'
              onClick={() => deleteItem()}
              onKeyDown={deleteItem}
            >
              Ürünü sepetten çıkart
            </button>
            {isFavorite && (
            <button
              type='button'
              className='delete-and-set-favorite'
              onClick={deleteAndSetFavorite}
              onKeyDown={deleteAndSetFavorite}
            >
              Ürünü sepetten çıkart ve Favorilere Ekle
            </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteItemPopup;
