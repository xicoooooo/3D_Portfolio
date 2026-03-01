import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Budget App" />
            </div>
            <div className="text-content">
              <h2>
                Smarter Budgeting Starts Here
              </h2>
              <p className="text-white-50 md:text-xl">
                Stay on top of your spending with a fast, intuitive app designed to track expenses, set budgets, and give you clear insights into your financial habits — all with a sleek and modern interface!
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl py-0 bg-[#FFEFDB]">
                <img
                    src="/images/project2.png"
                    alt="Daily Voice Recorder"
                    className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h2>Simple and Intuitive Voice Recorder</h2>
              <div className="text-content">
                <p className="text-white-50 md:text-xl mt-4">
                  Record your thoughts and ideas on the go with a clean, easy-to-use interface. Perfect for daily notes, reminders, and quick audio memos.
                </p>
              </div>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl py-0 bg-[#FFE7EB]">
                <img
                    src="/images/project3.png"
                    alt="Hélder & Susana Lda (H&S Lda)"
                    className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h2>Website for Hélder & Susana Lda.</h2>
              <div className="text-content">
                <p className="text-white-50 md:text-xl mt-4">
                  A fully custom website developed for Hélder & Susana Lda, an auto repair shop in Viseu. Designed and built from scratch to showcase their services and facilitate customer contact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;