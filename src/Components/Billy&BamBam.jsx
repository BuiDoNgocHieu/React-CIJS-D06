import {} from "../assets/css/BillyAndBamBam.css";

export function BillyBamBam(props) {
  return (
    <div className="bambam-container">
      <div className="bambam-come-back">
        <h1>Billy & BamBam</h1>
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
          alt="squirrel"
        />
      </div>
      <div className="bambam-contr">
        <div className="beepbeep-slogan">
          <h1>Theme: Building Friendships</h1>
          <h3>ABOUT THE SHOW</h3>
        </div>

        <div className="beepbeep-synopsis">
          <input type="button" value="Synopsis" />
          <p>
            Billy and BamBam never get bored – they manage to find creative and
            fun ways to play with everything – leaves, bowls, socks and even
            oranges! This cute pair are sure to put a smile on your child’s face
            with their contagious laughter and cheerfulness. Each episode ends
            with an original and fun song written especially for Billy and
            BamBam!
          </p>
        </div>

        <div className="beepbeep-attribute">
          <input type="button" value="Attribute" />
          <p>
            This is a fun-filled series that helps address the unique
            relationship between siblings. Billy loves Bam-Bam and wants to
            teach him everything she knows. Although they sometimes get angry
            with one another, they always make up and continue to play together,
            which is what they love best.
          </p>
        </div>

        <div className="beepbeep-tip">
          <input type="button" value="Tip" />
          <p>
            Find various objects around your home or outside that will allow you
            and your child to play imagination games together. Try turning a box
            into a spaceship, a tube into a telescope or socks into hand
            puppets!
          </p>
        </div>
        <div className="bambam-iframe">
          <iframe
            width="800"
            height="400"
            src="https://player.vimeo.com/video/373703215?dnt=1&app_id=122963&autoplay=1"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
