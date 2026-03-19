"use client";

import TariffCard from "@/components/tariff-card/TariffCard";
import { TariffWithUUID } from "@/types/tariff";
import { useState } from "react";
import { mapTariffs } from "@/utils/mapTariffs";

type Props = {
  mainTariffs: TariffWithUUID[];
  lastThreeTariffs: TariffWithUUID[];
  selectedTariff: string | null;
  setSelectedTariff: (uuid: string) => void;
  showDiscount: boolean;
};

export default function TariffGrid({
  mainTariffs,
  lastThreeTariffs,
  showDiscount,
}: Props) {

const mappedMainTariffs = mapTariffs(mainTariffs);
const mappedLastThreeTariffs = mapTariffs(lastThreeTariffs);

const [selectedTariff, setSelectedTariff] = useState<string | null>(
  mappedMainTariffs[0]?.uuid ?? null
);

  const isSelected = (uuid: string) => selectedTariff === uuid;

  return (
    <>
      {mappedMainTariffs.length > 0 && (
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-3">
          {mappedMainTariffs.map((tariff, index) => (
            <TariffCard
              key={tariff.uuid}
              tariff={tariff}
              selected={isSelected(tariff.uuid)}
              onSelect={setSelectedTariff}
              showDiscount={showDiscount}
              className={index === 0 ? "lg:col-span-3 xl:col-span-3" : ""}
            />
          ))}
        </div>
      )}

      {mappedLastThreeTariffs.length > 0 && (
        <div className="grid gap-1 xs:gap-2 xl:gap-3 grid-cols-1 xl:grid-cols-3 mt-2 xl:mt-3">
          {mappedLastThreeTariffs.map((tariff) => (
            <TariffCard
              key={tariff.uuid}
              tariff={tariff}
              selected={isSelected(tariff.uuid)}
              onSelect={setSelectedTariff}
              showDiscount={showDiscount}
            />
          ))}
        </div>
      )}
    </>
  );
}