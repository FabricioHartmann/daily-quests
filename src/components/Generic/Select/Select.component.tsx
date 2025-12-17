import type { QuestSelectProps } from "./Select.types";
import "./Select.styles.css";

export function Select({
  label,
  options,
  error,
  id,
  ...props
}: QuestSelectProps) {
  const selectId = id ?? `select-field-${label.replace(/\s+/g, "-")}`;

  return (
    <div className="input-field">
      <label className="input-label" htmlFor={selectId}>
        {label}
      </label>

      <div className="select-input-wrapper">
        <select id={selectId} className="select-input" {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {error && <span className="select-input-error">{error}</span>}
    </div>
  );
}
