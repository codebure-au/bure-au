import FreeCellSummary from "~/components/FreeCellSummary";
import type { Route } from "./+types/support";
import KlondikeSummary from "~/components/KlondikeSummary";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      property: "og:image",
      content: "https://bure.au/logo512.png"
    },
    {
      property: "og:image:width",
      content: "256"
    },
    {
      property: "og:title",
      content: "BURE - Support"
    },
    { title: "BURE - Support" },
    { name: "og:description", content: "Access support options here." },
  ];
}

export default function Support() {
  return <div className="self-stretch w-auto xl:w-full xl:max-w-7xl xl:self-center">
    <div className="text-3xl font-bold my-3">Support</div>
    <div>
      If you have any questions, feedback, or enquiries, please contact{" "}
      <Link
        to="mailto:support@bure.au"
        className="underline text-cyan-700"
      >support@bure.au</Link>.
    </div>
  </div>;
}
