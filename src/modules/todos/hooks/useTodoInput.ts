"use client";

import { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

export function useTodoInput(onCreate: (text: string) => void) {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    onCreate(value);
    setValue("");
  };

  return { value, handleChange, handleKeyDown };
}
