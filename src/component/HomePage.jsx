import "../assets/css/HomePage.css";

export function Home(props) {
  return (
    <div className="home-container">
      <div className="home-page-h1">
        <h1>Welcome to Quiz App</h1>
      </div>
      <div className="game">
        <div className="home-question">
          <p>"Who won the 2015 Formula 1 World Championship?"</p>
        </div>
        <div className="home-class-answer">
          <input className="answer1" type="button" value="Nico Rosberg" />
          <input className="answer2" type="button" value="Sebastian Vettel" />
          <input className="answer3" type="button" value="Jenson Button" />
          <input className="answer4" type="button" value="Lewis Hamilton" />
        </div>
      </div>
    </div>
  );
}
