"use client";

import { useState } from "react";
import type { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

export function useTodoItemEditing(text: string, onUpdateText: (text: string) => void) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(text);

  const startEditing = () => {
    setDraft(text);
    setIsEditing(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDraft(event.target.value);
  };

  const commitEdit = (event: FocusEvent<HTMLInputElement>) => {
    onUpdateText(event.target.value);
    setIsEditing(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.currentTarget.blur();
    }
    if (event.key === "Escape") {
      setDraft(text);
      setIsEditing(false);
    }
  };

  return { isEditing, draft, startEditing, handleChange, commitEdit, handleKeyDown };
}
