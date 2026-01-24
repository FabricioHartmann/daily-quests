import { useForm, type SubmitHandler } from "react-hook-form";
import { Modal } from "../..";
import type {
  QuestFormInputs,
  QuestFormModalProps,
} from "./QuestFormModal.types";
import { useEffect } from "react";
import { Input, Select } from "../../../Generic";
import "./QuestFormModal.styles.css";
import { useQuestStore } from "../../../../store/quests/quests.store";
import { useModalStore } from "../../../../store/modal/modal.store";
import { QUESTS_CATEGORY_OPTIONS } from "./constants";
import { questValidations } from "./validations";
import { QUEST_BASE_XP } from "../../../../domain/quest/questExperience.calculator";

export function QuestFormModal({ questType, quest }: QuestFormModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuestFormInputs>({
    defaultValues: quest ?? {
      title: "",
      description: "",
      category: null,
    },
  });
  const { addQuest, updateQuest, quests } = useQuestStore();
  const { closeModal } = useModalStore();
  const isEditingMode = Boolean(quest);
  const questTypeLabel = questType === "daily" ? "Diária" : "Semanal";

  const onSubmit: SubmitHandler<QuestFormInputs> = (data) => {
    try {
      if (isEditingMode && quest) {
        updateQuest({
          ...quest,
          ...data,
        });
      } else {
        const lastId = quests[quests.length - 1]?.id ?? 0;

        addQuest({
          id: lastId + 1,
          ...data,
          createdAt: new Date(),
          completedAt: null,
          status: "open",
          type: questType,
          points: QUEST_BASE_XP[questType],
        });
      }

      closeModal();
    } catch (error) {
      console.error("Erro ao salvar quest:", error);
    }
  };

  useEffect(() => {
    if (quest) reset(quest);
  }, [quest, reset]);

  return (
    <Modal
      hasCustomFooter
      primaryButtonLabel={isEditingMode ? "Salvar alterações" : "Iniciar"}
      primaryButtonAction={handleSubmit(onSubmit)}
      title={isEditingMode ? "Editar quest" : "Nova quest"}
    >
      <form>
        <div className="new-quest-form">
          <div className="full">
            <Input
              label="Título"
              type="text"
              {...register("title", questValidations.title)}
              error={errors.title?.message}
              autoComplete="off"
            />
          </div>

          <div className="full">
            <Input
              label="Detalhes"
              type="text"
              {...register("description", questValidations.description)}
              error={errors.description?.message}
              autoComplete="off"
            />
          </div>
          <Select
            label="Categoria"
            options={QUESTS_CATEGORY_OPTIONS}
            {...register("category", questValidations.category)}
            error={errors.category?.message}
          />
          <Input value={questTypeLabel} label="Tipo" type="text" disabled />
        </div>
      </form>
    </Modal>
  );
}
