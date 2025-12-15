import { useMemo } from "react";
import { Modal } from "../..";
import { Flex, Text } from "../../..";
import { TextWriterGroup } from "../../../Generic/TextWriterGroup";
import type { LevelUpModalProps } from "./LevelUpModal.types";

export function LevelUpModal({ level }: LevelUpModalProps) {
  const memoedLevelText = useMemo(() => {
    return `LV ${level - 1} -> LV ${level}`;
  }, []);

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
