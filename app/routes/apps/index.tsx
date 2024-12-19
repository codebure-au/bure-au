import FreeCellSummary from "~/components/FreeCellSummary";
import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      property: "og:title",
      content: "BURE - Apps"
    },
    { title: "BURE - Apps" },
    { name: "description", content: "A selection of apps for iOS and Android." },
  ];
}

export default function Index() {
  return <div className="self-stretch w-auto xl:w-full xl:max-w-7xl xl:self-center">
    <FreeCellSummary />
  </div>;
}
