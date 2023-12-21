import { Navbar, NavbarBrand } from 'reactstrap';
import FavoritesList from '../features/favorites/FavoritesList';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className='myshadow user-select-none' color='danger' sticky='top'>
      <Link className='text-light' to={'/'}>
        <NavbarBrand className='text-light'>
          {/* <img className='logo mx-2' src={Logo} /> */}
          <h1 className='d-inline'>CodeInspo</h1>
        </NavbarBrand>
      </Link>
      <FavoritesList />
    </Navbar>
  );
};

export default Header;
