/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import * as api from './API/apiService.js';
import css from './css.modules/app.module.css';
import Form from './components/Form';
import Header from './components/Header';
import M from 'materialize-css';
import QueryResult from './components/QueryResult';

export default function App() {
  const [selectedCep, setSelectedCep] = useState(null);
  const [message, setMessage] = useState('');
  const [newSearch, setNewSearch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enable, setEnable] = useState(false);

  const getMyCep = async (data) => {
    const cep = await api.getCep(data);
    if (!cep.erro) {
      setSelectedCep(cep);
      setMessage('');
      setIsVisible(true);
    } else {
      setSelectedCep(false);
      setIsVisible(true);
      setMessage('CEP não encontrado');
    }
  };

  const disableSearchButton = () => {
    setEnable(!enable);
  };


  const handleNewSearch = () => {
    setNewSearch(true);
    setIsVisible(false);
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <Header />
      <section className={`row ${css.appContainer}`}>
        <div className="col xl4 l4 m12 s12">
          <Form
            getCep={getMyCep}
            newSearch={newSearch}
            enableBtn={enable}
            visibility={disableSearchButton}
          />
        </div>
        <div className={`col xl8 l8 m12 s12 ${css.queryContainer}`}>
          {isVisible && (
            <QueryResult
              selectedCep={selectedCep}
              message={message}
              isANewSearch={handleNewSearch}
              visibility={disableSearchButton}
            />
          )}
        </div>
      </section>
    </div>
  );
}
