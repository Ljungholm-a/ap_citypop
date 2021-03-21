import React from "react";
import "../StartPage/StartPage.css";
import CountUp from "react-countup";

const ResultBox = (props) =>
  props.result === 0.5 ? (
    <div className="box">
      <p>Population: </p>
      <div className="dot-gathering"></div>
    </div>
  ) : props.result === 0.1 ? (
    <div className="box">
      <p>Population: </p>
      no data for this search, check for typos!
    </div>
  ) : (
    <div className="box">
      <p>Population: </p>
      <CountUp end={props.result} duration={1} />
    </div>
  );

export default ResultBox;
