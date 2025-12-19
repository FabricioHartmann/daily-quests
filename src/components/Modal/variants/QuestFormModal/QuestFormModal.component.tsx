import { useForm, type SubmitHandler } from "react-hook-form";
import { Modal } from "../..";
import type {
  QuestFormInputs,
  QuestFormModalProps,
} from "./QuestFormModal.types";
import { useEffect, useMemo } from "react";
import { Input, Select } from "../../../Generic";
import "./QuestFormModal.styles.css";
import { useQuestStore } from "../../../../store/quests/quests.store";
import type { QuestProps } from "../../../../store/quests/quests.types";
import { useModalStore } from "../../../../store/modal/modal.store";
import { QUESTS_CATEGORY_OPTIONS } from "./constants";
import { questValidations } from "./validations";

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
      points: null,
    },
  });
  const { addQuest, updateQuest, quests } = useQuestStore();
  const { closeModal } = useModalStore();
  const isEditingMode = Boolean(quest);
  const questTypeLabel = useMemo(() => {
    return questType === "daily" ? "Diária" : "Semanal";
  }, [questType]);

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
        });
      }

      closeModal();
    } catch (error) {
      console.error("Erro ao salvar quest:", error);
    }
  };

  const maxPoints = useMemo(() => {
    return questType === "daily" ? 20 : 100;
  }, [questType]);

  useEffect(() => {
    if (quest) reset(quest);
  }, [quest, reset]);

  return (
    <Modal
      hasCutomFooter
      primaryButtonLabel={isEditingMode ? "Salvar alterações" : "Iniciar"}
      primaryButtonAction={handleSubmit(onSubmit)}
      title={isEditingMode ? "Editar quest" : "Nova quest"}
    >
      <form>
        <div className="new-quest-form">
          <Input
            label="Título"
            type="text"
            {...register("title", questValidations.title)}
            error={errors.title?.message}
            autoComplete="off"
          />
          <Input value={questTypeLabel} label="Tipo" type="text" readOnly />
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
          <Input
            label="Pontos de xp"
            type="number"
            {...register("points", questValidations.points(maxPoints))}
            error={errors.points?.message}
            autoComplete="off"
          />
        </div>
      </form>
    </Modal>
  );
}
