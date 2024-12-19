import { Link } from "react-router";
import type { Route } from "./+types/privacy";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      property: "og:title",
      content: "BURE - Privacy Policy"
    },
    { title: "BURE - Privacy Policy" },
    { name: "description", content: "Our Privacy Policy." },
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

const heading = "text-2xl font-bold mb-4";
const p = "mb-4";
const indent = "ml-8 mb-4";

export default function Privacy() {
  return <div className="self-stretch w-auto xl:w-full xl:max-w-7xl xl:self-center">
    <div className="text-4xl font-bold mb-4">Privacy Policy</div>
    <div className={heading}>Introduction</div>
    <div className={p}>
      BURE STUDIOS (ABN: 99 736 889 745) is committed to providing quality
      services to you and this policy outlines our ongoing obligations to
      you in respect of how we manage your Personal Information.
    </div>
    <div className={p}>
      We have adopted the Australian Privacy Principles (APPs) contained in
      the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way
      in which we collect, use, disclose, store, secure and dispose of your
      Personal Information.
    </div>
    <div className={p}>
      A copy of the Australian Privacy Principles may be obtained from the
      website of The Office of the Australian Information Commissioner at
      www.aoic.gov.au
    </div>
    <div className={heading}>What is Personal Information?</div>
    <div className={p}>
      Personal Information is information or an opinion that identifies an
      individual. Examples of Personal Information include: names,
      addresses, email addresses, phone and facsimile numbers.
    </div>
    <div className={heading}>Personal Information We Collect</div>
    <div className={p}>
      None. We don&apos;t really care about who you are, just buy our stuff.
    </div>
    <div className={heading}>Policy Updates</div>
    <div className={p}>
      This Policy may change from time to time and is available on our
      website.
    </div>
    <div className={heading}>Privacy Policy Complaints and Enquiries</div>
    <div className={p}>
      If you have any queries or complaints about our Privacy Policy please
      contact us at:
    </div>
    <div className={indent}>privacy@bure.com.au</div>
    <div className={indent}>
      <div>BURE STUDIOS</div>
      <div>PO Box 1143</div>
      <div>Hampton North</div>
      <div>VIC 3188</div>
      <div>Australia</div>
    </div>
  </div>;
}
