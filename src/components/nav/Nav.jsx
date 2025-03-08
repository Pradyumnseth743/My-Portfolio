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
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClicked) return; // Prevent auto-switch while manually scrolling

        let currentSection = "#";
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection = `#${entry.target.id}`;
          }
        });

        setActiveNav(currentSection);
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isClicked]);

  const handleNavClick = (id, e) => {
    e.preventDefault();
    setIsClicked(true);
    setActiveNav(id);

    window.scrollTo({
      top: id === "#" ? 0 : document.querySelector(id).offsetTop - 80,
      behavior: "smooth",
    });

    // Unlock scroll syncing after transition finishes
    setTimeout(() => {
      setIsClicked(false);
    }, 1200);
  };

  return (
    <nav>
      <a href="#" 
         onClick={(e) => handleNavClick("#", e)} 
         className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" 
         onClick={(e) => handleNavClick("#about", e)} 
         className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" 
         onClick={(e) => handleNavClick("#experience", e)} 
         className={activeNav === "#experience" ? "active" : ""}>
        <BiBook />
      </a>
      <a href="#services" 
         onClick={(e) => handleNavClick("#services", e)} 
         className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#contact" 
         onClick={(e) => handleNavClick("#contact", e)} 
         className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
