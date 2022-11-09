import React from 'react';

export const ControlBox = React.memo(({handleChange, handleClick, data}) => (
  <div id="control">
    <div>
      商品：
      <input 
        type="text" 
        id="item" 
        autoComplete="off" 
        onChange={handleChange}
        value={data.item}
      />
    </div>
    <div>
      金額：
      <input 
        type="number" 
        id="price" 
        autoComplete="off" 
        onChange={handleChange}
        value={data.price}
      />
    </div>
    <div>
      個数：
      <input 
        type="number" 
        id="amount" 
        autoComplete="off" 
        onChange={handleChange}
        value={data.amount}
      />
    </div>
    <div>
      <button onClick={handleClick}>登録</button>
    </div>
  </div>
));
