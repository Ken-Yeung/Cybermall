"use client";

import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function infoBarNavTheme() {
  const themeChoice = ["Dark", "Light"]; // set theme choices
  const [isOpen, setOpen] = useState(false); // dropdown state
  const [currentTheme, setTheme] = useState("Dark");
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
      <div className="pl-2 flex flex-row justify-center items-center gap-1">
        <button
          className="flex flex-row gap-1 justify-center items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {currentTheme}
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
        {themeChoice
          .filter((theme) => theme !== currentTheme)
          .map((theme) => (
            <button
              className="text-left"
              key={theme}
              onClick={() => {
                setOpen(false);
                setTheme(theme);
              }}
            >
              {theme}
            </button>
          ))}
      </div>
    </div>
  );
}
