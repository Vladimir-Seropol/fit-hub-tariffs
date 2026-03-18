"use client";

import { TariffCardProps } from "@/types/tariff";
import TariffCardBest from "./TariffCardBest";
import TariffCardRegular from "./TariffCardRegular";

export default function TariffCard(props: TariffCardProps) {
  const { tariff } = props;

  return tariff.is_best
    ? <TariffCardBest {...props} />
    : <TariffCardRegular {...props} />;
}