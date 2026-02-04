import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import type { AchievementCatalog } from "../store/achievements/achievements.types";

export const getAchievementsCatalog = async (): Promise<AchievementCatalog[]> => {
  const snapshot = await getDocs(collection(db, "achievements"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<AchievementCatalog, "id">),
  }));
};