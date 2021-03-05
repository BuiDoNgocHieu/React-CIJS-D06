import {} from "../assets/css/Dino&theEggHunt.css";

export function Dino(props) {
  return (
    <div className="dino-container">
      <div className="dino-come-back">
        <h1>Dino & the Egg Hunt</h1>
        <input
          type="button"
          value="Quay lại"
          onClick={() => {
            props.tryComeBack({});
          }}
        />
      </div>
      <div className="dino-butterfly">
        <img
          src="https://www.babytv.com/app/themes/babytv/resources/assets/images/butterflyg.gif"
          alt="butterfly"
        />
      </div>

      <div className="dino-squirrel">
        <img
          src="https://www.babytv.com/app/themes/babytv/resources/assets/images/squirrel.png"
          alt=""
        />
      </div>
      <div className="dino-contr">
        <div className="dino-slogan">
          <h1>Theme: Activities</h1>
          <h3>ABOUT THE SHOW</h3>
        </div>

        <div className="dino-synopsis">
          <input type="button" value="Synopsis" />
          <p>
            Education Kid is going back in time to the days of the dinosaurs
            where two dinosaur eggs have disappeared from the baby dinosaur
            kindergarten. In each episode our heroes follow the egg trail on a
            mission to find the eggs and return them safely to the kindergarten.
          </p>
        </div>

        <div className="dino-attribute">
          <input type="button" value="Attribute" />
          <p>
            Kids lose things all the time. The show deals with the act of losing
            objects in a positive way and turns the search into a game. The
            toddlers are exposed to heroes who try, fail, make mistakes, but do
            not despair. Each time they try to solve the problem in a different
            way until they succeed.
          </p>
        </div>

        <div className="dino-tip">
          <input type="button" value="Tip" />
          <p>
            Give your toddlers a task a little beyond their ability. Praise them
            for their efforts. Encourage them not to despair when they fail but
            rather to try again or look for another solution.
          </p>
        </div>
        <div className="dino-iframe">
          <iframe
            width="800"
            height="400"
            src="https://player.vimeo.com/video/490716358?dnt=1&app_id=122963&autoplay=1"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
