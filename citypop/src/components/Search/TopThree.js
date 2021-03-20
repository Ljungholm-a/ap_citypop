import "../StartPage/StartPage.css";
import "../StartPage/StartPage.js";
import { useHistory } from "react-router-dom";

function TopThree({ result }) {
  const history = useHistory();

  const onPress = (e) => {
    console.log("jamen", e.target.textContent);
    history.push({
      pathname: "/result",
      state: { detail: e.target.textContent },
    });
  };

  return result.map((item) =>
    item.name === "..." ? (
      <div className="box">
        <button className="cityButton" onClick={onPress} key={item.geonameId}>
          waiting
        </button>
      </div>
    ) : result.length === 0 ? (
      <div className="box">
        <button className="cityButton" onClick={onPress} key={item.geonameId}>
          nothing
        </button>
      </div>
    ) : (
      <div className="box">
        <button className="cityButton" onClick={onPress} key={item.geonameId}>
          {item.name}
        </button>
      </div>
    )
  );
}

export default TopThree;
