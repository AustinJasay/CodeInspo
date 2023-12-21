import { Card, CardBody, CardText, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFavorite } from './favoritesSlice';

const FavoriteCard = ({ project, close }) => {
  const dispatch = useDispatch();
  return (
    <Card className={'mt-3'}>
      <ModalHeader
        color='danger'
        className='bg-danger text-light'
        toggle={() => {
          console.log(project.id);
          dispatch(removeFavorite(project.id));
        }}
      >
        {project.difficulty === 1
          ? '🟢'
          : project.difficulty === 2
          ? '🟡'
          : '🔴'}{' '}
        <Link
          to={`/${project.id}`}
          className='text-white cursor-pointer'
          onClick={() => {
            close();
          }}
        >
          <span className='text-light text-decoration-none'>
            {project.title}
          </span>
        </Link>
      </ModalHeader>
      <CardBody>
        <CardText>{project.description.slice(0, 100)}...</CardText>
      </CardBody>
    </Card>
  );
};

export default FavoriteCard;
