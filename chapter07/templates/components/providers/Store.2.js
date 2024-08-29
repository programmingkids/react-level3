export const reducer = (state, action) => {
  switch (action.type) {
    case 'delete':
      return deleteMemo(state, action);
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
