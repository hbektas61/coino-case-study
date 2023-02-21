import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/images/logo.svg';
import CartIcon from '../../pages/cart/components/CartIcon';
import FavoritePageIcon from '../../pages/favorites/components/FavoritePageIcon';

const Header = () => (
  <header>
    <Link to='/' className='logo'>
      <img src={logo} height='40' alt='logo' />
    </Link>
    <div className='header-nav'>
      <Link to='/products/search'>
        <SearchIcon />
      </Link>
      <Link to='/cart'>
        <CartIcon />
      </Link>
      <Link to='/favorites'>
        <FavoritePageIcon />
      </Link>
    </div>
  </header>
);

export default Header;
