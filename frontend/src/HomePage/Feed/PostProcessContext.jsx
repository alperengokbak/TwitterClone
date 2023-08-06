import React from "react";

export const PostProcessContext = React.createContext();

export const PostProcessProvider = ({ children }) => {
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [postProcess, setPostProcess] = React.useState(false);

  return (
    <PostProcessContext.Provider
      value={[postProcess, setPostProcess, tweetMessage, setTweetMessage]}
    >
      {children}
    </PostProcessContext.Provider>
  );
};
