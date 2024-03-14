import "./AboutMeSection.scss";

const AboutMeSection = () => {
  return (
    <div className="aboutme">
      <div className="aboutme__img">
        <img
          src={"/assets/images/black-and-white-saitama.jpg"}
          alt="anandureghu-profile-img"
        />
      </div>
      <div className="aboutme__content">
        <div className="aboutme__content--title">ABOUT ME</div>
        <div className="aboutme__content--details">
          Hello, my name is Aaron Loeb. I am 23 years old and have a hobby of
          photography. I am a photographer with 3 years experience as a food and
          landscape photography portrait photographer. I started my career in
          photographer since I was 19 years old.
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
