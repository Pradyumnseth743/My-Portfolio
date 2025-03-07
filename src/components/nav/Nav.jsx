import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  let isClicked = false; // Click Flag

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClicked) return; // Click Flag On hai to Observer ko Ignore karo

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = (id, e) => {
    e.preventDefault();
    setActiveNav(id);
    isClicked = true; // Flag ON

    window.scrollTo({
      top: id === "#" ? 0 : document.querySelector(id).offsetTop - 100,
      behavior: "smooth",
    });

    setTimeout(() => {
      isClicked = false; // Flag Reset
    }, 1200); // Scroll Animation ke baad Flag Band
  };

  return (
    <nav>
      <a
        href="#"
        onClick={(e) => handleClick("#", e)}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={(e) => handleClick("#about", e)}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={(e) => handleClick("#experience", e)}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={(e) => handleClick("#services", e)}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={(e) => handleClick("#contact", e)}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
