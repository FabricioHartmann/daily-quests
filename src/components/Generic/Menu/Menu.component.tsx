import { useState, useRef } from "react";
import type { MenuProps } from "./Menu.types";
import { useClickOutside } from "../../../hooks/UseClickOutside";
import { Text } from "../../Generic";
import "./Menu.styles.css";

export function Menu({ trigger, items, align = "right" }: MenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setOpen(false));

  return (
    <div ref={menuRef} className="menu">
      <button
        type="button"
        className="menu-trigger"
        onClick={() => setOpen((prev) => !prev)}
      >
        {trigger}
      </button>

      {open && (
        <div className={`menu-content menu-content-${align}`}>
          {items.map((item, index) => (
            <button
              key={index}
              type="button"
              className={`menu-item${
                item.disabled ? " menu-item-disabled" : ""
              }`}
              onClick={() => {
                if (!item.disabled) {
                  item.onClick();
                  setOpen(false);
                }
              }}
              disabled={item.disabled}
            >
              <Text italic color="var(--black)">{item.label}</Text>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
