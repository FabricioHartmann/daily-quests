import { useEffect } from "react";
import { QuestCardList } from "../../components/Quest";
import { ProfileCard } from "../../components/Profile";
import { Flex } from "../../components/Generic";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile";
import "./Home.styles.css";
import { useModalStore } from "../../store/modal/modalStore";
import { WelcomeModal } from "../../components/Modal/variants/WelcomeModal";
import { useProfileStore } from "../../store/profile/profile.store";

export function Home() {
  const isMobile = useIsMobile();
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
      <Flex
        gap="16px"
        direction={isMobile ? "column" : "row"}
        justify="start"
        width="100%"
      >
        <QuestCardList questType={"daily"} />
        <QuestCardList questType={"weekly"} />
      </Flex>
    </Flex>
  );
}
