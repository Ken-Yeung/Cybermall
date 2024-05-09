"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function infoBarNavLan() {
  // The Value here for testing the dropdown and Styling
  const languagesChoice = ["ENG", "CHN", "FR", "JPN"]; // Add more languages here

  const [currentLanguage, setCurrentLanguage] = useState("ENG");

  const [isOpen, setOpen] = useState(false);

  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    // Clear the timeout when mouse enters the dropdown
    clearTimeout(timeoutId);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown when mouse leaves it
    timeoutId = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div className="relative">
      <div
        className="pl-2 flex flex-row justify-center items-center gap-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex flex-row gap-1 justify-center items-center">
          {currentLanguage}
          <IoIosArrowDown />
        </button>
      </div>
      <div
        className={`absolute top-6 pl-2 pr-4 py-1 flex flex-col gap-3 bg-night3 ${
          isOpen ? "" : "hidden"
        }`}
        onMouseEnter={handleMouseEnter} // Keep dropdown open when mouse is over it
        onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves it
      >
        {languagesChoice
          .filter((language) => language !== currentLanguage)
          .map((language) => (
            <button
              className="text-left"
              key={language}
              onClick={() => {
                setOpen(false);
                setCurrentLanguage(language);
              }}
            >
              {language.toUpperCase()}
            </button>
          ))}
      </div>
    </div>
  );
}
