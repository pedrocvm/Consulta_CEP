/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import * as api from './API/apiService.js';
import css from './css.modules/app.module.css';
import Form from './components/Form';
import Header from './components/Header';
import M from 'materialize-css';
import CepModal from './components/CepModal.js';

export default function App() {
  const [selectedCep, setSelectedCep] = useState(null);
  const [message, setMessage] = useState('');
  const [newSearch, setNewSearch] = useState(false);

  const [enable, setEnable] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getMyCep = async (data) => {
    const cep = await api.getCep(data);
    if (!cep.erro) {
      setSelectedCep(cep);
      setMessage('');
    } else {
      setSelectedCep(false);

      setMessage('CEP não encontrado');
    }
  };

  const disableSearchButton = () => {
    setEnable(!enable);
  };

  const handleNewSearch = () => {
    setNewSearch(true);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <Header isOpen={isModalOpen} />
      <section className="row">
        <div className={`col xl4 l4 m12 s12 ${css.formContainer}`}>
          <Form
            getCep={getMyCep}
            newSearch={newSearch}
            enableBtn={enable}
            visibility={disableSearchButton}
            onOpen={handleOpen}
          />
        </div>
        <div className={`col xl8 l8 m12 s12 ${css.queryContainer}`}></div>
        {isModalOpen && (
          <CepModal
            onClose={handleClose}
            selectedCep={selectedCep}
            message={message}
            isANewSearch={handleNewSearch}
            visibility={disableSearchButton}
          />
        )}
      </section>
    </div>
  );
}
