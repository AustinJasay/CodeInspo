import { useSelector, useDispatch } from 'react-redux';
import {
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { getProjectIds } from './projectSlice';
import { addFavorite } from '../favorites/favoritesSlice';

const ProjectDetailsCard = ({ project }) => {
  const { id, optional, difficulty } = project;
  const dispatch = useDispatch();
  const ids = useSelector(getProjectIds);
  const usableIds = [...ids].filter((item) => item !== id);
  const nextId = usableIds[Math.floor(Math.random() * usableIds.length)];

  return (
    <Col className='mt-3' md='5' lg='4'>
      <Card className='shadow'>
        <CardHeader className={`text-light bg-danger`}>
          <CardTitle className='h4'>Details</CardTitle>
        </CardHeader>
        <CardBody>
          <Button
            color='danger'
            className={`mt-1`}
            onClick={() => {
              dispatch(addFavorite(project));
            }}
          >
            <i class='text-white fa-regular fa-heart' />
          </Button>{' '}
          <Link to={`/${nextId}`}>
            <Button color='danger' className={`mt-1`}>
              <i class='fa-solid fa-rotate-right'></i>
            </Button>
          </Link>
          <CardText className='mt-3'>
            <dl>
              <dt>Difficulty: </dt>
              <dd className='mt-2'>
                {difficulty === 1 ? '🟢' : difficulty === 2 ? '🟡' : '🔴'}
              </dd>
              <dt>Optional Features:</dt>
              <dd>
                <ul className='list-unstyled'>
                  {optional.map((item, i) => (
                    <div key={i}>
                      <hr />
                      <li className='mt-2'>{item}</li>
                    </div>
                  ))}
                </ul>
                <hr />
              </dd>
            </dl>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectDetailsCard;
