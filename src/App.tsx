import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";
import { ModalRoot } from "./components/Modal/ModalRoot";
import { EffectsLayer } from "./components/EffectsLayer/EffectsLayer.component";

function App() {
  return (
    <BrowserRouter>
      <EffectsLayer />
      <ModalRoot />
      <Routes>
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
