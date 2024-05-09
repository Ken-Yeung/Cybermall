"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function infoBarNavMyAccount() {
  const router = useRouter();
  return (
    <div className="pl-2">
      <button
        onClick={() => {
          router.push("#");
        }}
      >
        My Account
      </button>
    </div>
  );
}
