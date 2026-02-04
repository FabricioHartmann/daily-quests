import "dotenv/config";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import { ITEMS_CATALOG } from "../src/data/itemsCatalog.js";

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

const seedItems = async () => {
  console.log("seeding items...");

  for (const [itemId, item] of Object.entries(ITEMS_CATALOG)) {
    const { itemId: _, ...data } = item;

    await setDoc(
      doc(db, "items", itemId),
      data
    );
  }

  console.log("items seeded");
};

seedItems()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("items seed failed", err);
    process.exit(1);
  });
