/* eslint-disable */
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import QueryResult from './QueryResult';

Modal.setAppElement('#root');

export default function CepModal({
  onClose,
  selectedCep,
  message,
  isANewSearch,
  visibility,
}) {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleClose = () => {
    isANewSearch();
    visibility();
    onClose()
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      <Modal isOpen={true} style={customStyles}>
        <button onClick={handleClose} style={customStyles.btnClose}>
          <i className="material-icons">close</i>
        </button>
        <QueryResult
          selectedCep={selectedCep}
          message={message}
          isANewSearch={isANewSearch}
          visibility={visibility}
          onClose={onClose}
        />
      </Modal>
    </div>
  );
}

const customStyles = {
  content: {
    width: '80%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },

  btnClose: {
    float: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '-20px',
    marginTop: '-10px',
    alignItems: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    color: 'black',
    cursor: 'pointer',
  }
};
