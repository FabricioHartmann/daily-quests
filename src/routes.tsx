import type { JSX } from "react";
import { Home } from "./pages/Home";
import { Quests } from "./pages/Quests";

export interface AppRoute {
  path: string;
  element: JSX.Element;
}

export const appRoutes: AppRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/quests", element: <Quests /> },
];
