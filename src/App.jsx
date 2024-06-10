import { useEffect, useState } from 'react' 
import './App.css'
import QuoteCard from './Quotes/QuoteCard';
import QuoteList from './Quotes/QuoteList';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    setQuote(data[0]);
  };

  const handleSaveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="app">
      <h1>Get Quotes And Save</h1>
      <button onClick={fetchQuote}>Get New Quote</button>
      {quote && <QuoteCard quote={quote} onSave={handleSaveQuote} />}
      <QuoteList savedQuotes={savedQuotes} />
    </div>
  );
}

export default App
