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
        <div className="images">
          <img
            src="https://www.babytv.com/app/themes/babytv/resources/assets/images/side-jirrafe.png"
            alt=""
          />
        </div>

        <div className="homePage-control">
          <div className="thanhchon">
            <input className="idol" type="button" value="Mẫu giáo" />
            <input className="cl" type="button" value="Cấp 1" />
            <input className="fe" type="button" value="Cấp 2" />
            <input className="danhmuc" type="button" value="Tất cả danh mục" />
            <ul></ul>
          </div>
          <div className="Entertainment">
            <h2>Entertainment corner</h2>
          </div>
          <div className="homePage-cont-border">
            <div className="cot1">
              <div className="homePage-BeepBeep">
                <a className="so1" href="/beepbeep">
                  <div className="img-beepbeep">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-BeepBeep-280x160.jpg"
                      alt="Beep Beep"
                    />
                  </div>
                  <div className="small-beepbeep">
                    <h3>Beep Beep</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-billy">
                <a className="so2" href="/billy&bambam">
                  <div className="img-billy">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-BillyBamBam-1-280x160.jpg"
                      alt="Billy & BamBam"
                    />
                  </div>
                  <div className="small-billy">
                    <h3>Billy & BamBam</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-matinee">
                <a className="so3" href="/matinee">
                  <div className="img-matinee">
                    <img
                      src="https://www.babytv.com/app/uploads/2020/08/MiniMatinee-Featured-Imag-280x160.jpg"
                      alt="Matinee nhỏ"
                    />
                  </div>
                  <div className="small-matinee">
                    <h3>Mini Matinee</h3>
                  </div>
                </a>
              </div>
            </div>

            <div className="cot2">
              <div className="homePage-BeepBeep">
                <a className="so1" href="/dino">
                  <div className="img-beepbeep">
                    <img
                      src="https://www.babytv.com/app/uploads/2020/12/DinoFeatured-Image-280x160.jpg"
                      alt="Beep Beep"
                    />
                  </div>
                  <div className="small-beepbeep">
                    <h3>Dino & the Egg Hunt</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-billy">
                <a className="so2" href="/charlie">
                  <div className="img-billy">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-CharlieNumbers-280x160.jpg"
                      alt="Charlie & the Numbers"
                    />
                  </div>
                  <div className="small-billy">
                    <h3>Charlie & the Numbers</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-matinee">
                <a className="so3" href="/ahoy">
                  <div className="img-matinee">
                    <img
                      src="https://www.babytv.com/app/uploads/2020/04/Pirates-Featured_Image-280x160.jpg"
                      alt="Ahoy Pirates"
                    />
                  </div>
                  <div className="small-matinee">
                    <h3>Ahoy Pirates</h3>
                  </div>
                </a>
              </div>
            </div>

            <div className="cot3">
              <div className="homePage-BeepBeep">
                <a className="so1" href="">
                  <div className="img-beepbeep">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-TinyBuntch-280x160.jpg"
                      alt="The Tini Bunch"
                    />
                  </div>
                  <div className="small-beepbeep">
                    <h3>The Tini Bunch</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-billy">
                <a className="so2" href="">
                  <div className="img-billy">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/12/Featured-Image-FlipFlash-280x160.jpg"
                      alt="Flip & Flast"
                    />
                  </div>
                  <div className="small-billy">
                    <h3>Flip & Flast</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-matinee">
                <a className="so3" href="">
                  <div className="img-matinee">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-Snuggle-1-280x160.jpg"
                      alt="Snuggle Puppets"
                    />
                  </div>
                  <div className="small-matinee">
                    <h3>Snuggle Puppets</h3>
                  </div>
                </a>
              </div>
            </div>

            <div className="cot4">
              <div className="homePage-BeepBeep">
                <a className="so1" href="/dino">
                  <div className="img-beepbeep">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-Circus-280x160.jpg"
                      alt="Beep Beep"
                    />
                  </div>
                  <div className="small-beepbeep">
                    <h3>The Circus Comes to Town</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-billy">
                <a className="so2" href="/charlie">
                  <div className="img-billy">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-LetsDance1-280x160.jpg"
                      alt="Charlie & the Numbers"
                    />
                  </div>
                  <div className="small-billy">
                    <h3>Let's Dance</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-matinee">
                <a className="so3" href="/ahoy">
                  <div className="img-matinee">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-BabytVStudios-280x160.jpg"
                      alt="Ahoy Pirates"
                    />
                  </div>
                  <div className="small-matinee">
                    <h3>Edukation Kids Studios</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="cot5">
              <div className="homePage-BeepBeep">
                <a className="so1" href="/beepbeep">
                  <div className="img-beepbeep">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-JumpOut1-280x160.jpg"
                      alt="Beep Beep"
                    />
                  </div>
                  <div className="small-beepbeep">
                    <h3>Jump Out of Bed Sleepy Head</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-billy">
                <a className="so2" href="/billy&bambam">
                  <div className="img-billy">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-CharlieShapes-280x160.jpg"
                      alt="Billy & BamBam"
                    />
                  </div>
                  <div className="small-billy">
                    <h3>Charlie & the Shapes</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-matinee">
                <a className="so3" href="/matinee">
                  <div className="img-matinee">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-Toto-280x160.jpg"
                      alt="Matinee nhỏ"
                    />
                  </div>
                  <div className="small-matinee">
                    <h3>Toto’s Kindergarten</h3>
                  </div>
                </a>
              </div>
            </div>

            <div className="cot6">
              <div className="homePage-BeepBeep">
                <a className="so1" href="/dino">
                  <div className="img-beepbeep">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-MonaSketch-2-280x160.jpg"
                      alt="Beep Beep"
                    />
                  </div>
                  <div className="small-beepbeep">
                    <h3>Mona & Sketch</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-billy">
                <a className="so2" href="/charlie">
                  <div className="img-billy">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/12/Featured-Image-AnimalParty1-280x160.jpg"
                      alt="Charlie & the Numbers"
                    />
                  </div>
                  <div className="small-billy">
                    <h3>Animal Party</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-matinee">
                <a className="so3" href="/ahoy">
                  <div className="img-matinee">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-Tulli-280x160.jpg"
                      alt="Ahoy Pirates"
                    />
                  </div>
                  <div className="small-matinee">
                    <h3>Tulli</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="cot7">
              <div className="homePage-BeepBeep">
                <a className="so1" href="">
                  <div className="img-beepbeep">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-LookWhat-280x160.jpg"
                      alt="The Tini Bunch"
                    />
                  </div>
                  <div className="small-beepbeep">
                    <h3>Look What I Found</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-billy">
                <a className="so2" href="">
                  <div className="img-billy">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-LaleKi-280x160.jpg"
                      alt="Flip & Flast"
                    />
                  </div>
                  <div className="small-billy">
                    <h3>Lale Ki Lolu</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-matinee">
                <a className="so3" href="">
                  <div className="img-matinee">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-CharlieABC-280x160.jpg"
                      alt="Snuggle Puppets"
                    />
                  </div>
                  <div className="small-matinee">
                    <h3>Charlie & the Alphabet</h3>
                  </div>
                </a>
              </div>
            </div>

            <div className="cot8">
              <div className="homePage-BeepBeep">
                <a className="so1" href="/dino">
                  <div className="img-beepbeep">
                    <img
                      src="https://www.babytv.com/app/uploads/2020/01/Featured-Image-KennyGoorier-280x160.jpg"
                      alt="Beep Beep"
                    />
                  </div>
                  <div className="small-beepbeep">
                    <h3>Kenny & Goorier</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-billy">
                <a className="so2" href="/charlie">
                  <div className="img-billy">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/12/Featured-Image-NicoBianca-280x160.jpg"
                      alt="Charlie & the Numbers"
                    />
                  </div>
                  <div className="small-billy">
                    <h3>Nico & Bianca</h3>
                  </div>
                </a>
              </div>
              <div className="homePage-matinee">
                <a className="so3" href="/ahoy">
                  <div className="img-matinee">
                    <img
                      src="https://www.babytv.com/app/uploads/2019/11/Featured-Image-BabytVStudios-280x160.jpg"
                      alt="Ahoy Pirates"
                    />
                  </div>
                  <div className="small-matinee">
                    <h3>Edukation Kids Studios</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
