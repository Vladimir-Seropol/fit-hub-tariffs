import { TariffWithUUID } from "@/types/tariff";

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export function mapTariffs(tariffs: TariffWithUUID[]) {
  return tariffs.map((tariff, index) => ({
    ...tariff,
    mobileText:
      index === 1
        ? capitalize(tariff.text.split(" ").slice(1, 4).join(" "))
        : tariff.text,
  }));
}