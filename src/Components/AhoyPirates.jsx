import {} from "../assets/css/AhoyPirates.css";

export function Ahoy(props) {
  return (
    <div className="ahoy-container">
      <div className="ahoy-come-back">
        <h1>Ahoy Pirates</h1>
        <input
          type="button"
          value="Quay lại"
          onClick={() => {
            props.tryComeBack({});
          }}
        />
      </div>
      <div className="ahoy-butterfly">
        <img
          src="https://www.babytv.com/app/themes/babytv/resources/assets/images/butterflyg.gif"
          alt="butterfly"
        />
      </div>

      <div className="ahoy-squirrel">
        <img
          src="https://www.babytv.com/app/themes/babytv/resources/assets/images/squirrel.png"
          alt=""
        />
      </div>
      <div className="ahoy-contr">
        <div className="ahoy-slogan">
          <h1>Theme: Activities</h1>
          <h3>ABOUT THE SHOW</h3>
        </div>

        <div className="ahoy-synopsis">
          <input type="button" value="Synopsis" />
          <p>
            Playing “Pirates” is always fun, who doesn’t want to find a treasure
            chest? Three girl pirates on a pirate ship explore new lands and
            solve puzzles and riddles in order to find the treasure chest. The
            treasure chest is always filled with fun objects for having a party!
          </p>
        </div>

        <div className="ahoy-attribute">
          <input type="button" value="Attribute" />
          <p>
            The program is about three girls who face physical and cognitive
            challenges. They stand up to the challenges and manage to overcome
            them together. What may be difficult for one is made possible when
            everyone works together as a team.
          </p>
        </div>

        <div className="ahoy-tip">
          <input type="button" value="Tip" />
          <p>
            Watch the program with your kids. Try to solve the riddles and
            puzzles together before they are solved on screen. This can be a
            positive model for collaboration in the playroom.
          </p>
        </div>
        <div className="ahoy-iframe">
          <iframe
            width="800"
            height="400"
            src="https://player.vimeo.com/video/409495475?dnt=1&app_id=122963&autoplay=1"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
