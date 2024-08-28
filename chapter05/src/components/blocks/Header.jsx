import { useContext } from "react";
import { StateContext } from "./../providers/StateContext";

export function Header() {
  const { tweets } = useContext(StateContext);
  const totalLikes = tweets.reduce((total, { like }) => total + like, 0);

  return (
    <div className="header">
      <div>Total Likes: {totalLikes}</div>
      <div>Total Tweets: {tweets.length}</div>
    </div>
  );
}
