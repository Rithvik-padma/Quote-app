import './App.css'; 
import {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
function App() {
  const [quote, setQuote] = useState('');

  let getQuote = async () =>{
    let response = await fetch('https://api.adviceslip.com/advice').then((response=> response.json()));
    setQuote(response.slip.advice);
    console.log("Click button");
  }

  useEffect(() => {getQuote()}, []);

  return (
      <div className='card'>
        <h1 className='quote'>{quote}</h1>
        <div className='buttons'>
          <button className='getQuote' onClick={getQuote}>
            <span>Get Quote</span>
          </button>
          <button className='tweet' href>
            <a href = {`https://twitter.com/intent/tweet?text=${quote}`}>
              <FontAwesomeIcon icon={faTwitter} className='icon'/> 
              <span>Tweet</span>
            </a>
          </button>
        </div>
      </div>
  );
}

export default App;
