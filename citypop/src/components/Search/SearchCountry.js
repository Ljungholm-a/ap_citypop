import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "../StartPage/StartPage.js";
import TopThree from "./TopThree";

const SearchCountry = () => {
  const waiting = [{ name: "..." }, { name: "..." }, { name: "..." }];

  const history = useHistory();
  const location = useLocation();
  const [searchList, setSearchList] = useState(waiting);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://api.geonames.org/searchJSON?q=" +
          location.state.detail +
          "&countryName=" +
          location.state.detail +
          "&maxRows=1000&username=weknowit"
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          return json.geonames;
        })
        .catch(function () {
          return "error";
        });
      var i;
      var tempList = [];

      if (data === "error") {
        const waiting = [
          { name: "Error", geonameId: 22 },
          { name: "Error", geonameId: 22 },
          { name: "Error", geonameId: 22 },
        ];

        tempList.push(waiting);
      } else {
        data.sort(GetSortOrder("population"));

        for (i = 0; i < data.length; i++) {
          if (
            data[i].fclName === "city, village,..." &&
            data[i].name !== location.state.detail &&
            tempList.length < 3 &&
            data[i].countryName === location.state.detail
          ) {
            tempList.push(data[i]);
          }
          if (tempList.length > 3) break;
        }
      }

      if (tempList.length === 0) {
        tempList = [{ name: "No data on this, typo in search?" }];
      }
      setSearchList(tempList);
    };
    fetchData();
  });

  function GetSortOrder(prop) {
    return function (a, b) {
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

  return (
    <div className="outer">
      <div className="inner">
        <h1>CityPop</h1>
        <div className="text">
          <p className="text">{location.state.detail}</p>
          <TopThree result={searchList}></TopThree>
          <button className="redo" onClick={handleClick}>
            Redo Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCountry;
