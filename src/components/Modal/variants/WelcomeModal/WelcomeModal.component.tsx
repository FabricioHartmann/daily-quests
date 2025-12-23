import { useEffect } from "react";
import { Modal } from "../..";
import { Flex, Text } from "../../../Generic";
import { TextWriterGroup } from "../../../Generic/TextWriterGroup";
import { useProfileStore } from "../../../../store/profile/profile.store";

export function WelcomeModal() {
  const { profile, setProfile } = useProfileStore();

  useEffect(() => {
    return () => {
      setProfile({ ...profile, firstAccess: false });
    };
  }, []);

  return (
    <Modal title="Seja bem vindo">
      <Flex direction="column" align="start" gap="8px">
        <TextWriterGroup>
          <Text>Saudações viajante!</Text>
          <Text>A sua jornada está prestes a começar.</Text>
        </TextWriterGroup>
      </Flex>
    </Modal>
  );
}
