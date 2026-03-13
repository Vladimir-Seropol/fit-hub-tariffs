"use client";

import { TariffCardProps } from "@/types/tariff";
import TariffCardBest from "./TariffCardBest";
import TariffCardRegular from "./TariffCardRegular";

export default function TariffCard(props: TariffCardProps) {
  const { tariff } = props;

  if (tariff.is_best) {
    return <TariffCardBest {...props} />;
  }

  return <TariffCardRegular {...props} />;
}