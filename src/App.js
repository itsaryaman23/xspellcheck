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
    let word = e.target.value;
    let arr = word.split(' ');
    // console.log(customDictionary['teh'])

    for(const a of arr)
    {
        if(customDictionary.hasOwnProperty(a))
        {
          document.getElementById('word').innerText = customDictionary[a];
          document.getElementById('sent').style.display = "block";
          break;
        }
        else{
          document.getElementById('sent').style.display = "none";
        }
    }

  }

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea placeholder='Enter text...' onChange = {handleChange}></textarea>
      <p id = 'sent'>Did you mean: <span id="word"></span>?</p>
    </div>
  );
}

export default App;
