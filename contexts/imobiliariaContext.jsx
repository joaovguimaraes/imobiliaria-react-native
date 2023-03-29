import React, { createContext, useContext, useState, useEffect } from 'react';
import data from '../data';

const ImobiliariaContext = createContext();

export const useImobiliariaContext = () => {
  return useContext(ImobiliariaContext);
};

export function ImobiliariaProvider(props) {
  const [imoveis, setImoveis] = useState([0]);

  useEffect(() => {
    setImoveis(data);
  }, []);

  const addImovel = (imovel) => {
    setImoveis([...imoveis, imovel]);
    return imoveis[arry.length - 1];
  };

  const getImoveis = () => {
    return imoveis;
  };

  return (
    <ImobiliariaContext.Provider value={{ getImoveis, addImovel, imoveis }}>
      {props.children}
    </ImobiliariaContext.Provider>
  );
}
