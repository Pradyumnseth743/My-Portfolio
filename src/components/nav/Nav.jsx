import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [clickedNav, setClickedNav] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      if (clickedNav) return; // Agar kisi tab pe click kiya gaya hai, toh scroll ignore karega

      let currentSection = "#";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveNav(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [clickedNav]);

  const handleNavClick = (id, e) => {
    e.preventDefault();
    setClickedNav(id);
    setActiveNav(id);

    window.scrollTo({
      top: id === "#" ? 0 : document.querySelector(id).offsetTop - 80,
      behavior: "smooth",
    });

    setTimeout(() => {
      setClickedNav(null); // 1.5 sec baad scroll update firse allow karega
    }, 1500);
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
