import type { IconId, ItemEffect } from "../../../store/inventory/inventory.types"

export type BuffType = {
  id: ItemEffect
  effect: string
  icon: IconId
  label: string
}

export type BuffsProps = {
  allBuffs: BuffType[]
}