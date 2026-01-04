import type { CatalogItem, ItemId } from "../store/inventory/inventory.types";

export const ITEMS_CATALOG: Record<ItemId, CatalogItem> = {
  "initial-light-armor": {
    itemId: "initial-light-armor",
    name: "Veste do iniciante",
    rarity: "common",
    type: "armor",
    icon: "GiNinjaArmor",
    effects: [
      {
        kind: "xp_bonus",
        amount: 5,
        active: true,
        appliesTo: 'weekly',
        description: "+5 XP em quests semanais",
      }, 
    ],
    description: "Veste simples para iniciantes",
  },

  "initial-iron-sword": {
    itemId: "initial-iron-sword",
    name: "Espada de ferro",
    rarity: "common",
    type: "weapon",
    icon: "GiBroadsword",
    effects: [
      {
        kind: "xp_bonus",
        amount: 2,
        active: true,
        appliesTo: 'daily',
        description: "+2 XP em quests diárias",
      },
    ],
    description: "Espada de ferro com cabo de madeira",
  },

  "initial-ring": {
    itemId: "initial-ring",
    name: "Anel de iniciante",
    rarity: "common",
    type: "accessory",
    icon: "GiRing",
    effects: [],
    description: "Anel simples. Dizem que traz sorte para quem usa",
  },
} as const;
