import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useState } from 'react';
import { getFavorites } from './favoritesSlice';
import { useSelector } from 'react-redux';
import FavoriteCard from './FavoriteCard';

const FavoritesList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const projects = useSelector(getFavorites);

  return (
    <>
      <p className='h1 mx-2'>
        <i
          class='cursor-pointer text-white fa-solid fa-heart'
          onClick={() => setModalOpen(true)}
        ></i>
      </p>
      <Modal isOpen={modalOpen}>
        <ModalHeader
          className='bg-danger text-light'
          toggle={() => setModalOpen(false)}
        >
          Favorites
        </ModalHeader>
        <ModalBody>
          {projects.length > 0
            ? projects.map((project, index) => (
                <FavoriteCard
                  close={() => setModalOpen(false)}
                  project={projects[index]}
                ></FavoriteCard>
              ))
            : 'You have no favorites'}
        </ModalBody>
      </Modal>
    </>
  );
};

export default FavoritesList;
