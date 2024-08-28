import React from "react";
import { useState, useContext } from "react";
import { DispatchContext } from "./../providers/DispatchContext";

export const AddForm = () => {
  const dispatch = useContext(DispatchContext);
  const [body, setBody] = useState("");

  const handleChangeBody = (e) => {
    setBody((body) => e.target.value);
  };

  const handleClickTweet = (e) => {
    dispatch({
      type: "tweet",
      payload: {
        body: body,
      },
    });
    setBody("");
  };

  return (
    <div className="tweetForm">
      <textarea onChange={handleChangeBody} value={body}></textarea>
      <div>
        <button onClick={handleClickTweet}>tweet</button>
      </div>
    </div>
  );
};
