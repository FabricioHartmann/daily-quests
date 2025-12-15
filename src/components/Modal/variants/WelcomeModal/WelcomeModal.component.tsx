import { Modal } from "../..";
import { Flex, Text } from "../../..";
import { TextWriterGroup } from "../../../Generic/TextWriterGroup";

export function WelcomeModal() {
  return (
    <Modal title="Seja bem vindo">
      <Flex direction="column" align="start" gap="8px">
        <TextWriterGroup>
          <Text>Saudacões viajante!</Text>
          <Text>A sua jornada está prestes a comecar.</Text>
        </TextWriterGroup>
      </Flex>
    </Modal>
  );
}
