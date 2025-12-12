import { QuestCardList } from "../../components/UIComponents/QuestComponents/QuestCardList";
import { Flex, Text } from "../../components/UIComponents";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile";
import "./Home.styles.css";

export function Home() {
  const isMobile = useIsMobile();

  return (
    <>
      <Flex justify="center" align="center" direction="column">
        <Text size="xl">HOME</Text>
        <div className="main-box"></div>
        <Flex gap="16px" direction={isMobile ? "column" : "row"} justify="start" width="100%">
          <QuestCardList questType={"daily"} />
          <QuestCardList questType={"weekly"} />
        </Flex>
      </Flex>
    </>
  );
}
