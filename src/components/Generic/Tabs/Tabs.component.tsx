import type { TabsProps } from "./Tabs.types";
import { Text } from "../../Generic";
import "./Tabs.styles.css";

export function Tabs<T extends string>({
  options,
  value,
  onChange,
  activeColor = "var(--btn-bg-primary)",
}: TabsProps<T>) {
  return (
    <div className="tabs-container">
      {options.map((tab) => {
        const isActive = tab.value === value;

        return (
          <button
            key={tab.value}
            className={`tab ${isActive ? "tab-active" : ""}`}
            style={
              isActive
                ? ({ "--tab-active-bg": activeColor } as React.CSSProperties)
                : undefined
            }
            onClick={() => onChange(tab.value)}
          >
            <Text weight={isActive ? 600 : 500} color={isActive ? "var(--black)" : "var(--white)"}>
              {tab.label}
            </Text>
          </button>
        );
      })}
    </div>
  );
}
