import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { journeyCards } from "../constants/index.js";
import TitleHeader from "../components/TitleHeader.jsx";
import GlowCard from "../components/GlowCard.jsx";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  useGSAP(() => {
    // loop through each timeline card and animate them in as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {

      // animate the card coming in from the left and fade in
      gsap.from(card, {
        xPercent: -100, // move the card in from the left
        opacity: 0, // ake the card invisible at the start
        transformOrigin: "left left", // set the origin of the animation to the left side of the card
        duration: 1, // animate over 1 second
        ease: "power2.inOut", // use a power2 ease-in-out curve

        // trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          trigger: card, // the card is the trigger element
          start: "top 80%", // trigger the animation when the card is 80% down the screen
        },
      });
    });

    // animate the timeline height as the user scrolls from the top of the timeline to 70% down the screen
    // the timeline height should scale down from 1 to 0 as the user scrolls up the screen
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom", // set the origin of the animation to the bottom of the timeline
      ease: "power1.inOut", // animate the timeline height over 1 second

      // trigger the animation when the timeline is at the top of the screen and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",

        // update the animation as the user scrolls
        onUpdate: (self) => {
          // scale the timeline height as the user scrolls from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // loop through each journeyText element and animate them in as the user scrolls to each text element
    gsap.utils.toArray(".journeyText").forEach((text) => {
      // animate the text opacity from 0 to 1 and move it from the left to its final position over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<"); // position parameter > insert at the start of the animation
  }, []);

  return (
    <section
      id="journey"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="My Path So Far"
          sub="💼 My Journey Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {journeyCards.map((card) => (
              <div key={card.title} className="journey-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" style={{ width: "50%", height: "auto" }} />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="journeyText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" style={{ width: "70%", height: "auto" }} />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Key Activities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.keyActivities.map(
                            (keyActivities, index) => (
                              <li key={index} className="text-lg">
                                {keyActivities}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
