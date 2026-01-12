import type { CheckboxProps } from "./Checkbox.types";
import { Text } from "../../Generic";
import './Checkbox.styles.css'

export function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
}: CheckboxProps) {
  return (
    <label
      className={`checkbox ${className}`}
      data-checked={checked || undefined}
      data-disabled={disabled || undefined}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />

      <span className="checkbox-box" />

      {label && <Text renderAs="span" className="checkbox-label">{label}</Text>}
    </label>
  );
}
