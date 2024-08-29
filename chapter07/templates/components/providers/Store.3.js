export const reducer = (state, action) => {
  switch (action.type) {
    case 'delete':
      return deleteMemo(state, action);
    case 'complete':
      return completeMemo(state, action);
    default:
      return state;
  }
};

const deleteMemo = (state, action) => {
  const { id } = action.payload;

  return {
    ...state,
    memos: state.memos.filter((memo) => memo.id !== id),
  };
};

const completeMemo = (state, action) => {
  const { id } = action.payload;

  return {
    ...state,
    memos: state.memos.map((memo) => {
      if (memo.id === id) {
        return {
          ...memo,
          completed: !memo.completed,
        };
      }
      return memo;
    }),
  };
};
