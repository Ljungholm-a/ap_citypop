import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ResultBox from "../Result/ResultBox";
import "../StartPage/StartPage.js";
import TopThree from "./TopThree";

const SearchCountry = () => {
  const history = useHistory();
  const location = useLocation();
  const [searchList, setSearchList] = useState([]);
  var isLoaded = false;

  const fetchData = async () => {
    console.log("Fetching");
    const data = await fetch(
      "http://api.geonames.org/searchJSON?q=" +
        location.state.detail +
        "&username=weknowit"
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json.geonames;
      });
    data.sort(GetSortOrder("population"));

    var i;

    for (i = 0; i < 100; i++) {
      console.log("Size; ", searchList.length);
      if (
        data[i].fclName == "city, village,..." &&
        data[i].name != location.state.detail &&
        searchList.length < 3
      ) {
        searchList.push(data[i]);
      }
    }
    console.log(searchList);
    isLoaded = true;

    doneLoading();
  };

  function doneLoading() {
    history.push({
      pathname: "/resultCountury",
      state: { detail: searchList },
    });
  }

  function GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] > 100000) {
        console.log(a);
      }

      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    };
  }

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
          <p>Waiting</p>
          {(isLoaded = true ? true : <TopThree result={searchList}></TopThree>)}

          <button className="redo" onClick={handleClick}>
            Redo Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCountry;
