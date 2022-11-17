export const reducer = (state, action) => {
  switch (action.type) {
    case 'delete': return deleteMemo(state, action);
    case 'complete': return completeMemo(state, action);
    case 'add' : return addMemo(state,action);
    case 'edit' : return editMemo(state,action);
    default: return state;
  }
};

const deleteMemo = (state, action) => {
  const { id } = action.payload;
  
  return {
    ...state,
    memos : state.memos.filter(memo => memo.id !== id),
  };
};

const completeMemo = (state, action) => {
  const { id } = action.payload;
  
  return {
    ...state,
    memos : state.memos.map(memo => {
      if( memo.id === id) {
        return {
          ...memo,
          completed : !memo.completed,
        };
      }
      return memo;
    })
  };
};

const addMemo = (state, action) => {
  const { body } = action.payload;
  
  const maxId = Math.max.apply(null,state.memos.map(function(t){return t.id;}));
  
  return {
    ...state,
    memos: state.memos.concat({
      id: maxId + 1,
      body: body,
      completed : false,
    })
  };
};

const editMemo = (state, action) => {
  const { id, body } = action.payload;
  
  return {
    ...state,
    memos : state.memos.map(memo => {
      if( memo.id === id) {
        return {
          ...memo,
          body : body,
        };
      }
      return memo;
    })
  };
};
