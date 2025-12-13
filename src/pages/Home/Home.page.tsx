import { Flex, ProfileCard, QuestCardList } from "../../components";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile";
import "./Home.styles.css";

export function Home() {
  const isMobile = useIsMobile();

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
