import React, { useState, useEffect, useRef } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const isScrollingFromClick = useRef(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      if (isScrollingFromClick.current) return;

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id, e) => {
    e.preventDefault();
    isScrollingFromClick.current = true;
    setActiveNav(id);
    scrollPositionRef.current = window.scrollY; // Store initial scroll position

    window.scrollTo({
      top: id === "#" ? 0 : document.querySelector(id).offsetTop - 80,
      behavior: "smooth",
    });

    const checkScrollEnd = () => {
      requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        const scrollDifference = Math.abs(currentScroll - scrollPositionRef.current);

        if (scrollDifference <= 5) { // Adjust threshold as needed
          isScrollingFromClick.current = false;
        } else {
          scrollPositionRef.current = currentScroll;
          checkScrollEnd(); // Continue checking
        }
      });
    };

    checkScrollEnd(); // Start checking for scroll end
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