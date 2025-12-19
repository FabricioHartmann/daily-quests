export type MenuItem = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

export type MenuProps = {
  items: MenuItem[];
  trigger: React.ReactNode;
  align?: "left" | "right";
};