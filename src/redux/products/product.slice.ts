import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IProduct } from './product.types';

interface ProductState {
  products: IProduct[];
  product: IProduct | null;
}

const initialState: ProductState = {
  products: [],
  product: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state: ProductState, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload; // eslint-disable-line no-param-reassign
    },
    setProduct: (state: ProductState, action: PayloadAction<IProduct>) => {
      state.product = action.payload; // eslint-disable-line no-param-reassign
    },
  },
});

export const { setProducts, setProduct } = productSlice.actions;
export default productSlice.reducer;

export const useProductsSelector = () =>
  useTypedSelector((state: RootState) => state.product.products);
export const useProductByIdSelector = (id: number | string) =>
  useTypedSelector((state: RootState) => state.product.products.find(product => product.id === id));
