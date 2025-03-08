import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    let scrollTimeout;

    const handleScroll = () => {
      if (isClicked) return; // Ignore scroll update if a tab was recently clicked

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        let current = "#";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 150;
          const sectionHeight = section.clientHeight;

          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = `#${section.id}`;
          }
        });

        setActiveNav(current);
      }, 150); // Slightly higher debounce delay for smoother updates
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isClicked]);

  const handleNavClick = (id, e) => {
    e.preventDefault();
    setIsClicked(true);
    setActiveNav(id);

    window.scrollTo({
      top: id === "#" ? 0 : document.querySelector(id).offsetTop - 80,
      behavior: "smooth",
    });

    // Prevent scroll event from overriding activeNav too soon
    setTimeout(() => {
      setIsClicked(false);
    }, 1200); // Increased delay ensures sync after smooth scrolling
  };

  return (
    <nav>
      <a href="#" onClick={(e) => handleNavClick("#", e)} className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={(e) => handleNavClick("#about", e)} className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={(e) => handleNavClick("#experience", e)} className={activeNav === "#experience" ? "active" : ""}>
        <BiBook />
      </a>
      <a href="#services" onClick={(e) => handleNavClick("#services", e)} className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={(e) => handleNavClick("#contact", e)} className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
