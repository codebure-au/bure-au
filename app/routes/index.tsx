import FreeCellSummary from "~/components/FreeCellSummary";
import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      property: "og:image",
      content: "https://bure.au/images/freecell_play_feature_image.jpg"
    },
    {
      property: "og:image:width",
      content: "1024"
    },
    {
      property: "og:title",
      content: "BURE"
    },
    { title: "BURE" },
    { name: "description", content: "FreeCell Solitaire, no ads, no frills. Available on iOS and Android." },
  ];
}

export default function Index() {
  return <div className="self-stretch w-auto xl:w-full xl:max-w-7xl xl:self-center">
    <FreeCellSummary />
  </div>;
}
