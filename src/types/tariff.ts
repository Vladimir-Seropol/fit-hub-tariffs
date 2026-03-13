export interface Tariff {
  id: string
  period: string
  price: number
  full_price: number
  is_best: boolean
  text: string
}

export type TariffWithUUID = Tariff & {
  uuid: string
}

export interface TariffCardProps {
  tariff: TariffWithUUID
  selected: boolean
  onSelect: (uuid: string) => void
  showDiscount: boolean
}