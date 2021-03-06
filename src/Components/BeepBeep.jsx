import {} from "../assets/css/BeepBeep.css";

export function BeepBeep(props) {
  return (
    <div className="bipbip-container">
      <div className="beepbeep-come-back">
        <h1>Beep Beep</h1>
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
          <h1>Theme: Building Friendships</h1>
          <h3>ABOUT THE SHOW</h3>
        </div>

        <div className="beepbeep-synopsis">
          <input type="button" value="Synopsis" />
          <p>
            Two cars and a road interact and find their friendship tested in
            each episode. Trucky is responsible, Voom Vam is adventurous and
            Roady is always worried; together they experience adventures,
            mishaps and sometimes funny misunderstandings.
          </p>
        </div>

        <div className="beepbeep-attribute">
          <input type="button" value="Attribute" />
          <p>
            The cars in the series have the same characterization as kids,
            making it easy to identify with them. Therefore we can identify with
            their joy or sadness, with their sense of adventure and their
            cautiousness, with their failure or success and of course when they
            are offended and when they make up.
          </p>
        </div>

        <div className="beepbeep-tip">
          <input type="button" value="Tip" />
          <p>
            Reflect your emotions with your kids while speaking with them: You
            are sad because… You are angry because you wanted to… You are
            excited because… By doing so your child will understand what is the
            emotion that he/she is feeling and will be able to better cope with
            the emotions he/she feels.
          </p>
        </div>
        <div className="beepbeep-iframe">
          <iframe
            width="800"
            height="350"
            src="https://player.vimeo.com/video/374642534?dnt=1&app_id=122963&autoplay=1"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
