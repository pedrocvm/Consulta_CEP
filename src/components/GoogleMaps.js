/*eslint-disable*/
import React from 'react';
import css from '../css.modules/googleMaps.css';
import { removeSpecial } from '../helpers/helper.js';

export default function GoogleMaps({ logradouro, bairro, cidade, uf }) {
  const address = removeSpecial(encodeURI(`${logradouro}, ${bairro}, ${cidade}/${uf}`))
  console.log(address);

  return (
    <div className={css.mapsContainer}>
      <iframe
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://maps.google.com/maps?q=${address}&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"&output=embed`}
      ></iframe>
    </div>
  );
}
