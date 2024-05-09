"use client";
import InfoBarWelcome from "./infoBarWelcome";
import InfoBarNav from "./infoBarNavigation/infoBarNav";
import { useState, useEffect } from "react";

export default function InfoBar() {
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, [window.addEventListener("resize", handleResize)]);

  return (
    <>
      {isDesktop ? (
        <div className="flex justify-between z-50 max-w-[810px] mx-auto text-night3 ">
          <InfoBarWelcome brandName="CyberMall" />
          <InfoBarNav />
        </div>
      ) : (
        <p>This is Mobile</p>
      )}
    </>
  );
}
