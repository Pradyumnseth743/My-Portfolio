import React, { useState, useEffect, useRef } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const isScrollingFromClick = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      if (isScrollingFromClick.current) return; // Prevent auto-scroll update during manual navigation

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
    isScrollingFromClick.current = true; // Disable auto-update

    setActiveNav(id);
    window.scrollTo({
      top: id === "#" ? 0 : document.querySelector(id).offsetTop - 80,
      behavior: "smooth",
    });

    // Wait for smooth scrolling to finish, then re-enable auto-update
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      isScrollingFromClick.current = false;
    }, 500); // Adjust delay based on scrolling behavior
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
