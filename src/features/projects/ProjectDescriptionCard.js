import {
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
} from 'reactstrap';
import { useState } from 'react';

const ProjectDescriptionCard = ({ project }) => {
  const { title, description } = project;
  const [expanded, toggleExpanded] = useState(false);

  return (
    <Col className='mt-3' md='6'>
      <Card className='shadow'>
        <CardHeader className={`text-light bg-danger`}>
          <CardTitle color='danger' className='h4'>
            {title}
          </CardTitle>
        </CardHeader>
        <CardBody>
          <CardText
            style={{
              display: 'grid',
              gridTemplateRows: expanded ? '1fr' : '0fr',
              overflow: 'hidden',
              padding: '0',
              transition: 'max-height 500ms',
            }}
            className='mt-3'
          >
            {description.length < 400 || expanded
              ? description
              : description.slice(0, 400)}
          </CardText>
          {description.length >= 400 ? (
            <p
              className='text-primary cursor-pointer mx-auto'
              onClick={() => {
                toggleExpanded(!expanded);
              }}
            >
              {expanded ? 'Close' : 'Expand'}
            </p>
          ) : (
            <br />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectDescriptionCard;
