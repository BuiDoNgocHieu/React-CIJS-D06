import "../assets/css/SiderBar.css";

function SiderBar(props) {
  return (
    <div className="siderbar-cont">
      <div className="siderbar-image">
        <img
          src="https://curiousworld-static-files.s3.amazonaws.com/cw_files/character-banner.png"
          alt=""
        />
      </div>
      <div className="siderbar-contai">
        <p>
          Children are the future of a country, so the education and teaching of
          children need to be more focused. If you are a parent, or maybe a
          brother or sister, then you will probably be interested in how to
          raise your children in the safest and most appropriate way. Let us:
        </p>
      </div>
      <div className="siderbar-title">
        <h2>
          <a href="/">EDUCATION KIDS</a>
        </h2>
      </div>
      <div className="siderbar-contai">
        <p>accompany your child's steps.</p>
      </div>
      <div className="siderbar-advantages">
        <small>Our properties</small>
        <p>
          ☛ A safe environment for children to see and for parents to trust.
        </p>
        <p>☛ 100% commercial free.</p>
        <p>
          ☛ Programs are created with the help of child development
          professionals.
        </p>
        <p>☛ Available to you and your baby 24 hours a day.</p>
        <p>
          ☛ Food service exclusively for your family according to a daytime and
          nighttime schedule.
        </p>
        <p>
          ☛ Our content is available in many different languages to address
          multicultural families
        </p>
        <p>
          ☛ Fun and creative shows with inspirational characters that your child
          can relate to
        </p>
      </div>
    </div>
  );
}

export { SiderBar };
