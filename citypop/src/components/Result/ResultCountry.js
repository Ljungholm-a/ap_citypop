import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "../StartPage/StartPage.js";
import TopThree from "../Search/TopThree";

const ResultCountry = () => {
  const location = useLocation();
  console.log(location.state.detail);

  return (
    <div className="outer">
      <div className="inner">
        <h1>Citypop</h1>
        <div className="text">
          <p className="text">Larges Cities</p>
          <TopThree result={location.state.detail}></TopThree>

          <button className="redo">Redo Search</button>
        </div>
      </div>
    </div>
  );
};
export default ResultCountry;
