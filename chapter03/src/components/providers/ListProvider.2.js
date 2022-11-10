import { useState, createContext } from 'react';

export const ListContext = createContext({});

export const ListProvider = (props) => {
  const { children } = props;
  
  const [list, setList] = useState([]);
  
  const initialData = {
    list,
    setList
  };

  return (
    <ListContext.Provider value={initialData}>
      {children}
    </ListContext.Provider>
  );
};
