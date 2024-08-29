import { useState } from 'react';

export const useGetItems = () => {
  const [items, setItems] = useState([]);

  const onClickGetItems = () => {
    setItems([
      {
        id: 1,
        name: '鉛筆',
      },
      {
        id: 2,
        name: '消しゴム',
      },
      {
        id: 3,
        name: 'ノート',
      },
    ]);
  };

  return { items, onClickGetItems };
};
