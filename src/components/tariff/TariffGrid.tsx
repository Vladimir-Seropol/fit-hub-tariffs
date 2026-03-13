"use client";

import TariffCard from "@/components/tariff-card/TariffCard";
import TariffCardMobile from "@/components/tariff-card/TariffCardMobile";
import { TariffWithUUID } from "@/types/tariff";

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
  selectedTariff,
  setSelectedTariff,
  showDiscount,
}: Props) {
  return (
    <>
      {mainTariffs.length > 0 && (
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-3">
          {mainTariffs.map((tariff) => (
            <TariffCard
              key={tariff.uuid}
              tariff={tariff}
              selected={selectedTariff === tariff.uuid}
              onSelect={setSelectedTariff}
              showDiscount={showDiscount}
            />
          ))}
        </div>
      )}

      {lastThreeTariffs.length > 0 && (
        <div className="grid gap-2 xs:gap-3 grid-cols-1 xl:grid-cols-3 mt-2 xl:mt-3">
          {lastThreeTariffs.map((tariff) => (
            <div key={tariff.uuid} className="w-full h-full">
              <div className="hidden xl:block h-full">
                <TariffCard
                  tariff={tariff}
                  selected={selectedTariff === tariff.uuid}
                  onSelect={setSelectedTariff}
                  showDiscount={showDiscount}
                />
              </div>

              <div className="xl:hidden">
                <TariffCardMobile
                  tariff={tariff}
                  selected={selectedTariff === tariff.uuid}
                  onSelect={setSelectedTariff}
                  showDiscount={showDiscount}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}