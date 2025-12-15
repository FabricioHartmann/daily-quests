import type { JSX } from "react";
import { Home } from "./pages/Home";
import { Quests } from "./pages/Quests";
import { Inventory } from "./pages/Inventory";
import { Achievments } from "./pages/Achievements";

export interface AppRoute {
  path: string;
  element: JSX.Element;
}

export const appRoutes: AppRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/quests", element: <Quests /> },
  { path: "/inventario", element: <Inventory /> },
  { path: "/conquistas", element: <Achievments /> },
];
