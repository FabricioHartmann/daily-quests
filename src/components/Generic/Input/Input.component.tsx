import "./Input.styles.css";
import type { InputProps } from "./Input.types";

export function Input({
  label,
  id,
  error,
  ...inputProps
}: InputProps) {
  const inputId = id ?? `quest-input-${label.replace(/\s+/g, "-")}`;

  return (
    <div className="quest-field">
      <label className="quest-label" htmlFor={inputId}>
        {label}
      </label>

      <div className="quest-input-wrapper">
        <input id={inputId} className="quest-input" {...inputProps} />
      </div>

      {error && <span className="quest-input-error">{error}</span>}
    </div>
  );
}
