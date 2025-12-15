import { useEffect, useMemo } from "react";
import { Modal } from "../..";
import { Flex, Text } from "../../..";
import { TextWriterGroup } from "../../../Generic/TextWriterGroup";
import type { LevelUpModalProps } from "./LevelUpModal.types";
import { useLevelUpSound } from "../../../../hooks/sounds/levelUpSound/useLevelUpSound";

export function LevelUpModal({ level }: LevelUpModalProps) {
  const { playLevelUpSound } = useLevelUpSound();

  const memoedLevelText = useMemo(() => {
    return `LV ${level - 1} -> LV ${level}`;
  }, []);

  useEffect(() => {
    playLevelUpSound();
  }, [playLevelUpSound]);

  return (
    <Modal title="Level UP!">
      <Flex direction="column" align="start" gap="8px">
        <TextWriterGroup>
          <Text>Parabéns por ter subido de nível</Text>
          <Text>{memoedLevelText}</Text>
        </TextWriterGroup>
      </Flex>
    </Modal>
  );
}
