"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import React from "react";

export default function TestButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/next");
      }}
    >
      Press Me
    </Button>
  );
}
