"use client";

import React from "react";

// Define an interface for the props
interface InfoBarWelcomeProps {
  brandName: string;
}

export default function InfoBarWelcome({ brandName }: InfoBarWelcomeProps) {
  const greeting: string = `Welcome to ${brandName}!`;
  return (
    <div className="flex justify-center items-center">
      <p className="text-xs">{greeting}</p>
    </div>
  );
}
