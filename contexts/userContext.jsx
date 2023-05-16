import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAllProperty } from '../requests/GetAllPropertys';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserProvider(props) {
  const [token, setToken] = useState('');
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProperty(token.token);
      setProperties(data);
    };
    if (token.token) {
      fetchData();
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, setToken, properties }}>
      {props.children}
    </UserContext.Provider>
  );
}
