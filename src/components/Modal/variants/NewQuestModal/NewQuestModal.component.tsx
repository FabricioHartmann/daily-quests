import { useForm, type SubmitHandler } from "react-hook-form";
import { Modal } from "../..";
import type { NewQuestInputs, NewQuestModalProps } from "./NewQuestModal.types";
import { useMemo } from "react";
import { Input, Select } from "../../../Generic";
import "./NewQuestModal.styles.css";
import { useQuestStore } from "../../../../store/quests/quests.store";
import type { QuestProps } from "../../../../store/quests/quests.types";

export function NewQuestModal({ questType }: NewQuestModalProps) {
  const { register, handleSubmit } = useForm<NewQuestInputs>();
  const { addQuest, quests } = useQuestStore();

  const onSubmit: SubmitHandler<NewQuestInputs> = (data) => {
    console.log(data);
    // temporário
    let lastId = quests[quests.length - 1]?.id;
    let questObject: QuestProps = {
      id: lastId + 1,
      ...data,
      createdAt: new Date().toString(),
      status: "open",
      type: questType,
    };
    addQuest(questObject);
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
          <Input label="Título" type="text" {...register("title")} />
          <Input value={questTypeLabel} label="Tipo" type="text" readOnly />
          <div className="full">
            <Input
              label="Detalhes"
              type="text"
              placeholder="Ex: Estudar 1h de Nextjs..."
              {...register("description")}
            />
          </div>
          <Select
            label="Categoria"
            options={[
              { value: "Estudo", label: "Estudo" },
              { value: "Saúde", label: "Saúde" },
              { value: "Casa", label: "Casa" },
              { value: "Trabalho", label: "Trabalho" },
              { value: "Outro", label: "Outro" },
            ]}
            {...register("category")}
          />
          <Input
            label="Pontos de xp"
            type="number"
            max={maxPoints}
            {...register("points", { valueAsNumber: true })}
          />
        </div>
      </form>
    </Modal>
  );
}
