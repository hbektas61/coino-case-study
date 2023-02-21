import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetails from './pages/products/components/ProductIDetails';
import CartPage from './pages/cart';
import FavoritesPage from './pages/favorites';
import SearchPage from './pages/products/search';

import './App.css';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='products'>
        <Route index element={<ProductsPage />} />
        <Route path=':id' element={<ProductDetails />} />
        <Route path='search' element={<SearchPage />} />
      </Route>
      <Route path='cart' element={<CartPage />} />
      <Route path='favorites' element={<FavoritesPage />} />
    </Route>

    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);

export default App;
