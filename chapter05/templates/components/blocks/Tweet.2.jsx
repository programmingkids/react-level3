export const Tweet = ({ id, body, like }) => {
  body = body.replaceAll('\n', '<br>');

  return (
    <div className="tweet">
      <div className="body" dangerouslySetInnerHTML={{ __html: body }}></div>
      <div className="likeBox">
        <div>Like: {like}</div>
      </div>
    </div>
  );
};
