import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProjectIds } from '../features/projects/projectSlice';

const HomePage = () => {
  const ids = useSelector(getProjectIds);
  const nextId = Math.floor(Math.random() * ids.length);
  return (
    <>
      <h2 className='text-white h1 mt-5'>Welcome</h2>
      <Link to={`/${nextId}`} className='h2 text-white'>
        Get ideas!
      </Link>
      <p className='text-white mt-3'>
        Most of the content of the app is currently filler. This will be updated
        and new features will be rolled out in the near future. Happy Holidays!
      </p>
    </>
  );
};

export default HomePage;
