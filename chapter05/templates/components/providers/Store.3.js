export const reducer = (state, action) => {
  switch (action.type) {
    case 'like':
      return addLike(state, action);
    default:
      return state;
  }
};

const addLike = (state, action) => {
  const { id } = action.payload;

  return {
    ...state,
    tweets: state.tweets.map((tweet) => {
      if (tweet.id === id) {
        return {
          ...tweet,
          like: tweet.like + 1,
        };
      }
      return tweet;
    }),
  };
};
