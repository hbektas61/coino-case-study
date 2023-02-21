import { FC } from 'react';
import useActions from '../../../redux/hooks/useActions';
import { useProductByIdSelector } from '../../../redux/products/product.slice';

interface IFavoriteBtnProps {
  id: number;
  children?: React.ReactNode;
}

const AddToFavoriteBtn: FC<IFavoriteBtnProps> = ({ id, children }) => {
  const { addToFavoriteProduct } = useActions();

  const product = useProductByIdSelector(id);
  const { title, price, thumbnail } = product!;

  const addToFavoriteHandler = (productId: number) => {
    const favoriteProduct = {
      id: productId,
      quantity: 1,
      product: {
        id: productId,
        title,
        price,
        thumbnail,
      },
    };

    addToFavoriteProduct(favoriteProduct);
  };

  return (
    <button
      className='add-to-favorite-btn'
      type='button'
      data-product-id={id}
      onClick={() => addToFavoriteHandler(id)}
    >
      {children}
    </button>
  );
};

export default AddToFavoriteBtn;
