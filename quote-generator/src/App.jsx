import { useEffect, useState } from 'react';
import './App.css'



function App() {

  let quote_url = "https://api.quotable.io/random";
  let [data, setData ]= useState("");

  useEffect(() => {
    fetchquote();
  }, []);

  const fetchquote = () => {
    fetch(quote_url)
    .then((response) => response.json() )
    .then((quoteData) => {
      setData(quoteData);
      console.log(data);
    }); 
  }

  const newquote = () => {
    fetchquote();
  }

  return (
    <>
    <div className='card'>
        <h2 className='topic'>Quotes Generator</h2>
        <p className='quote'>{JSON.stringify(data['content'])}</p>
        <button type='button' onClick={newquote}  className='getquote'>Get New Quote</button>
    </div>
    </>
  )
}

export default App
