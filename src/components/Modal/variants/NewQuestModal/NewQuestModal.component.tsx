import { useForm, type SubmitHandler } from "react-hook-form";
import { Modal } from "../..";
import type { NewQuestInputs, NewQuestModalProps } from "./NewQuestModal.types";
import { useMemo } from "react";
import { Input, Select } from "../../../Generic";
import "./NewQuestModal.styles.css";
import { useQuestStore } from "../../../../store/quests/quests.store";
import type { QuestProps } from "../../../../store/quests/quests.types";
import { useModalStore } from "../../../../store/modal/modal.store";
import { QUESTS_CATEGORY_OPTIONS } from "./constants";
import { questValidations } from "./validations";

export function NewQuestModal({ questType }: NewQuestModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewQuestInputs>();
  const { addQuest, quests } = useQuestStore();
  const { closeModal } = useModalStore();

  const onSubmit: SubmitHandler<NewQuestInputs> = (data) => {
    try {
      let lastId = quests[quests.length - 1]?.id ?? 0;
      let questObject: QuestProps = {
        id: lastId + 1,
        ...data,
        createdAt: new Date().toString(),
        status: "open",
        type: questType,
      };
      addQuest(questObject);
      closeModal();
    } catch (error) {
      console.error("Erro ao adicionar quest:", error);
    }
  };

  const questTypeLabel = useMemo(() => {
    return questType === "daily" ? "Diária" : "Semanal";
  }, [questType]);

  const maxPoints = useMemo(() => {
    return questType === "daily" ? 20 : 100;
  }, [questType]);

  return (
    <Modal
      hasCutomFooter
      primaryButtonLabel="Iniciar"
      primaryButtonAction={handleSubmit(onSubmit)}
      title="Nova quest"
    >
      <form>
        <div className="new-quest-form">
          <Input
            label="Título"
            placeholder="Ex: Estudar Nextjs"
            type="text"
            error={errors.title?.message}
            {...register("title", questValidations.title)}
          />
          <Input value={questTypeLabel} label="Tipo" type="text" readOnly />
          <div className="full">
            <Input
              label="Detalhes"
              placeholder="Ex: Estudar 1h de Nextjs e Typescript..."
              type="text"
              error={errors.title?.message}
              {...register("description", questValidations.description)}
            />
          </div>
          <Select
            label="Categoria"
            error={errors.title?.message}
            options={QUESTS_CATEGORY_OPTIONS}
            {...register("category", questValidations.category)}
          />
          <Input
            label="Pontos de xp"
            type="number"
            {...register("points", questValidations.points(maxPoints))}
            error={errors.points?.message}
          />
        </div>
      </form>
    </Modal>
  );
}
