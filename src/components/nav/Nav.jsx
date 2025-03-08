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
      if (isScrollingFromClick.current) return; // Prevent auto-update during smooth scrolling

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
    window.addEventListener("touchmove", handleScroll); // Fix for mobile scroll detection

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  const handleNavClick = (id, e) => {
    e.preventDefault();
    isScrollingFromClick.current = true;

    setActiveNav(id);
    window.scrollTo({
      top: id === "#" ? 0 : document.querySelector(id).offsetTop - 80,
      behavior: "smooth",
    });

    // Detect when scrolling stops dynamically
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const detectScrollStop = () => {
      const initialScroll = window.scrollY;
      setTimeout(() => {
        if (window.scrollY === initialScroll) {
          isScrollingFromClick.current = false; // Re-enable scroll-based updates
        } else {
          detectScrollStop(); // Keep checking if still scrolling
        }
      }, 200); // Adjust for mobile scrolling inertia
    };

    detectScrollStop();
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
