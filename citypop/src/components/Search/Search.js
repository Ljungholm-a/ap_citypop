import React, { useState, useEffect } from 'react';
import '../StartPage/StartPage.js'
import SearchBar from './SearchBar'
import { useHistory } from "react-router-dom";
import SearchList from './SearchList'

const Search= (props) => {
  const history = useHistory();
    const [input, setInput] = useState('');
    const [searchList, setSearchList] = useState();
    const loc = props;


const onPress = () => {
  history.push('/result');
}


/*const fetchData = async () => {
    return await fetch('http://api.geonames.org/searchJSON?q=United&maxRows=10&fuzzy=0.8&username=weknowit')
      .then(response => response.json())
      .then(data => {
         setSearchList(data) 
       });
    }*/


       const updateInput = async (input) => {
        const searchWord = input;

     }
   
    // useEffect( () => {fetchData()},[]);
    



    return(
        <div className="outer">
        <div className="inner">
        <h1>Citypop</h1>
        <div className="text">
        <p className="text">Search by city</p>
        </div>
        <div className= "search">
        <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <button className="searchButton"> Search </button>
      </div>
        
              
        </div></div>
        );
    }
      export default Search;