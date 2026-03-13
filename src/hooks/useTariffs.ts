import { useEffect, useState } from "react"
import { Tariff } from "@/types/tariff"
import { getTariffs } from "@/services/tariffsApi"
import { nanoid } from "nanoid"

export function useTariffs() {
  const [tariffs, setTariffs] = useState<(Tariff & { uuid: string })[]>([])
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const data = await getTariffs()
        
        const dataWithUuid = data.map(t => ({ ...t, uuid: nanoid() }))
        setTariffs(dataWithUuid)

        const best = dataWithUuid.find(t => t.is_best)
        if (best) setSelectedTariff(best.uuid)
      } catch {
        setError("Не удалось загрузить тарифы")
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return {
    tariffs,
    selectedTariff,
    setSelectedTariff,
    loading,
    error
  }
}