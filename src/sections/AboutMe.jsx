import { aboutMe } from "../constants/index.js";
import TitleHeader from "../components/TitleHeader.jsx";
import GlowCard from "../components/GlowCard.jsx";

const AboutMe = () => {
  return (
    <section id="aboutme" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Learn More About Me?"
          sub="⭐️ Some of my highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {aboutMe.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={testimonial.imgPath} alt="" className="object-cover w-full h-full"/>
                </div>
                <div>
                  <p className="font-bold">{testimonial.title}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
