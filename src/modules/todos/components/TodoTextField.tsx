import type { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

interface TodoTextFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export function TodoTextField({
  value,
  onChange,
  onKeyDown,
  onBlur,
  placeholder,
  autoFocus,
}: TodoTextFieldProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-100"
    />
  );
}
