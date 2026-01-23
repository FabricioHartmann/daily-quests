import { useForm, type SubmitHandler } from "react-hook-form";
import { Modal } from "../..";
import { Input } from "../../../Generic";
import type { ProfileFormInputs } from "./ProfileEditModal.types";
import { profileValidations } from "./validations";
import { useModalStore } from "../../../../store/modal/modal.store";
import { useProfileStore } from "../../../../store/profile/profile.store";

export function ProfileEditModal() {
  const closeModal = useModalStore((s) => s.closeModal);
  const profile = useProfileStore((s) => s.profile);
  const setProfile = useProfileStore((s) => s.setProfile);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormInputs>({
    defaultValues: {
      name: profile.name,
    },
  });

  const onSubmit: SubmitHandler<ProfileFormInputs> = (data) => {
    try {
      setProfile({
        ...profile,
        name: data?.name,
      });
      closeModal();
    } catch (error) {
      console.error("Erro ao salvar quest:", error);
    }
  };

  return (
    <Modal
      hasCustomFooter
      primaryButtonLabel={"Salvar alterações"}
      primaryButtonAction={handleSubmit(onSubmit)}
      title="Editar perfil"
    >
      <form>
        <div className="new-quest-form">
          <div>
            <Input
              label="Nome"
              type="text"
              {...register("name", profileValidations.name)}
              error={errors.name?.message}
              autoComplete="off"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
}
