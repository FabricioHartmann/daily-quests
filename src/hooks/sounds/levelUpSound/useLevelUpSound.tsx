import useSound from "use-sound";
import levelUpSound from "../../../assets/sounds/levelUpSound.mp3";

export function useLevelUpSound() {
  const [play] = useSound(levelUpSound, { volume: 0.2 });

  const playLevelUpSound = () => {
    play();
  };

  return { playLevelUpSound };
}
