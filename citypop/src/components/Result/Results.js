import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ResultBox from "./ResultBox";
import "../StartPage/StartPage.js";

const Results = () => {
  const history = useHistory();
  const location = useLocation();
  const [searchList, setSearchList] = useState([]);
  const [res, setRes] = useState("");
  //setRes(0);

  const fetchData = async () => {
    console.log(location.state.detail);
    console.log(
      "http://api.geonames.org/searchJSON?q=" +
        location.state.detail +
        "&fuzzy=0.6&username=weknowit"
    );
    const data = await fetch(
      "http://api.geonames.org/searchJSON?q=" +
        location.state.detail +
        "&fuzzy=0.6&username=weknowit"
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json.geonames;
      });
    setSearchList(data);
    console.log(data);
    console.log(data[1].population);
    setRes(data[1].population);
  };

  const handleClick = () => {
    history.push({
      pathname: "/",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="outer">
      <div className="inner">
        <h1>Citypop</h1>
        <div className="text">
          <p className="text">{location.state.detail}</p>
          <ResultBox result={res}></ResultBox>
          <button className="redo" onClick={handleClick}>
            {" "}
            Redo Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
