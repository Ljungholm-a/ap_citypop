import './StartPage.css'


function StartPage() {
  return (
      <div className="outer">
        <div className="inner">
        <h1>CityPop</h1>
        <div className="text">
        <p>Do you want to know the amount of people who live in a city? We are here to provide that for you</p>
        </div>
        <div className="b">
        <button>Search by city</button>
        <button>Search by country</button>
        </div>
        </div>
      </div>

  );
}
  export default StartPage;