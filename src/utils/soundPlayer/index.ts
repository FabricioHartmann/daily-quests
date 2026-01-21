import levelUp from "../../assets/sounds/levelUp.mp3";
import questMark from "../../assets/sounds/questMark.mp3";
import rest from "../../assets/sounds/rest.mp3";
import finished from "../../assets/sounds/expeditionFinished.mp3";
import itemEquipOrUnequip from "../../assets/sounds/itemEquipOrUnequip.mp3";
import ritual from "../../assets/sounds/ritualSound.mp3";

const levelUpAudio = new Audio(levelUp);
levelUpAudio.volume = 0.05;

const questMarkAudio = new Audio(questMark);
questMarkAudio.volume = 0.1;

const expeditionCampfireAudio = new Audio(rest);
expeditionCampfireAudio.volume = 0.3;

const expeditionFinishedAudio = new Audio(finished);
expeditionFinishedAudio.volume = 0.2;

const itemEquipOrUnequipAudio = new Audio(itemEquipOrUnequip);
itemEquipOrUnequipAudio.volume = 0.2;

const ritualAudio = new Audio(ritual);
ritualAudio.volume = 0.5;

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

export function playItemEquipSound() {
  itemEquipOrUnequipAudio.currentTime = 0;
  itemEquipOrUnequipAudio.play();
}

export function playRitualSound() {
  ritualAudio.currentTime = 0;
  ritualAudio.play();
}