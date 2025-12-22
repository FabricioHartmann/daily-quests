import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";
import { ModalRoot } from "./components/Modal/ModalRoot";
import { EffectsLayer } from "./components/EffectsLayer/EffectsLayer.component";
import { MainLayout } from "./layouts/MainLayout";
import { useEffect } from "react";
import { initRewardListener } from "./hooks/initRewardListener/initRewardListener";
import { Toaster } from "sonner";

function App() {
  useEffect(() => {
    initRewardListener();
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-right" duration={5000}/>
      <EffectsLayer />
      <ModalRoot />
      <Routes>
        <Route element={<MainLayout />}>
          {appRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
