import { Link } from "react-router";
import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      property: "og:title",
      content: "BURE - Policies"
    },
    { title: "BURE - Policies" },
    { name: "description", content: "A list of policies relevant to our products and services." },
    {
      property: "og:image",
      content: "https://bure.au/logo512.png"
    },
    {
      property: "og:image:width",
      content: "256"
    },
  ];
}

export default function Index() {
  return <div className="self-stretch w-auto xl:w-full xl:max-w-7xl xl:self-center">
    <div className="text-4xl font-bold mb-4">Policies</div>
    <div className="mb-4">We don&apos;t stand for much. But what we do stand for is listed right here, for legal purposes.</div>
    <ul>
      <li>
        <Link to="/policies/privacy" className="underline text-cyan-700 visited:text-purple-700">Privacy Policy</Link>
      </li>
    </ul>
  </div>;
}
