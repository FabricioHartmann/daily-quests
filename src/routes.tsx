import type { JSX } from "react";
import { Home } from "./pages/Home";
import { Quests } from "./pages/Quests";
import { MyProfile } from "./pages/MyProfile";
import { Expedition } from "./pages/Expedition";

export interface AppRoute {
  path: string;
  element: JSX.Element;
}

export const appRoutes: AppRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/quests", element: <Quests /> },
  { path: "/perfil", element: <MyProfile /> },
  { path: "/expedicao", element: <Expedition /> },
];
