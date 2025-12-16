import { useEffect } from "react";
import { QuestCardList } from "../../components/Quest";
import { ProfileCard } from "../../components/Profile";
import { Flex } from "../../components/Generic";
import { useModalStore } from "../../store/modal/modalStore";
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
    <Flex justify="center" align="center" direction="column" gap="16px">
      <div className="header">
        <ProfileCard />
      </div>
      <div className="quests-wrapper">
        <QuestCardList questType={"daily"} />
        <QuestCardList questType={"weekly"} />
      </div>
    </Flex>
  );
}
