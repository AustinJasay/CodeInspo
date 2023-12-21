import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Header from './components/Header';
import ProjectIdeaPage from './pages/ProjectIdeaPage';
import HomePage from './pages/HomePage';
import { Container } from 'reactstrap';

function App() {
  useEffect(() => {
    document.body.className = `bg-dark`;
  }, []);

  return (
    <>
      <div className='App'>
        <Header />
        <Container className='mb-3'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/:projectId' element={<ProjectIdeaPage />} />
          </Routes>
        </Container>
      </div>
    </>
  );
}

export default App;
