import React, { createContext, useContext, useState, useEffect } from 'react';
import { findAll } from '../services/casa.service';

const ImobiliariaContext = createContext();

export const useImobiliariaContext = () => {
  return useContext(ImobiliariaContext);
};

export function ImobiliariaProvider(props) {
  const [imoveis, setImoveis] = useState([0]);

  useEffect(() => {
    findAll().then((result) => {
      setImoveis(result.rows);
    });
  }, []);

  const getImoveis = () => {
    return imoveis;
  };

  return (
    <ImobiliariaContext.Provider value={{ getImoveis, addImovel, imoveis }}>
      {props.children}
    </ImobiliariaContext.Provider>
  );
}
