import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModalRoot } from "./components/Modal/ModalRoot";
import { EffectsLayer } from "./components/EffectsLayer/EffectsLayer.component";
import { MainLayout } from "./layouts/MainLayout";
import { useEffect, Suspense } from "react";
import { initRewardListener } from "./utils/initRewardListener";
import { Toaster } from "sonner";
import { WelcomeModal } from "./components/Modal/variants/WelcomeModal";
import { useModalStore } from "./store/modal/modal.store";
import { useProfileStore } from "./store/profile/profile.store";
import { initExpeditionListener } from "./utils/initExpeditionListener";
import { initRitualListener } from "./utils/initRitualListener";
import { useQuestStore } from "./store/quests/quests.store";
import { appRoutes } from "./routes";

function App() {
  const openModal = useModalStore((s) => s.openModal);
  const profile = useProfileStore((s) => s.profile);

  useEffect(() => {
    initRewardListener();
    initRitualListener();
    initExpeditionListener();
    if (profile.firstAccess === true) {
      openModal(<WelcomeModal />);
    }
  }, []);

  useEffect(() => {
    useQuestStore.getState().resetQuestsIfNeeded();
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-right" duration={6000} />
      <EffectsLayer />
      <ModalRoot />

      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
