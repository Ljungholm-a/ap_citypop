import React, { useState } from "react";
import "../StartPage/StartPage.js";
import { useHistory, useLocation } from "react-router-dom";

function Search() {
  const history = useHistory();
  const location = useLocation();
  const [input, setInput] = useState("");

  const onPress = () => {
    console.log("Nämen: ", input);
    if (location.state.detail === "city") {
      history.push({
        pathname: "/result",
        state: { detail: input },
      });
    } else {
      console.log("nämen", input);
      history.push({
        pathname: "/searchCountry",
        state: { detail: input },
      });
    }
  };

  const handleClick = () => {
    history.push({
      pathname: "/",
    });
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (location.state.detail === "city") {
        history.push({
          pathname: "/result",
          state: { detail: input },
        });
      } else {
        console.log("nämen", input);
        history.push({
          pathname: "/searchCountry",
          state: { detail: input },
        });
      }
    }
  };

  const updateInput = async (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  return (
    <div className="outer">
      <div className="inner">
        <h1>CityPop</h1>
        <div className="text">
          <p className="text">Search by {location.state.detail}</p>
        </div>
        <div className="search">
          <form>
            <input
              className="textField"
              type="text"
              onKeyDown={handleEnter}
              onChange={updateInput}
            />
          </form>
          <button className="searchButton" onClick={onPress}>
            Search
          </button>
        </div>
        <button className="redo" onClick={handleClick}>
          Back
        </button>
      </div>
    </div>
  );
}
export default Search;
