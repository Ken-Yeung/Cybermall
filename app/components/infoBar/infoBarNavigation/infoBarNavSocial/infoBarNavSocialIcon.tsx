import React from "react";

import { CiInstagram } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";

export default function infoBarNavSocialIcon() {
  // Define the social media URLs
  const facebookUrl = "https://www.facebook.com";
  const instagramUrl = "https://www.instagram.com";

  return (
    <div className="flex flex-row gap-2">
      <a href={facebookUrl} target="_blank" rel="noreferrer">
        <FaFacebookSquare />
      </a>

      <a href={instagramUrl} target="_blank" rel="noreferrer">
        <CiInstagram />
      </a>
    </div>
  );
}
