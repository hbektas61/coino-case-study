import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productSlice } from '../products/product.slice';
import { cartSlice } from '../cart/cart.slice';

const AllActions = {
  ...productSlice.actions,
  ...cartSlice.actions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;
