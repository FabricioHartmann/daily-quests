import useSound from "use-sound";
import questMarkSound from "../../../assets/sounds/questMarkSound.mp3";

export function useQuestMarkSound() {
  const [play] = useSound(questMarkSound, { volume: 0.3 });

  const playQuestMarkSound = () => {
    play();
  };

  return { playQuestMarkSound };
}
