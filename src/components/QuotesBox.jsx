import React from "react";

const QuotesBox = ({ author, phrases, color, change }) => {
  return (
    <div className="card">
      <blockquote>
        <p style={{ color: color }}>
          <i className="fa-solid fa-quote-left"></i>&nbsp;&nbsp;&nbsp;
          
          {phrases}
        </p>
        <footer style={{ color: color }}>{author}</footer>
      </blockquote>
      <button onClick={change} style={{ backgroundColor: color }}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default QuotesBox;
