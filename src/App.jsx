import AboutMe from "./sections/AboutMe.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";
import TechStack from "./sections/TechStack.jsx";
import Journey from "./sections/Journey.jsx";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/Projects.jsx";
import LogoShowcase from "./sections/LogoShowcase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Navbar from "./components/NavBar.jsx";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Journey />
    <TechStack />
    <AboutMe />
    <Contact />
    <Footer />
  </>
);

export default App;
