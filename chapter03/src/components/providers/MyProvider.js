import { useState, createContext } from 'react';

export const MyContext = createContext({});

export const MyProvider = (props) => {
  const { children } = props;
  
  const [list, setList] = useState([]);
  
  const initialData = {
    list,
    setList
  };

  return (
    <MyContext.Provider value={initialData}>
      {children}
    </MyContext.Provider>
  );
};
