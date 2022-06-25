import React from "react";
import QuotesBox from "./QuotesBox";

const Container = ({ color, phrases, author, change }) => {
  return (
    <div className="App" style={{ backgroundColor: color }}>
      <QuotesBox
        color={color}
        phrases={phrases}
        author={author}
        change={change}
      />
    </div>
  );
};

export default Container;
