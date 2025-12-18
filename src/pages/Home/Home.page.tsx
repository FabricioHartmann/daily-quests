import { useEffect, useMemo } from "react";
import { QuestCardList } from "../../components/Quest";
import { ProfileCard } from "../../components/Profile";
import { RenderIf } from "../../components/Generic";
import { useModalStore } from "../../store/modal/modal.store";
import { WelcomeModal } from "../../components/Modal/variants/WelcomeModal";
import { useProfileStore } from "../../store/profile/profile.store";
import "./Home.styles.css";
import { useQuestStore } from "../../store/quests/quests.store";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile";

export function Home() {
  const { openModal, closeModal } = useModalStore();
  const { profile, setProfile } = useProfileStore();
  const { quests } = useQuestStore();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (profile.firstAccess === true) {
      openModal(<WelcomeModal />);
      setProfile({ ...profile, firstAccess: false });
    }
  }, [openModal, closeModal]);

  return (
    <div className="home-page-container">
      <div className="header">
        <ProfileCard />
      </div>
      <QuestCardList />
    </div>
  );
}
