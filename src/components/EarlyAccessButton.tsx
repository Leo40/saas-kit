// components/EarlyAccessButton.tsx
"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
// Import your Dialog/Modal component here

export default function EarlyAccessButton() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open ? true : false}
        variant="outline"
        className="rounded-full ..."
      >
        Get Early Access
      </Button>
      {/* 
        Your Dialog/Modal component would go here, 
        controlled by the 'open' state.
      */}
    </>
  );
}
