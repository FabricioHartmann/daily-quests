import type { CatalogItem, ItemId } from "../store/inventory/inventory.types";

export const ITEMS_CATALOG: Record<ItemId, CatalogItem> = {
  "iron-sword": {
    itemId: "iron-sword",
    name: "Espada de ferro",
    rarity: "common",
    type: "weapon",
    icon: "GiBroadsword",
    effects: [
      {
        kind: "xp_bonus",
        amount: 1,
        active: true,
        appliesTo: "daily",
        description: "+1 XP em quests diárias",
      },
    ],
    description: "Espada de ferro simples com cabo de madeira resistente.",
  },
  "croc-sword": {
    itemId: "croc-sword",
    name: "Espada mordaz ",
    rarity: "common",
    type: "weapon",
    icon: "GiCrocSword",
    effects: [
      {
        kind: "xp_bonus",
        amount: 2,
        active: true,
        appliesTo: "daily",
        description: "+2 XP em quests diárias",
      },
    ],
    description:
      "Uma lâmina serrilhada capaz de causar sérios danos ao inimigo.",
  },
  "two-handed-sword": {
    itemId: "two-handed-sword",
    name: "Espada de duas mãos",
    rarity: "rare",
    type: "weapon",
    icon: "GiTwoHandedSword",
    effects: [
      {
        kind: "xp_bonus",
        amount: 2,
        active: true,
        appliesTo: "daily",
        description: "+3 XP em quests diárias",
      },
      {
        kind: "xp_bonus",
        amount: 4,
        active: true,
        appliesTo: "weekly",
        description: "+8 XP em quests semanais",
      },
    ],
    description:
      "Uma espada que exige espaço e controle, mas possui um impacto avassalador.",
  },
  "relic-blade": {
    itemId: "relic-blade",
    name: "Lâmina da Relíquia",
    rarity: "rare",
    type: "weapon",
    icon: "GiRelicBlade",
    effects: [
      {
        kind: "xp_bonus",
        amount: 5,
        active: true,
        appliesTo: "daily",
        description: "+5 XP em quests diárias",
      },
      {
        kind: "xp_bonus",
        amount: 2,
        active: true,
        appliesTo: "daily",
        description: "+5 XP em quests diárias",
      },
    ],
    description:
      "Uma arma de eras esquecidas, empunhada apenas por aqueles que provaram seu valor ao longo do tempo.",
  },
  "runed-blade": {
    itemId: "runed-blade",
    name: "Lâmina Runada",
    rarity: "epic",
    type: "weapon",
    icon: "GiRuneSword",
    effects: [
      {
        kind: "xp_bonus",
        amount: 5,
        active: true,
        appliesTo: "daily",
        description: "+5 XP em quests diárias",
      },
      {
        kind: "xp_bonus",
        amount: 20,
        active: true,
        appliesTo: "weekly",
        description: "+20 XP em quests semanais",
      },
      // {
      //   kind: "xp_multiplier",
      //   amount: 1.1,
      //   active: true,
      //   appliesTo: "all",
      //   description: "+10% XP em todas as quests",
      // },
    ],
    description:
      "Runas antigas brilham ao empunhar essa lâmina. Quanto maior a dedicação, mais forte se torna.",
  },
  // armor
  "initial-light-armor": {
    itemId: "initial-light-armor",
    name: "Veste do iniciante",
    rarity: "common",
    type: "armor",
    icon: "GiNinjaArmor",
    effects: [
      {
        kind: "xp_bonus",
        amount: 2,
        active: true,
        appliesTo: "weekly",
        description: "+2 XP em quests diárias",
      },
    ],
    description:
      "Veste simples feita de tecido com detalhes em couro, ideal para iniciantes.",
  },
  "heart-armor": {
    itemId: "heart-armor",
    name: "Veste do aventureiro",
    rarity: "common",
    type: "armor",
    icon: "GiHeartArmor",
    effects: [
      {
        kind: "xp_bonus",
        amount: 6,
        active: true,
        appliesTo: "weekly",
        description: "+6 XP em quests semanais",
      },
    ],
    description: "Veste do aventureiro, possui proteção básica.",
  },
  "chest-armor": {
    itemId: "chest-armor",
    name: "Armadura resistente",
    rarity: "rare",
    type: "armor",
    icon: "GiChestArmor",
    effects: [
      {
        kind: "xp_bonus",
        amount: 7,
        active: true,
        appliesTo: "weekly",
        description: "+6 XP em quests semanais",
      },
      {
        kind: "xp_bonus",
        amount: 7,
        active: true,
        appliesTo: "weekly",
        description: "+6 XP em quests semanais",
      },
    ],
    description:
      "Armadura pesada que oferece boa proteção para um confronto prolongado.",
  },
  "leather-armor": {
    itemId: "leather-armor",
    name: "Veste de couro reforçado",
    rarity: "rare",
    type: "armor",
    icon: "GiLeatherArmor",
    effects: [
      {
        kind: "xp_bonus",
        amount: 6,
        active: true,
        appliesTo: "daily",
        description: "+2 XP em quests diárias",
      },
      {
        kind: "xp_bonus",
        amount: 2,
        active: true,
        appliesTo: "daily",
        description: "+2 XP em quests diárias",
      },
    ],
    description:
      "Armadura versátil que oferece conforto e mobilidade, ideal para lutas rápidas.",
  },
  "shoulder-armor": {
    itemId: "shoulder-armor",
    name: "Armadura de placas",
    rarity: "epic",
    type: "armor",
    icon: "GiShoulderArmor",
    effects: [
      {
        kind: "xp_bonus",
        amount: 1,
        active: true,
        appliesTo: "daily",
        description: "+1 XP em quests diárias",
      },
      {
        kind: "xp_bonus",
        amount: 10,
        active: true,
        appliesTo: "weekly",
        description: "+14 XP em quests semanais",
      },
      // {
      //   kind: "xp_multiplier",
      //   amount: 1.1,
      //   active: true,
      //   appliesTo: "weekly",
      //   description: "+10% XP em quests semanais",
      // },
    ],
    description:
      "Marteladas por mestres antigos, suas placas nunca cederam completamente.",
  },
  "cape-armor": {
    itemId: "cape-armor",
    name: "Armadura do herói",
    rarity: "epic",
    type: "armor",
    icon: "GiCapeArmor",
    effects: [
      {
        kind: "xp_bonus",
        amount: 1,
        active: true,
        appliesTo: "daily",
        description: "+5 XP em quests diárias",
      },
      {
        kind: "xp_bonus",
        amount: 10,
        active: true,
        appliesTo: "weekly",
        description: "+10 XP em quests semanais",
      },
      // {
      //   kind: "xp_multiplier",
      //   amount: 1.1,
      //   active: true,
      //   appliesTo: "all",
      //   description: "+10% XP em todas as quests",
      // },
    ],
    description:
      "Uma armadura feita em eras esquecidas, capaz de resistir ao tempo e ao aço.",
  },
  // accessory
  "initial-ring": {
    itemId: "initial-ring",
    name: "Anel de iniciante",
    rarity: "common",
    type: "accessory",
    icon: "GiRing",
    effects: [],
    description: "Dizem que traz sorte para quem usa",
  },
  "antique-poncho": {
    itemId: "antique-poncho",
    name: "Poncho antigo",
    rarity: "rare",
    type: "accessory",
    icon: "GiPoncho",
    effects: [],
    description: "Protege da chuva e do frio.",
  },
  "sun-goggles": {
    itemId: "sun-goggles",
    name: "Óculos protetores",
    rarity: "rare",
    type: "accessory",
    icon: "GiSteampunkGoggles",
    effects: [],
    description: "Comum entre viajantes que cruzam distâncias sob o sol.",
  },
  "lantern": {
    itemId: "lantern",
    name: "Lanterna",
    rarity: "rare",
    type: "accessory",
    icon: "GiOldLantern",
    effects: [],
    description: "Uma fonte de luz confiável para avançar no escuro.",
  },
} as const;
