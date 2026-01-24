import { useEffect } from "react";
import { Modal } from "../..";
import { Flex } from "../../../GenericComponents";
import { TextWriterGroup } from "../../../GenericComponents/TextWriterGroup";
import { useProfileStore } from "../../../../store/profile/profile.store";

export function WelcomeModal() {
  const setProfile = useProfileStore((s) => s.setProfile);

  useEffect(() => {
    return () => {
      setProfile({
        ...useProfileStore.getState().profile,
        firstAccess: false,
      });
    };
  }, []);

  return (
    <Modal title="Saudações viajante!">
      <Flex direction="column" align="start" gap="8px">
        <TextWriterGroup size="sm">
          <div>A sua jornada no My Daily Quests (Lite) irá começar.</div>
          <div>
            Aqui você conseguirá organizar tarefas e hábitos diários de forma
            leve e criativa.
          </div>
          <div>
            Você iniciará com perfil e quests sugeridas, mas poderá personalizar
            para que tudo se encaixe na sua rotina.
          </div>
        </TextWriterGroup>
      </Flex>
    </Modal>
  );
}
