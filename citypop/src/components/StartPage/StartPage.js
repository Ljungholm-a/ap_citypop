import React from "react";
import "./StartPage.css";
import { useHistory } from "react-router-dom";

const StartPage = () => {
  const history = useHistory();

  const handleCitySearch = () => {
    var c = "city";
    history.push({
      pathname: "/search",
      state: { detail: c },
    });
  };

  const handleCountrySearch = () => {
    var c = "country";
    history.push({
      pathname: "/search",
      state: { detail: c },
    });
  };

  return (
    <div className="outer">
      <div className="inner">
        <h1>CityPop</h1>
        <div className="text">
          <p>
            Do you want to know the amount of people who live in a city? We are
            here to provide that for you
          </p>
        </div>
        <div className="b">
          <button className="cityorcountry" onClick={handleCitySearch}>
            Search by city
          </button>
          <button className="cityorcountry" onClick={handleCountrySearch}>
            Search by country
          </button>
        </div>
      </div>
    </div>
  );
};
export default StartPage;
