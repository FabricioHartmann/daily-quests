import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { InventoryState } from "./inventory.types";

export const useInventoryStore = create<InventoryState>()(
  persist(
    (set) => ({
      items: [],
      itemsLimit: 30,
      selectedItemId: undefined,
      selectItem: (itemId) => set({ selectedItemId: itemId }),
      addItem: (itemId) =>
        set((state) => {
          if (state.items.length >= 30) {
            return state;
          }
          return {
            items: [...state.items, { itemId }],
          };
        }),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((i) => i.itemId !== itemId),
          selectedItemId:
            state.selectedItemId === itemId ? undefined : state.selectedItemId,
        })),
      equipItem: (itemId) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.itemId === itemId
              ? { ...i, equipped: true }
              : { ...i, equipped: false }
          ),
        })),
      unequipItem: () =>
        set((state) => ({
          items: state.items.map((i) => ({ ...i, equipped: false })),
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
