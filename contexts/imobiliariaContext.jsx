import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("prova.db");

const ImobiliariaContext = createContext();

export const useImobiliariaContext = () => {
  return useContext(ImobiliariaContext);
};

export function ImobiliariaProvider(props) {
  const [imoveis, setImoveis] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    db.transaction(tx =>{
      tx.executeSql('CREATE TABLE IF NOT EXISTS imoveis (id INTEGER PRIMARY KEY AUTOINCREMENT, address VARCHAR(200),type VARCHAR(200), price INTEGER, condominiumPrice INTEGER DEFAULT 0 NOT NULL, rooms INTEGER, bathrooms INTEGER, image VARCHAR(200), occupied INTEGER)');
    })

    db.transaction(tx =>{
      tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(200), cpf VARCHAR(200), birthDate TEXT, income REAL DEFAULT 0 NOT NULL, rentPaymentDate INTEGER, contractStartDate TEXT, contractEndDate TEXT, imovel INTEGER, FOREIGN KEY(imovel) REFERENCES imoveis(imovelid))');
    })

    db.transaction(tx =>{
      tx.executeSql('SELECT * FROM imoveis', null,
      (txObj, resultSet)=> {
        let rowsArray = resultSet.rows;
        let ExistingImoveis = rowsArray ? [...rowsArray] : [];
        setImoveis(ExistingImoveis)
      },
      (txObj, error)=> console.log(error)
      );
    })

    db.transaction(tx =>{
      tx.executeSql('SELECT * FROM usuarios', null,
      (txObj, resultSet)=> {
        let rowsArray = resultSet.rows;
        let ExistingUsuarios = rowsArray ? [...rowsArray] : [];
        setUsuarios(ExistingUsuarios)
        
      },
      (txObj, error)=> console.log(error)
      );
    })
    
  }, []);

  useEffect(() => {
    db.transaction(tx =>{
      tx.executeSql('SELECT * FROM imoveis', null,
      (txObj, resultSet)=> {
        let rowsArray = resultSet.rows;
        let ExistingImoveis = rowsArray ? [...rowsArray] : [];
        setImoveis(ExistingImoveis)
      },
      (txObj, error)=> console.log(error)
      );
    })
  }, [usuarios]);

  const addImovel = (imovel) => {
    db.transaction(tx =>{
      tx.executeSql("INSERT INTO imoveis (address, type, price, condominiumPrice, rooms, bathrooms, image, occupied) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
      [imovel.address, imovel.type, imovel.price, imovel.condominiumPrice, imovel.rooms, imovel.bathrooms, imovel.image, imovel.occupied],
      (txObj, resultSet) => {
        let ExistingImoveis = [...imoveis];
        ExistingImoveis.push({ id: resultSet.insertId, ...imovel });
        setImoveis(ExistingImoveis);
      },
      (txObj, error) => console.log(error)
    );
    })
    return imoveis[imoveis.length - 1];
  };

  const addUsuario = (usuario, id) => {
    db.transaction(tx =>{
      tx.executeSql("INSERT INTO usuarios (name, cpf, birthDate, income, rentPaymentDate, contractStartDate, contractEndDate, imovel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
      [usuario.name, usuario.cpf, usuario.birthDate, usuario.income, usuario.rentPaymentDate, usuario.contractStartDate, usuario.contractEndDate, id],
      (txObj, resultSet) => {
        let ExistingUsuarios = [...usuarios];
        ExistingUsuarios.push({ id: resultSet.insertId, ...usuario });
        setUsuarios(ExistingUsuarios);
      },
      (txObj, error) => console.log(error)
    );
    tx.executeSql("UPDATE imoveis SET occupied = 1 WHERE id = (?)", [id]);
    })
    return usuarios[usuarios.length - 1];
  };


  const getImoveis = () => {
    return imoveis;
  };

  const getUsuarios = () => {
    return usuarios;
  };

  return (
    <ImobiliariaContext.Provider value={{ getImoveis, addImovel, imoveis, addUsuario, usuarios, getUsuarios }}>
      {props.children}
    </ImobiliariaContext.Provider>
  );
}
