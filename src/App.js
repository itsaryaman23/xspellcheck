import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleChange = (e) => {
    let word = e.target.value.toLowerCase();
    let arr = word.split(' ');
    if(arr.length)
    {

      
      for(const a of arr)
        {
          if(customDictionary.hasOwnProperty(a))
            {
              document.getElementById('sent').innerText = `Did you mean: ${customDictionary[a]}?`;
              
              break;
            }
            else{
              document.getElementById('sent').innerText = ``;
            }
          }
          
        }
  }

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea placeholder='Enter text...' onChange = {handleChange}></textarea>
      <p id = 'sent'></p>
    </div>
  );
}

export default App;
