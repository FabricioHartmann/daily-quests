import type { IconId, ItemId } from "../../../store/inventory/inventory.types"

export type BuffType = {
  id: ItemId
  effect: string
  icon: IconId
  label: string
}

export type BuffsProps = {
  allBuffs: BuffType[]
}