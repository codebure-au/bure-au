import { Link, Outlet, type LinkProps } from "react-router";
import type { Route } from "./+types/layout";

const section = "flex flex-col items-stretch justify-start mx-4 my-2";
const sectionHeader = "font-bold select-none cursor-default";
const link = "text-black no-underline hover:underline my-1";

const FooterLink: React.FC<LinkProps> = (props) => {
   return <Link {...props} className={link} />
}

export function meta({ }: Route.MetaArgs) {
   return [
      {
         property: "og:site_name",
         content: "BURE Software & Design"
      },
   ];
}

function NavHeader() {
   return (
      <div className="bg-seagreen p-4 flex flex-col items-stretch justify-center xl:items-center min-h-10vh">
         <div className="w-auto xl:w-full xl:max-w-7xl">
            <Link to="/">
               <img alt="BURE Logo" src="/logo.svg" width={100} height={100} className="w-16 h-16 p-1" />
            </Link>
         </div>
      </div>
   );
}

function NavFooter() {
   return (
      <div className="bg-stone-200 flex flex-col items-stretch min-h-25vh">
         <div className="px-4 py-6 flex flex-row flex-wrap justify-between sm:justify-start w-full self-center xl:max-w-7xl">
            <div className={section}>
               <div className={sectionHeader}>BURE</div>
               <FooterLink to="/">Home</FooterLink>
               <FooterLink to="/support">Support</FooterLink>
            </div>
            <div className={section}>
               <div className={sectionHeader}>
                  <FooterLink to="/apps" className={link}>Apps</FooterLink>
               </div>
               <FooterLink to="/apps/freecell" className={link}>FreeCell Solitaire</FooterLink>
            </div>
            <div className={section}>
               <div className={sectionHeader}>
                  <FooterLink to="/policies" className={link}>Policies</FooterLink>
               </div>
               <FooterLink to="/policies/privacy" className={link}>Privacy Policy</FooterLink>
            </div>
         </div>
      </div>
   );
}

export default function Layout() {
   return (
      <div>
         <NavHeader />
         <div className="flex flex-1 flex-col items-stretch justify-start min-h-65vh bg-stone-50 py-3.5 px-4 sm:py-4 sm:px-6">
            <Outlet />
         </div>
         <NavFooter />
      </div>
   );
}