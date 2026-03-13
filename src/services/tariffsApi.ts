import { Tariff } from "@/types/tariff"

export async function getTariffs(): Promise<Tariff[]> {
  const res = await fetch(
    "https://t-core.fit-hub.pro/Test/GetTariffs",
    {
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Не удалось загрузить тарифы")
  }

  return res.json()
}