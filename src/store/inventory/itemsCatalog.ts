import type { CatalogItem, ItemId } from "./inventory.types";

export const ITEMS_CATALOG: Record<ItemId, CatalogItem> = {
  "initial-light-armor": {
    itemId: "initial-light-armor",
    name: "Veste do iniciante",
    rarity: "common",
    type: "armor",
    icon: "GiNinjaArmor",
    effects: ["Quests semanais +1"],
    description: "Veste leve simples para aventureiros iniciantes",
  },

  "initial-iron-sword": {
    itemId: "initial-iron-sword",
    name: "Espada de ferro",
    rarity: "common",
    type: "weapon",
    icon: "GiBroadsword",
    effects: ["Quests diárias +1"],
    description: "Espada de ferro padrão com cabo de madeira",
  },

  "initial-ring": {
    itemId: "initial-ring",
    name: "Anel de iniciante",
    rarity: "common",
    type: "accessory",
    icon: "GiRing",
    effects: ["XP de quests semanais +3"],
    description: "Anel simples. Dizem que traz sorte para quem usa",
  },
} as const;