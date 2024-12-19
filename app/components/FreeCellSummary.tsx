import { Link, type LinkProps } from "react-router";

const SummaryLink: React.FC<LinkProps> = (props) => {
   return <Link {...props} className="no-underline text-inherit" />
};

export default function FreeCellSummary({ linkEnabled }: { linkEnabled?: boolean }) {
   return (
      <div className="flex flex-col-reverse items-stretch sm:flex-row pb-1">
         <div className="flex flex-5 flex-col text-lg">
            <div className="flex flex-row">
               <div className="flex justify-center items-center mr-2">
                  <img
                     alt="FreeCell Solitaire Icon"
                     width={256}
                     height={256}
                     src="/images/freecell_icon.jpg"
                     className="h-12 w-12 rounded-lg"
                  />
               </div>
               <div className="flex-1">
                  <div className="text-4xl font-bold">
                     {linkEnabled === false ? <div className="select-none">FreeCell Solitaire</div> : <SummaryLink to="/apps/freecell">FreeCell Solitaire</SummaryLink>}
                  </div>
                  <div className="text-sm text-stone-800 select-none">
                     Classic FreeCell. No Ads. No Frills.
                  </div>
               </div>
            </div>
            <div className="my-4">
               <div className="flex flex-row items-center">
                  <div className="w-6/12 sm:w-32">
                     <Link
                        to="https://play.google.com/store/apps/details?id=au.com.bure.apps.freecell&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                        target="_blank"
                     >
                        <img
                           alt="Get it on Google Play"
                           src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                           className="max-w-full h-auto"
                        />
                     </Link>
                  </div>
                  <div className="w-6/12 sm:w-32">
                     <Link
                        to="https://apps.apple.com/app/freecell-ad-free/id1645268425"
                        target="_blank"
                     >
                        <img
                           alt="Download on the App Store"
                           src="/images/appstore.svg"
                           className="max-w-full h-auto w-4/5"
                        />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex flex-2 justify-center items-center mb-4">
            <Link to="/apps/freecell">
               <img
                  alt="FreeCell Solitaire promo image"
                  src="/images/freecell_play_feature_image.jpg"
                  className="w-full object-contain h-40"
               />
            </Link>
         </div>
      </div>
   )
}