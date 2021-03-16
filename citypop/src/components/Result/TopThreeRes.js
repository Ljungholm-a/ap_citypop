import React from "react";
import "../StartPage/StartPage.css";
import CountUp from "react-countup";
import { useLocation, useHistory } from "react-router-dom";
import ResultBox from "../Result/ResultBox";

const TopThreeRes = () => {
  const location = useLocation();
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: "/",
    });
  };

  return (
    <div className="outer">
      <div className="inner">
        <h1>Citypop</h1>
        <div className="text">
          <p className="text"></p>
          <ResultBox result={location.state.detail}></ResultBox>
          <button className="redo" onClick={handleClick}>
            {" "}
            Redo Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopThreeRes;
