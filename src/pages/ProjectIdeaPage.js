import { Col, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProjectById } from '../features/projects/projectSlice';
import ProjectDescriptionCard from '../features/projects/ProjectDescriptionCard';
import ProjectDetailsCard from '../features/projects/ProjectDetailsCard.js';

const ProjectIdeaPage = () => {
  const { projectId } = useParams();
  const project = useSelector(getProjectById(Number(projectId)));
  const { title, description } = project;

  return (
    <div>
      <Col>
        <Row className='justify-content-center'>
          <ProjectDescriptionCard project={{ title, description }} />
          <ProjectDetailsCard project={project} />
        </Row>
      </Col>
    </div>
  );
};

export default ProjectIdeaPage;
