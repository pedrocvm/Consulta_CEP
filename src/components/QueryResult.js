import React from 'react';
import css from '../css.modules/query.module.css';
import GoogleMaps from './GoogleMaps';

export default function QueryResult({
  selectedCep,
  message,
  isANewSearch,
  visibility,
  onClose
}) {
  // const { logradouro, bairro, localidade, uf, cep } = selectedCep;

  const newSearch = () => {
    isANewSearch();
    visibility();
    onClose()
  };

  return (
    <div className={css.queryContainer}>
      {selectedCep && (
        <div className={css.addressContainer}>
          <div className={css.addressInfo}>
            <h5 className={css.logradouro}>{selectedCep.logradouro}</h5>
            <span className={css.address}>{selectedCep.bairro}</span>

            <span
              className={css.address}
            >{`${selectedCep.localidade}/${selectedCep.uf}`}</span>

            <span className={css.address}>{selectedCep.cep}</span>
          </div>
          <div>
            <GoogleMaps 
            logradouro={selectedCep.logradouro}
            bairro={selectedCep.bairro}
            cidade={selectedCep.localidade}
            uf={selectedCep.uf}
            cep={selectedCep.cep}
            />
          </div>
          <button className={`btn ${css.btnMsg}`} onClick={newSearch}>
            Nova Busca
          </button>
        </div>
      )}
      {!selectedCep && (
        <div className={css.messageContainer}>
          <h5 className={css.message}>{message}</h5>
          <button className={`btn ${css.btnMsg}`} onClick={newSearch}>
            Nova Busca
          </button>
        </div>
      )}
    </div>
  );
}
