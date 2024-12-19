import ReviewCarousel from "~/components/ReviewCarousel";
import type { Route } from "./+types/freecell";
import { Link } from "react-router";

const link = "underline text-cyan-700 visited:text-purple-700";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      property: "og:title",
      content: "BURE - FreeCell Solitaire"
    },
    { title: "BURE - FreeCell Solitaire" },
    { name: "description", content: "FreeCell Solitaire, no ads, no frills. Available on iOS and Android." },
    {
      property: "og:image",
      content: "https://bure.au/images/freecell_play_feature_image.jpg"
    },
    {
      property: "og:image:width",
      content: "1024"
    }
  ];
}

export default function FreeCell() {
  return <div className="self-stretch w-auto xl:w-full xl:max-w-7xl xl:self-center">
    <div className="flex flex-col items-stretch sm:flex-row pb-1 pl-4">
      <div className="flex flex-1 flex-row text-lg">
        <div className="flex justify-center items-center mr-4">
          <img
            alt="FreeCell Solitaire Icon"
            width={256}
            height={256}
            src="/images/freecell_icon.jpg"
            className="h-20 w-20 rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-6xl font-bold">
            <div className="select-none">FreeCell Solitaire</div>
          </div>
          <div className="text-lg text-stone-800 select-none">
            Classic FreeCell. No Ads. No Frills.
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-row justify-end items-center">
        <div className="w-6/12 sm:w-48">
          <Link
            to="https://play.google.com/store/apps/details?id=au.com.bure.apps.freecell&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            target="_blank"
          >
            <img
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              className="w-full h-auto"
            />
          </Link>
        </div>
        <div className="w-6/12 sm:w-48">
          <Link
            to="https://apps.apple.com/app/freecell-ad-free/id1645268425"
            target="_blank"
          >
            <img
              alt="Download on the App Store"
              src="/images/appstore.svg"
              className="h-auto w-full px-5"
            />
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-stone-200 rounded-lg p-4 my-2 text-2xl text-center">
      <div>
        The classic solitaire game, available for Apple and Android devices.
      </div>
      <div>
        Unlimited undo, unlimited replay, lots of customisation, and absolutely no ads ever.
      </div>
    </div>
    <ReviewCarousel />
    <div className="bg-stone-200 rounded-lg flex flex-col items-center sm:flex-row sm:items-start p-4 my-4">
      <div className="flex-1 flex flex-col align-start px-4 text-lg">
        <div className="text-6xl font-bold mb-4">What is FreeCell?</div>
        <p className="mb-4">
          FreeCell was invented in 1978 by Paul Alfille, a medical student at the University of Illinois. It is based off earlier solitaire variants, with rules similar to{" "}
          <Link to="https://en.wikipedia.org/wiki/Klondike_(solitaire)" className={link}>Klondike</Link>
          , and{" "}
          <Link to="https://en.wikipedia.org/wiki/Baker%27s_Game" className={link}>Baker's Game</Link>.
        </p>
        <p className="my-2">
          Solitaire card games are intended to be played by a single (or solitary, hence the name) person, and there are many different variants of solitaire games.
        </p>
        <p className="my-2">
          FreeCell is a solitaire variant played using a traditional 52 card deck, with all cards dealt face up. There are four open (or "free") cells, and four foundations - one for each suit. Players must build tableaux of alternating colours, and foundations of each suit, in a similar way to Klondike solitaire. However, players are restricted in the amount of cards they can move at one time, players can only move cards if there is a free cell for that card to be moved into, and out of.
        </p>
        <p className="my-2">The game is considered beaten when all cards are returned to the foundation for their suit.</p>
        <p className="my-2">
          The first ever version of FreeCell ran on a 512x512 pixel monochrome screen. We've come a long way!
        </p>
      </div>
      <img alt="Screenshot of FreeCell Solitaire gameplay on an iOS device." src="/images/freecell_ios_screenshot.png" className="w-3/5 sm:w-52 mt-8 sm:mt-0" />
    </div>
    <div className="bg-seagreen rounded-lg flex flex-col items-center px-4 py-6 my-4 text-stone-50 text-center">
      <div className="font-bold text-6xl mb-2">
        Why No Ads?
      </div>
      <div className="text-2xl font-medium mb-4">
        Our philosophy is simple: ads are bad.
      </div>
      <div className="text-lg mb-2">
        Advertising on the internet is pervasive and unrelenting. Everything is so crammed full of ads that it often feels like their purpose is to get you to view as many ads as possible, instead of a way to fund continued operation of a service that brings you value, or improves your life.
      </div>
      <div className="text-lg mb-2">
        Some things are just better as they are, without the intrusion or distraction of ads. Our goal is to bring you products that serve your interests, without the underlying desire for more engagement, more growth, more revenue from you.
      </div>
      <div className="text-lg">
        Our products are a labour of love, but because of your generosity, our operational costs are mostly covered. Thank you so much for your support! 🎉
      </div>
    </div>
    <div className="bg-stone-200 rounded-lg flex flex-col items-start p-4 my-4">
      <div className="flex flex-col items-center sm:flex-row sm:items-end self-center mb-2">
        <div className="text-6xl font-bold mb-2">The Mechanics of Numbers</div>
        <div className="text-3xl font-bold mb-4 ml-0 sm:ml-4">
          (or the 32k problem)
        </div>
      </div>
      <div className="text-lg mb-2">
        Our version of FreeCell Solitaire does things a little bit differently than the "traditional" Microsoft implementation, and to understand why, we'll need to dive into some maths, and a little bit of computer history.
      </div>
      <div className="text-2xl font-bold mb-2">Shuffling Numbers</div>
      <div className="text-lg mb-2">
        There are 52 cards in a traditional deck, thirteen card values from Ace to King, and four suits. These 52 cards can be placed in any order, and when shuffling we are doing exactly that: rearranging the order of the 52 cards.
      </div>
      <div className="text-lg mb-2">
        How do we know how many possible combinations a deck can have? Well, a little bit of maths will help us here (fear not, it is very simple).
      </div>
      <div className="text-lg mb-2">
        If we were only allowed to move one card, there would be <strong>52</strong> positions that the single card could be moved to. If we could move two cards, the first card would have <strong>52</strong> positions to choose from, but the second card would have <strong>51</strong> positions to choose from, since the first card has removed one possible position. Being able to move only two cards would give us <strong>52 x 51 = 2,652</strong> possible shuffles!
      </div>
      <div className="text-lg mb-2">
        If we extend that logic out for every card, we get <strong>52 x 51 x 50 x 49 x ... x 3 x 2 x 1 = 52!</strong> shuffles. Adding a <strong>!</strong> after a number is called a factorial, and means that that number has been multiplied by every previous number, in the same way we've just demonstrated. But, what exactly is <strong>52!</strong>? Well, it's a very big number. So big that you might not be able to get the answer on your calculator! It's so big we've given it it's own paragraph:
      </div>
      <div className="text-2xl font-semibold text-center self-center mb-2 break-all">
        80,658,175,170,943,878,571,660,636,856,403,766,975,289,505,440,883,277,824,000,000,000,000
      </div>
      <div className="text-lg mb-2">
        This, of course, is a number so mind-bogglingly big that it would be very very probable that any shuffle in the history of the world would have been completely unique, never seen before, and never to be repeated. Take a deck of cards out right now, and shuffle it, and you've probably made history.
      </div>
      <div className="text-2xl font-bold mb-2">
        Shuffling Bits
      </div>
      <div className="text-lg mb-2">
        In an ideal world, every possible shuffle would have its own number, and we would be able to select any possible shuffle at any time and play the resulting game. Unfortunately, 52! is just so big that assigning each possible shuffle a number is beyond feasible (at least, if you wanted people to be able to use them!) But there needed to be a way for players to replay games that they had found particularly challenging or engaging, or to share those games with their friends.
      </div>
      <div className="text-lg mb-2">
        Microsoft has famously released a version of FreeCell with every version of Windows since 1995, and they originally tackled this problem by using a <Link to="https://en.wikipedia.org/wiki/Pseudorandom_number_generator" className={link}>Pseudorandom number generator</Link> (PRNG) with an input "seed", that would generate the same shuffle every time, based on that seed. However, computers in 1995 did not generally have the memory or computing power to handle exceptionally large numbers, leading Microsoft to provide only 32,000 possible shuffles. Microsoft's PRNG used a 16-bit signed integer as a seed. An integer is a whole number (like 1, or 256, or 1234), and can either be unsigned (positive numbers only), or signed (both positive and negative numbers). A 16-bit signed integer can only hold up to 16 bits of information, meaning its valid values can range from -32,768 to 32,767, hence the 32,000 game limit.
      </div>
      <div className="text-2xl font-bold mb-2">
        Size Does Matter
      </div>
      <div className="text-lg mb-2">
        From what we've seen so far, 32,000 is a much, much smaller number than 52!, a mere drop in the bucket. So how do we achieve the unthinkable, and give you the ability to play every possible shuffle?
      </div>
      <div className="text-lg mb-2">
        Firstly, we don't use a PRNG. Our algorithm is as close to truly random as possible, meaning that you will (almost certainly) never get the same game dealt to you twice. But you've told us that sometimes you'd like to be able to put aside one hand, to revisit it at another time if it is challenging or maybe even unsolvable (it is possible!)
      </div>
      <div className="text-lg mb-2">So in order to make the most of our 52! shuffles and your desire for replayability, we simply allocate save data slots, like a video game, with the ability to save and load those games at any time.</div>
    </div>
    {/* 
    // review carousel 
  */}
  </div>;
}
