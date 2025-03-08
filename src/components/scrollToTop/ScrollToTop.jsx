import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrolltotop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {visible && (
        <button className="scroll-to-top" onClick={scrollTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
