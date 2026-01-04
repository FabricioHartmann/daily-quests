import levelUp from "../../assets/sounds/levelUp.mp3";
import questMark from "../../assets/sounds/questMark.mp3";
import rest from "../../assets/sounds/rest.mp3";
import finished from "../../assets/sounds/expeditionFinished.mp3";
import itemEquip from "../../assets/sounds/itemEquip.mp3";

const levelUpAudio = new Audio(levelUp);
levelUpAudio.volume = 0.05;

const questMarkAudio = new Audio(questMark);
questMarkAudio.volume = 0.1;

const expeditionCampfireAudio = new Audio(rest);
expeditionCampfireAudio.volume = 0.3;

const expeditionFinishedAudio = new Audio(finished);
expeditionFinishedAudio.volume = 0.2;

const itemEquipAudio = new Audio(itemEquip);
itemEquipAudio.volume = 0.1;

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
  itemEquipAudio.currentTime = 0;
  itemEquipAudio.play();
}