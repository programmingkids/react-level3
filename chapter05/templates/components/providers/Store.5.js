export const reducer = (state, action) => {
  switch (action.type) {
    case 'like':
      return addLike(state, action);
    case 'delete':
      return deleteTweet(state, action);
    case 'tweet':
      return addTweet(state, action);
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

const deleteTweet = (state, action) => {
  const { id } = action.payload;

  return {
    ...state,
    tweets: state.tweets.filter((tweet) => tweet.id !== id),
  };
};

const addTweet = (state, action) => {
  const { body } = action.payload;

  const maxId = Math.max.apply(
    null,
    state.tweets.map(function (t) {
      return t.id;
    }),
  );

  return {
    ...state,
    tweets: state.tweets.concat({
      id: maxId + 1,
      body: body,
      like: 0,
    }),
  };
};
