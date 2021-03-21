import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ResultBox from "./ResultBox";
import "../StartPage/StartPage.js";

const Results = () => {
  const history = useHistory();
  const location = useLocation();
  const [res, setRes] = useState(0.5);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchData = async () => {
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
      var i;
      var tempRes = 0;
      for (i = 0; i < data.length; i++) {
        if (data[i].fclName === "city, village,...") {
          tempRes = data[i];
          break;
        }
      }

      if (tempRes === 0) {
        tempRes = { population: 0.1 };
      }

      setRes(tempRes.population);
      setCountry(tempRes.countryName);
    };
    fetchData();
  });

  const handleClick = () => {
    history.push({
      pathname: "/",
    });
  };

  return (
    <div className="outer">
      <div className="inner">
        <h1>CityPop</h1>
        <div className="text">
          <p className="text">
            {location.state.detail} {country}
          </p>
          <ResultBox result={res}></ResultBox>
          <button className="redo" onClick={handleClick}>
            Redo Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
