"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export function useTodoInput(onCreate: (text: string) => void) {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onCreate(value);
    setValue("");
  };

  return { value, handleChange, handleSubmit };
}
