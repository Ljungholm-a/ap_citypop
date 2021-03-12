import React, {useState, useEffect} from 'react';
import {useLocation } from "react-router-dom";
import ResultBox from './ResultBox';


const Results = () => {
      const location = useLocation()
      const [searchList, setSearchList] = useState([]);
      const [res, setRes] = useState('');


      /*const fetchData = async () => {
        console.log('http://api.geonames.org/searchJSON?q=' + location.state.detail+'&fuzzy=0.6&username=weknowit');
        const response = await fetch('http://api.geonames.org/searchJSON?q=' + location.state.detail+'&fuzzy=0.6&username=weknowit');
        const data = await response.json().geonames;
        console.log("in fetch")
        setSearchList((data));
        console.log('List' , searchList);
        console.log(data);

      
      }*/

      const fetchData = async () => {
        console.log('http://api.geonames.org/searchJSON?q=' + location.state.detail+'&fuzzy=0.6&username=weknowit');
        const data = await fetch('http://api.geonames.org/searchJSON?q=' + location.state.detail+'&fuzzy=0.6&username=weknowit')
        .then(res => {
          return res.json();
        })
        .then(json => {
          return json.geonames;
        }) 
        setSearchList(data);
        console.log(data);
        console.log(data[1].population);
        setRes(data[1].population);

      }
      
      useEffect( () => {fetchData()},[]);

      
      return(
        
        <div className="outer">
        <div className="inner">
        <h1>Citypop</h1>
        <div className="text">
         <p className="text">{location.state.detail}</p>
         <ResultBox result= {res}></ResultBox>
         
        </div>
        </div>
        </div>
  
       ) }
    

export default Results;
