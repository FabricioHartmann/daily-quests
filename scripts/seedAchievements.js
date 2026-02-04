import "dotenv/config";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import { ACHIEVEMENTS_CATALOG } from "../src/data/achievementsCatalog.js";

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const seedAchievements = async () => {
  console.log("seeding...");

  for (const achievement of ACHIEVEMENTS_CATALOG) {
    const data = {
      label: achievement.label,
      requirements: achievement.requirements,
      reward: achievement.reward,
    };

    await setDoc(
      doc(db, "achievements", achievement.id),
      data
    );
  }

  console.log("seed success");
};

seedAchievements()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("seed failed", err);
    process.exit(1);
  });
