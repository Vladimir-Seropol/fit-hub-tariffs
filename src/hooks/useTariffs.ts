import { getTariffs } from '@/services/tariffsApi';
import { Tariff, TariffWithUUID } from '@/types/tariff';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const uuidMap = new Map<string, string>();

function getStableUuid(key: string) {
  if (!uuidMap.has(key)) {
    uuidMap.set(key, nanoid());
  }
  return uuidMap.get(key)!;
}

export function useTariffs() {
  const [manualSelected, setManualSelected] = useState<string | null>(null);

  const query = useQuery<Tariff[], Error, TariffWithUUID[]>({
    queryKey: ['tariffs'],
    queryFn: getTariffs,
    select: (data) =>
      data.map((t) => ({
        ...t,
        uuid: getStableUuid(JSON.stringify(t)),
      })),
  });

  const tariffs = query.data ?? [];


  const selectedTariff =
    manualSelected ??
    tariffs.find((t) => t.is_best)?.uuid ??
    null;

  return {
    ...query,
    tariffs,
    selectedTariff,
    setSelectedTariff: setManualSelected,
  };
}