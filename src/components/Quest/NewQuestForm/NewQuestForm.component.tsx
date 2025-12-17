import { useForm, type SubmitHandler } from "react-hook-form";
import "./NewQuestForm.styles.css";
import type { NewQuestInputs } from "./NewQuestForm.types";
import { Input } from "../../Generic";

export function NewQuestForm() {
  const { register, handleSubmit } = useForm<NewQuestInputs>();

  const onSubmit: SubmitHandler<NewQuestInputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="new-quest-form">
          <Input label="Título" type="text" {...register("title")} />
          <Input value={"Diária"} label="Tipo" type="text" disabled />
          <div className="full">
            <Input label="Detalhes" type="text" placeholder="Ex: Estudar 1h de Nextjs..." {...register("description")} />
          </div>
          <Input label="Categoria" type="text" placeholder="Ex: Saúde, Estudo..." {...register("description")} />
          <Input
            label="Pontos de xp"
            type="number"
            {...register("description")}
          />
        </div>
      </form>
    </div>
  );
}
