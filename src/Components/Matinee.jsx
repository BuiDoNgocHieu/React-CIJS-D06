import {} from "../assets/css/Matinee.css";

export function Matinee(props) {
  return (
    <div className="matinee-container">
      <div className="matinee-come-back">
        <h1>Mini Matinee</h1>
        <input
          type="button"
          value="Quay lại"
          onClick={() => {
            props.tryComeBack({});
          }}
        />
      </div>
      <div className="bipbip-butterfly">
        <img
          src="https://www.babytv.com/app/themes/babytv/resources/assets/images/butterflyg.gif"
          alt="butterfly"
        />
      </div>

      <div className="bipbip-squirrel">
        <img
          src="https://www.babytv.com/app/themes/babytv/resources/assets/images/squirrel.png"
          alt=""
        />
      </div>
      <div className="beepbeep-contr">
        <div className="beepbeep-slogan">
          <h1>Theme: Imagination and Creativity</h1>
          <h3>ABOUT THE SHOW</h3>
        </div>

        <div className="beepbeep-synopsis">
          <input type="button" value="Synopsis" />
          <p>
            Four charming animal friends put on fascinating plays in the magical
            theatre world. In each episode the friends visit a different part of
            the world sharing captivating tales and sharing amusing facts about
            the traditions and customs of far-away cultures.
          </p>
        </div>

        <div className="beepbeep-attribute">
          <input type="button" value="Attribute" />
          <p>
            Introducing toddlers to different cultures and exposing them to
            different places and countries through short stories.
          </p>
        </div>

        <div className="beepbeep-tip">
          <input type="button" value="Tip" />
          <p>
            Take your child’s dolls and create stories together. Encourage
            imagination and fantasy!
          </p>
        </div>
        <div className="matinee-iframe">
          <iframe
            width="800"
            height="400"
            src="https://player.vimeo.com/video/441969992?dnt=1&app_id=122963&autoplay=1"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
