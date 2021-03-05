import "../assets/css/HomePage.css";
export function HomePage(props) {
  console.log(props.userId);
  return (
    <div className="homePage-cont">
      <div className="homePage-slogan">
        <input
          type="button"
          value="Đăng Xuất"
          onClick={() => {
            props.trySignOut({});
          }}
        />
        <h1>E.Kids We're Here For Your Kids</h1>
      </div>
      <div className="homePage-content">
        <div className="image">
          <img src="hi.png" alt="ahihi" />
        </div>

        <div className="homePage-control">
          <div className="homePage-cont-border">
            <div className="homePage-BeepBeep">
              <div className="img-beepbeep">
                <img
                  src="https://www.babytv.com/app/uploads/2019/11/Beep-Circle.png"
                  alt="Beep Beep"
                />
              </div>
              <div className="a-beepbeep">
                <a href="/beepbeep">
                  <h3>Beep Beep</h3>
                </a>
              </div>
            </div>

            <div className="homePage-Billy">
              <div className="img-billy">
                <img
                  src="https://www.babytv.com/app/uploads/2020/12/Billy-Circle2.png"
                  alt="Billy & BamBam"
                />
              </div>
              <div className="a-billy">
                <a href="/billy&bambam">
                  <h3>Billy & BamBam</h3>
                </a>
              </div>
            </div>

            <div className="homePage-matinee">
              <div className="img-matinee">
                <img
                  src="https://www.babytv.com/app/uploads/2020/12/Mini-Matineei1-Circle.png"
                  alt="Matinee nhỏ"
                />
              </div>
              <div className="a-matinee">
                <a href="/matinee">
                  <h3>Mini Matinee</h3>
                </a>
              </div>
            </div>

            <div className="homePage-dino">
              <div className="img-dino">
                <img
                  src="https://www.babytv.com/app/uploads/2021/01/Dino-Circle2.png"
                  alt="Dino & the Egg Hunt"
                />
              </div>
              <div className="a-dino">
                <a href="/dino">
                  <h3>Dino & the Egg Hunt</h3>
                </a>
              </div>
            </div>

            <div className="homePage-charlie">
              <div className="img-charlie">
                <img
                  src="https://www.babytv.com/app/uploads/2021/01/Charlie-circle.png"
                  alt="Charlie & the Number"
                />
              </div>
              <div className="a-charlie">
                <a href="/charlie">
                  <h3>Charlie & the Numbers</h3>
                </a>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.babytv.com/app/uploads/2020/05/Pirates-Circle.png"
                  alt="Ahoy Pirates"
                />
              </div>
              <div>
                <a href="/ahoy">
                  <h3>Ahoy Pirates</h3>
                </a>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.babytv.com/app/uploads/2019/07/lola.png"
                  alt="Little Lola thăm trang trại"
                />
              </div>
              <div>
                <a href="">
                  <h3>Little Lola thăm trang trại</h3>
                </a>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.babytv.com/app/uploads/2019/12/Pim-_-Pimba-Circle-Shows.png"
                  alt="Pim & Pimba"
                />
              </div>
              <div>
                <a href="">
                  <h3>Pim & Pimba</h3>
                </a>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.babytv.com/app/uploads/2019/12/Bugs-Circle-Shows.png"
                  alt="Ban nhạc Big Bugs"
                />
              </div>
              <div>
                <a href="">
                  <h3>Ban nhạc Big Bugs</h3>
                </a>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.babytv.com/app/uploads/2019/12/stick-with-Mick-Circle-Shows.png"
                  alt="Gắn bó với Mick"
                />
              </div>
              <div>
                <a href="">
                  <h3>Gắn bó với Mick</h3>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="images">
          <img
            src="https://www.babytv.com/app/themes/babytv/resources/assets/images/side-jirrafe.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
