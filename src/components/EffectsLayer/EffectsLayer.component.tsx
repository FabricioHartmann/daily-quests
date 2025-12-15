import { useEffect } from "react";
import { useModalStore } from "../../store/modal/modalStore";
import { useProfileStore } from "../../store/profile/profile.store";
import { LevelUpModal } from "../Modal/variants/LevelUpModal";

export function EffectsLayer() {
  const { leveledUp, profile } = useProfileStore();
  const openModal = useModalStore((s) => s.openModal);

  useEffect(() => {
    if (!leveledUp) return;
    setTimeout(() => {
      openModal(<LevelUpModal level={profile.level} />);
    }, 300);
  }, [leveledUp, profile.level, openModal]);

  return null;
}
