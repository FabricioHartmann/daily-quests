import "./Input.styles.css";
import type { InputProps } from "./Input.types";

export function Input({
  label,
  id,
  error,
  ...inputProps
}: InputProps) {
  const inputId = id ?? `input-field-${label.replace(/\s+/g, "-")}`;

  return (
    <div className="input-field">
      <label className="input-label" htmlFor={inputId}>
        {label}
      </label>

      <div className="input-field-wrapper">
        <input id={inputId} className="input-field-inside" {...inputProps} />
      </div>

      {error && <span className="input-field-error">{error}</span>}
    </div>
  );
}
