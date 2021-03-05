import {} from "../assets/css/Charlie&theNumber.css";

export function Charlie(props) {
  return (
    <div className="charlie-container">
      <div className="charlie-come-back">
        <h1>Charlie & the Numbers</h1>
        <input
          type="button"
          value="Quay lại"
          onClick={() => {
            props.tryComeBack({});
          }}
        />
      </div>
      <div className="charlie-butterfly">
        <img
          src="https://www.babytv.com/app/themes/babytv/resources/assets/images/butterflyg.gif"
          alt="butterfly"
        />
      </div>

      <div className="charlie-squirrel">
        <img
          src="https://www.babytv.com/app/themes/babytv/resources/assets/images/squirrel.png"
          alt=""
        />
      </div>
      <div className="charlie-contr">
        <div className="charlie-slogan">
          <h1>Theme: First Concepts</h1>
          <h3>ABOUT THE SHOW</h3>
        </div>

        <div className="charlie-synopsis">
          <input type="button" value="Synopsis" />
          <p>
            Numbers and counting turn into a fun adventure when Charlie visits
            the Numbers Kingdom, a magical world in which numbers reign. Join
            Charlie as he meets each of the charming numbers, and enjoys the
            singing, dancing, and of course – counting in this captivating
            series that brings the concept of numbers and numeracy to life.
          </p>
        </div>

        <div className="charlie-attribute">
          <input type="button" value="Attribute" />
          <p>
            It is important for future Math learning that a child’s first
            encounter with numbers and counting be friendly and fun. In this
            series, counting and numbers turns into a fun adventure as Charlie
            and his friends -The Numbers - introduce basic numeracy skills like
            recognizing and naming the number shapes, counting to 10, counting
            by number, and more.
          </p>
        </div>

        <div className="charlie-tip">
          <input type="button" value="Tip" />
          <p>
            By using a set of numbers, encourage your child to name the numbers
            and arrange them in the correct order. You can find number sets in
            many places – look for number magnets for your fridge door; draw the
            numbers on colored popsicle sticks; or print and cut them from our
            website! To include fine motor skills practice, you could even let
            your child draw numbers using their fingers and a small amount of
            paint.
          </p>
        </div>
        <div className="charlie-iframe">
          <iframe
            width="800"
            height="400"
            src="https://player.vimeo.com/video/388947729?dnt=1&app_id=122963&autoplay=1"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
