import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [scrollingByClick, setScrollingByClick] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      if (scrollingByClick) return; // Ignore auto scroll updates if user clicked

      let current = "#";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = `#${section.id}`;
        }
      });

      setActiveNav(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollingByClick]);

  const handleNavClick = (id, e) => {
    e.preventDefault();
    setActiveNav(id);
    setScrollingByClick(true);

    window.scrollTo({
      top: id === "#" ? 0 : document.querySelector(id).offsetTop - 80,
      behavior: "smooth",
    });

    const checkIfScrollFinished = () => {
      const section = id === "#" ? document.body : document.querySelector(id);
      const sectionTop = section.offsetTop - 80;

      if (Math.abs(window.scrollY - sectionTop) < 5) {
        setScrollingByClick(false);
        return;
      }
      requestAnimationFrame(checkIfScrollFinished);
    };

    requestAnimationFrame(checkIfScrollFinished);
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
