import { useEffect } from "react";
import { QuestList } from "../../components/Quest";
import { ProfileCard } from "../../components/Profile";
import { useModalStore } from "../../store/modal/modal.store";
import { WelcomeModal } from "../../components/Modal/variants/WelcomeModal";
import { useProfileStore } from "../../store/profile/profile.store";
import "./Home.styles.css";

export function Home() {
  const { openModal, closeModal } = useModalStore();
  const { profile, setProfile } = useProfileStore();

  useEffect(() => {
    if (profile.firstAccess === true) {
      openModal(<WelcomeModal />);
      setProfile({ ...profile, firstAccess: false });
    }
  }, [openModal, closeModal]);

  return (
    <div className="home-page-container">
      <div className="header">
        <ProfileCard/>
      </div>
      <QuestList />
    </div>
  );
}
