import "../assets/css/HomePage.css";

export function Home(props) {
  return (
    <div className="home-container">
      <div className="home-page-h1">
        <h1>Welcome to Quiz App</h1>
      </div>
      <div className="game">
        <div className="home-question">
          <p>{props.data[1]?.question}</p>
        </div>
        <div className="home-class-answer">
          <input
            className="answer1"
            type="button"
            value={props.data[1]?.incorrect_answers[0]}
          />
          <input
            className="answer2"
            type="button"
            value={props.data[1]?.incorrect_answers[2]}
          />
          <input
            className="answer3"
            type="button"
            value={props.data[1]?.incorrect_answers[1]}
          />
          <input
            className="answer4"
            type="button"
            value={props.data[1]?.correct_answer}
          />
        </div>
      </div>
    </div>
  );
}
