import "../StartPage/StartPage.css";
import React, { useState } from "react";
import "../StartPage/StartPage.js";
import { useHistory } from "react-router-dom";

function TopThree({ result }) {
  const history = useHistory();
  const [input, setInput] = useState("");

  const onPress = (e) => {
    console.log("nämen", e.target.textContent);

    for (var i = 0; i < result.length; i++) {
      if (result[i].name === e.target.textContent) {
        var t = result[i].population;
      }
    }
    history.push({
      pathname: "/res",
      state: { detail: t },
    });
  };

  const updateInput = async (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  return result.map((item) => (
    <div className="box">
      {" "}
      <button className="cityButton" onClick={onPress}>
        {item.name}
      </button>
    </div>
  ));
}

export default TopThree;
