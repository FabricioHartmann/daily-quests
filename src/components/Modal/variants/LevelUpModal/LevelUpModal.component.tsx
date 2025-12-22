import { useEffect, useMemo } from "react";
import { Modal } from "../..";
import { Flex, Text, TextWriterGroup } from "../../../Generic";
import type { LevelUpModalProps } from "./LevelUpModal.types";
import { useLevelUpSound } from "../../../../hooks/sounds/levelUpSound/useLevelUpSound";

export function LevelUpModal({ level }: LevelUpModalProps) {
  const { playLevelUpSound } = useLevelUpSound();

  const memoedLevelText = useMemo(() => {
    return `Parabéns, você alcançou o LV ${level}`;
  }, [level]);

  useEffect(() => {
    playLevelUpSound();
  }, [playLevelUpSound]);

  return (
    <Modal title="Level UP!">
      <Flex direction="column" align="start" gap="8px">
        <TextWriterGroup>
          <Text>{memoedLevelText}</Text>
        </TextWriterGroup>
      </Flex>
    </Modal>
  );
}
