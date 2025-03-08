import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [manualClick, setManualClick] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      if (manualClick) return; // Agar click se aaya hai toh ignore karo

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
  }, [manualClick]);

  const handleNavClick = (id, e) => {
    e.preventDefault();
    setManualClick(true);
    setActiveNav(id);

    window.scrollTo({
      top: id === "#" ? 0 : document.querySelector(id).offsetTop - 100,
      behavior: "smooth",
    });

    setTimeout(() => {
      setManualClick(false);
    }, 700); // 700ms ke baad scroll event wapas active ho jayega
  };

  return (
    <nav>
      <a
        href="#"
        onClick={(e) => handleNavClick("#", e)}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={(e) => handleNavClick("#about", e)}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={(e) => handleNavClick("#experience", e)}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={(e) => handleNavClick("#services", e)}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={(e) => handleNavClick("#contact", e)}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
