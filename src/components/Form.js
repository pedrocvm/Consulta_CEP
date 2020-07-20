import React, { useState, useEffect } from 'react';
import { mask } from 'remask';
import { labelUp, labelDown } from '../helpers/helper.js';
import css from '../css.modules/form.module.css';

export default function Form({getCep, newSearch, enableBtn, visibility, onOpen}) {
  const [value, setvalue] = useState('');
  
  
  
  useEffect(() => {
    const handleNewSearch = () => {
      if(newSearch){
        document.querySelector('#nr_cep').value = '';
        document.querySelector('#nr_cep').focus();
      }
    }
    handleNewSearch();
  }, [newSearch]);

  const masking = (event) => {
    setvalue(mask(event.target.value, ['99999-999']));
  };

  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(value){
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      const cep = data.nr_cep.replace('-', '');
      if(cep.length === 8){
        getCep(cep)
        visibility()
        onOpen()
      }
    }
    else{
      document.querySelector('#nr_cep').focus();
    }
  }

  return (
    <div className={`center ${css.formContainer}`}>
      <h5 className={css.formTitle}>Consulte seu CEP</h5>
      <span className={css.formDescription}>
        Digite abaixo para consultar um Código de Endereçamento Postal - CEP do
        Brasil
      </span>
      <form onSubmit={handleFormSubmit}>
        <div className="input-field">
          <input
            required={true}
            id="nr_cep"
            type="text"
            name='nr_cep'
            value={value}
            onChange={masking}
            onFocus={labelUp}
            onBlur={labelDown}
            disabled={enableBtn}
          />
          <label htmlFor="nr_cep" className={css.labelCep}>
            CEP
          </label>
        </div>
        <button className={`btn ${css.btn}`} disabled={enableBtn}>
          Buscar
        </button>
      </form>
    </div>
  );
}
