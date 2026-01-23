import { useEffect } from "react";
import { Modal } from "../..";
import { Button, Flex, Text } from "../../../Generic";
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
    <Modal title="Saudações viajante!">
      <Flex direction="column" align="start" gap="8px">
        <TextWriterGroup size="sm">
          <div>A sua jornada no My Daily Quests (Lite) está prestes a começar.</div>
          <div>Você irá iniciar com um perfil sugerido, mas pode alterar os dados na tela de Perfil.</div>
          <div>Voce também pode personalizar as quests pré montadas, ou criar novas na tela de Quests.</div>
        </TextWriterGroup>
      </Flex>
    </Modal>
  );
}
