import { lazy } from "react";

export interface AppRoute {
  path: string;
  element: React.ReactNode;
}

const Home = lazy(() => import("./pages/Home"));
const MyProfile = lazy(() => import("./pages/MyProfile"));
const Quests = lazy(() => import("./pages/Quests"));
const Rituals = lazy(() => import("./pages/Rituals"));
const Expedition = lazy(() => import("./pages/Expedition"));

export const appRoutes: AppRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/perfil", element: <MyProfile /> },
  { path: "/quests", element: <Quests /> },
  { path: "/rituais", element: <Rituals /> },
  { path: "/expedicao", element: <Expedition /> },
];
