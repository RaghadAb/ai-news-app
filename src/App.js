import React, { useState, useEffect } from "react";
import NewsCards from "./components/NewsCards/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "35214b9d47e4cbae2a635f719ad7e4532e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      }
    });
  }, []);
  return (
    <div>
      <h1>AI News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
