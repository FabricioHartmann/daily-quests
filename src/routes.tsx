import type { JSX } from "react";
import { Home } from "./pages/Home";
import { Quests } from "./pages/Quests";
import { MyProfile } from "./pages/MyProfile";
import { Expedition } from "./pages/Expedition";
import { Rituals } from "./pages/Rituals";

export interface AppRoute {
  path: string;
  element: JSX.Element;
}

export const appRoutes: AppRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/perfil", element: <MyProfile /> },
  { path: "/quests", element: <Quests /> },
  { path: "/rituais", element: <Rituals /> },
  { path: "/expedicao", element: <Expedition /> },
];
