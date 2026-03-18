export interface Tariff {
  id: string
  period: string
  price: number
  full_price: number
  is_best: boolean
  text: string
  mobileText?: string
}

export type TariffWithUUID = Tariff & {
   uuid: string
  period: string
  price: number
  full_price: number
  text: string
  mobileText?: string
}

export interface TariffCardProps {
  tariff: TariffWithUUID
  selected: boolean
  index?: number;
  onSelect: (uuid: string) => void
  showDiscount: boolean
  className?: string;
}