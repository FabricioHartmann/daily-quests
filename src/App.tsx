import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";
import { ModalRoot } from "./components/Modal/ModalRoot";

function App() {
  return (
    <BrowserRouter>
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
