import levelUpSound from "../../assets/sounds/levelUpSound.mp3";
import questMarkSound from "../../assets/sounds/questMarkSound.mp3";
import restSound from "../../assets/sounds/restSound.mp3";
import finishedSound from "../../assets/sounds/expeditionFinishedSound.mp3";

const levelUpAudio = new Audio(levelUpSound);
levelUpAudio.volume = 0.05;

const questMarkAudio = new Audio(questMarkSound);
questMarkAudio.volume = 0.1;

const expeditionCampfireAudio = new Audio(restSound);
expeditionCampfireAudio.volume = 0.3;

const expeditionFinishedAudio = new Audio(finishedSound);
expeditionFinishedAudio.volume = 0.2;

export function playLevelUpSound() {
  levelUpAudio.currentTime = 0;
  levelUpAudio.play();
}

export function playQuestMarkSound() {
  questMarkAudio.currentTime = 0;
  questMarkAudio.play();
}

export function playExpeditionCampfireSound() {
  expeditionCampfireAudio.currentTime = 0;
  expeditionCampfireAudio.play();
}

export function playExpeditionFinishedSound() {
  expeditionFinishedAudio.currentTime = 0;
  expeditionFinishedAudio.play();
}
