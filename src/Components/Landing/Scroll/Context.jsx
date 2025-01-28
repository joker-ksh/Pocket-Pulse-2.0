import React, { createContext, useRef } from "react";
import Navbar from "../Navbar";

// Create Context
export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  // Refs for each section
  const sectionRefs = {
    Home: useRef(null),
    Navbar: useRef(null),
    Card: useRef(null),
  };

  // Scroll handler
  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, sectionRefs }}>
      {children}
    </ScrollContext.Provider>
  );
};
