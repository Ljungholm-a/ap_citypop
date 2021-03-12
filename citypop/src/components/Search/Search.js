import React, { useState } from 'react';
import '../StartPage/StartPage.js'
import { useHistory } from "react-router-dom";

function Search() {
  const history = useHistory();
  const [input, setInput] = useState('');

const onPress = () => {
    console.log('nämen', input);
    history.push({
      pathname: '/result',
      state: {detail: input} 
    })
}


  const updateInput = async (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  }


    
    return(
        <div className="outer">
        <div className="inner">
        <h1>Citypop</h1>
        <div className="text">
        <p className="text">Search by city</p>
        </div>
        <div className= "search">
        <form >        
          <input className="textField" type="text" onChange={updateInput} />        
      </form>
        
      <button className="searchButton" onClick={onPress}> Search </button>
      </div>
        
              
        </div></div>
        );
    }
      export default Search;