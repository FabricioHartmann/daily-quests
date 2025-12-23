import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { InventoryItem, InventoryState, ItemId } from "./inventory.types";
import { buildInventoryItem } from "./inventory.factory";
import { ITEMS_CATALOG } from "./itemsCatalog";

export const useInventoryStore = create<InventoryState>()(
  persist(
    (set) => ({
      items: [],
      itemsLimit: 30,
      selectedItemId: undefined,
      selectItem: (itemId?: ItemId) => set({ selectedItemId: itemId }),
      addItem: (itemId) =>
        set((state) => {
          if (state.items.length >= state.itemsLimit) return {};
          const item = buildInventoryItem(itemId);
          return {
            items: [...state.items, item],
          };
        }),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((i) => i.itemId !== itemId),
          selectedItemId:
            state.selectedItemId === itemId ? undefined : state.selectedItemId,
        })),
      equipItem: (itemId) =>
        set((state) => {
          const itemToEquip = state.items.find((i) => i.itemId === itemId);
          if (!itemToEquip) return state;

          const itemType = ITEMS_CATALOG[itemId].type;

          return {
            items: state.items.map((i) => {
              const currentType = ITEMS_CATALOG[i.itemId].type;

              if (currentType !== itemType) return i;

              return {
                ...i,
                equipped: i.itemId === itemId,
              };
            }),
          };
        }),
      unequipByType: (type: InventoryItem["type"]) =>
        set((state) => ({
          items: state.items.map((i) =>
            ITEMS_CATALOG[i.itemId].type === type
              ? { ...i, equipped: false }
              : i
          ),
        })),
    }),
    {
      name: "inventory-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        items: state.items,
      }),
    }
  )
);
