import React from "react";
import "../StartPage/StartPage.css";
import CountUp from "react-countup";

const ResultBox = (props) => (
  <div className="box">
    <p>Population: </p>
    <CountUp className="res" end={props.result} duration={1}></CountUp>
  </div>
);

export default ResultBox;
