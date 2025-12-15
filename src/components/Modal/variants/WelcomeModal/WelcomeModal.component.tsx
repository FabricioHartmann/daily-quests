import { Modal } from "../..";
import { Flex, Text } from "../../..";

export function WelcomeModal() {
  return (
    <Modal title="Seja bem vindo">
      <Flex direction="column" align="start" gap="8px">
        <Text>Saudacões viajante! </Text>
        <Text>Sua jornada pela rotina perfeita está prestes a começar.</Text>
      </Flex>
    </Modal>
  );
}
