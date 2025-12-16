import { useEffect, useMemo } from "react";
import { QuestCardList } from "../../components/Quest";
import { ProfileCard } from "../../components/Profile";
import { Flex } from "../../components/Generic";
import { useModalStore } from "../../store/modal/modal.store";
import { WelcomeModal } from "../../components/Modal/variants/WelcomeModal";
import { useProfileStore } from "../../store/profile/profile.store";
import "./Home.styles.css";
import { useQuestStore } from "../../store/quests/quests.store";

export function Home() {
  const { openModal, closeModal } = useModalStore();
  const { profile, setProfile } = useProfileStore();
  const { quests } = useQuestStore();

  const avaliableDailyQuests = useMemo(() => {
    return quests?.filter(
      (quest) => quest.type === "daily" && quest.status === "open"
    );
  }, [quests]);

  const avaliableWeeklyQuests = useMemo(() => {
    return quests?.filter(
      (quest) => quest.type === "weekly" && quest.status === "open"
    );
  }, [quests]);

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
        <QuestCardList quests={avaliableDailyQuests} questType={"daily"} />
        <QuestCardList quests={avaliableWeeklyQuests} questType={"weekly"} />
      </div>
    </Flex>
  );
}
