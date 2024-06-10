import React from 'react';
import './QuoteList.css';

const QuoteList = ({ savedQuotes }) => {
  return (
    <div className="quote-list">
      <h2>Saved Quotes</h2>
      {savedQuotes.map((quote, index) => (
        <div key={index} className="saved-quote">
          {quote}
        </div>
      ))}
    </div>
  );
};

export default QuoteList;
