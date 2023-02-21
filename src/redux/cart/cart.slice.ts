import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ICartProducts, IFavoriteProducts } from './cart.types';

interface CartState {
  products: ICartProducts[];
  favorites: IFavoriteProducts[];
}

const initialState: CartState = {
  products: [],
  favorites: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartProduct: {
      reducer: (state: CartState, action: PayloadAction<ICartProducts>) => {
        const selectedProduct = state.products.find(product => product.id === action.payload.id);
        if (selectedProduct) {
          selectedProduct.quantity += 1;
          return;
        }

        state.products.push(action.payload);
      },
      prepare: (product: ICartProducts) => ({
        payload: product,
      }),
    },
    removeFromCartProduct: (state: CartState, action: PayloadAction<number>) => {
      const selectedProduct = state.products.find(product => product.id === action.payload);
      if (selectedProduct && selectedProduct.quantity > 1) {
        selectedProduct.quantity -= 1;
        return;
      }

      /* eslint-disable no-param-reassign */
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    addToFavoriteProduct: {
      reducer: (state: CartState, action: PayloadAction<IFavoriteProducts>) => {
        const selectedProduct = state.favorites.find(product => product.id === action.payload.id);

        if (selectedProduct) {
          state.favorites = state.favorites.filter(product => product.id !== action.payload.id);
        } else {
          state.favorites.push(action.payload);
        }
      },
      prepare: (product: IFavoriteProducts) => ({
        payload: product,
      }),
    },
    removeFromFavoriteProduct: (state: CartState, action: PayloadAction<number>) => {
      /* eslint-disable no-param-reassign */
      state.favorites = state.favorites.filter(product => product.id !== action.payload);
    },
    deleteCartItem: (state: CartState, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    clearCart: (state: CartState) => {
      state.products = [];
    },
  },
});

export const {
  addToCartProduct,
  removeFromCartProduct,
  deleteCartItem,
  clearCart,
  addToFavoriteProduct,
  removeFromFavoriteProduct,
} = cartSlice.actions;
export default cartSlice.reducer;

export const useCartProductsSelector = () =>
  useTypedSelector((state: RootState) => state.cart.products);
export const useFavoriteProductsSelector = () =>
  useTypedSelector((state: RootState) => state.cart.favorites);
