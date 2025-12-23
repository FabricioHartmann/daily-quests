import { Modal } from "../..";
import { ACHIEVEMENTS_CATALOG } from "../../../../data/achievementsCatalog";
import { useAchievementStore } from "../../../../store/achievements/achievements.store";
import type { AchievementId } from "../../../../store/achievements/achievements.types";
import { Flex, RenderIf, Text } from "../../../Generic";
import "./AchievementsModal.styles.css";

export function AchievementsModal() {
  const { achievements } = useAchievementStore();
  const isUnlocked = (id: AchievementId) => !!achievements[id]?.unlocked;

  return (
    <Modal title="Conquistas">
      <Flex direction="column" align="start" gap="8px">
        {ACHIEVEMENTS_CATALOG.slice()
          .sort((a, b) => Number(isUnlocked(b.id)) - Number(isUnlocked(a.id)))
          .map((achievement) => {
            let progress = achievements[achievement.id];
            let unlocked = !!progress?.unlocked;
            return (
              <div
                key={achievement.id}
                className={`single-achievement ${
                  unlocked ? "unlocked" : "locked"
                }`}
              >
                <div className="single-achievement-header">
                  <Text>{achievement.label}</Text>
                  <Text
                    color={
                      unlocked ? "var(--success-color)" : "var(--fail-color)"
                    }
                    size="sm"
                  >
                    {unlocked ? "conquistado" : "não conquistado"}
                  </Text>
                </div>
                <div className="single-achievement-description">
                  <Text size="sm" italic>
                    {achievement.requirements}
                  </Text>
                  <RenderIf condition={!!achievement.reward}>
                    <Text size="sm">
                      recompensa:{" "}
                      {achievement.reward === "title" ? "título" : "item"}
                    </Text>
                  </RenderIf>
                </div>
              </div>
            );
          })}
      </Flex>
    </Modal>
  );
}
