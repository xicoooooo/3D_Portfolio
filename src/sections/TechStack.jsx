import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader.jsx";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience.jsx";
import { techStackIcons } from "../constants/index.js";

const TechStack = () => {
  // animate the tech cards in the skills section
  useGSAP(() => {
    // this animation is triggered when the user scrolls to the #skills wrapper
    // the animation starts when the top of the wrapper is at the center of the screen
    // the animation is staggered, meaning each card will animate in sequence
    // the animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {

        // initial values
        y: 50, // move the cards down by 50px
        opacity: 0, // set the opacity to 0
      },
      {

        // final values
        y: 0, // move the cards back to the top
        opacity: 1, // set the opacity to 1
        duration: 1, // duration of the animation
        ease: "power2.inOut", // ease of the animation
        stagger: 0.2, // stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Some of My Skills"
          sub="🤝 How can I Help"
        />
        <div className="tech-grid">
          {/* loop through the techStackIcons array and create a component for each item.
              the key is set to the name of the tech stack icon, and the classnames are set to card-border, tech-card, overflow-hidden, and group. */}
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* the tech-card-animated-bg div is used to create a background animation when the component is hovered. */}
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                {/* the tech-icon-wrapper div contains the TechIconCardExperience component, which renders the 3D model of the tech stack icon. */}
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                {/* the padding-x and w-full classes are used to add horizontal padding to the text and make it take up the full width of the component. */}
                <div className="padding-x w-full">
                  {/* the p tag contains the name of the tech stack icon. */}
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
