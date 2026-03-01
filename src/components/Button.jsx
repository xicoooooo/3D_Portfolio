const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // stop the link from jumping instantly

        const target = document.getElementById("counter"); // find the section with ID "counter"

        // only scroll if we found the section and an ID is passed in that prevents the contact button from scrolling to the top
        if (target && id) {
          const offset = window.innerHeight * 0.15; // leave a bit of space at the top

          // calculate how far down the page we need to scroll
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          // scroll smoothly to that position
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
