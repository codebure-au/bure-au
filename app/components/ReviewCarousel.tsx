import { useEffect, useState } from "react";

interface Review {
   name: string;
   title?: string;
   date: string;
   message: string;
}

const reviews: Review[] = [
   {
      name: "DCarl5678",
      date: "Dec 8, 2024",
      title: "Just Right",
      message: "Love this app. Simple options to control the preferences you want, no endless adds to keep you from playing. Just the game of FreeCell. 10/10. 🙏🏼"
   },
   {
      name: "NEED CHANGES TO HAPPEN NOW",
      date: "Nov 12, 2024",
      title: "Just a game",
      message: "No adds no cash grab no annoyance:) love this game really focuses on the game alone thank you. Not all heroes wear capes.😎"
   },
   {
      name: "RichDude20900",
      date: "Oct 11, 2024",
      title: "Best free FreeCell",
      message: "Awesome no frills game with no adds"
   },
   {
      name: "DukeSkath",
      date: "Jul 1, 2024",
      title: "Excellent",
      message: "No ads, no frills. Clean design. Thank you!"
   },
   {
      name: "CrankyKidneys",
      date: "Jun 26, 2024",
      title: "Newest Version is perfect",
      message: "Every choice is flawless. Exactly what I want and none of what I don’t."
   },
   {
      name: "Crazy for puzzles",
      date: "Jun 7, 2024",
      title: "Simply the best!",
      message: "I have 3 different free cell apps. This one is by far the best. I reported a glitch I was having on my iPad. It was fixed within days. Perfect now! No ads."
   },
   {
      name: "Incorrect Location",
      date: "Jan 1, 2024",
      title: "Perfect",
      message: "Exactly what I wanted and nothing more. Perfect."
   },
   {
      name: "RedQHearts",
      date: "Mar 20, 2023",
      title: "Finally!",
      message: "User friendly, clean, simple play without all of the irritating ads and in-app purchases! Thank you for helping an old girl out!"
   },
   {
      name: "JADSmiles",
      date: "Feb 19, 2023",
      title: "Thank you",
      message: "To the kind soul who made a game without ads, and didn’t have some hidden payment system built in, it is very much appreciated!"
   },
   {
      name: "Jeff Lemke",
      date: "Nov 22, 2024",
      message: "Add Free! It's got all the basics right. Thank you for putting this game together. The developer asks you basically to leave him a tip for the game."
   },
   {
      name: "Scott Thomas",
      date: "Sep 22, 2024",
      message: `Great simple Freecell. No annoying animations or "celebrations". Love not having the terrible "full-screen" ads!`
   },
   {
      name: "Romain TAILLANDIER",
      date: "Sep 14, 2024",
      message: "Than Freecell. No advertising. No special content. No exceptional promotion. No daily challenges. No alliances. PERFECT. Thank you thank you thank you. A game where we play."
   },
   {
      name: "Ben",
      date: "Aug 12, 2024",
      message: "FREE. Like actually free. Works as expected"
   },
   {
      name: "Zul'daar",
      date: "Jun 12, 2024",
      message: "No ads, No microtransactions, No predatory tactics, No popup asking for a review. Just freecell. Get this app higher on the search list, save people from unwanted predatory mobile experiences."
   },
   {
      name: "Christian Schroeder",
      date: "Apr 2, 2024",
      message: "Simple and efficient, no nonsense and above all, no annoying ads. I like the spirit, you deserve your drink!"
   }
];

export default function ReviewCarousel() {
   const [state, setState] = useState<{ currentIndex: number, sliding: 'no-slide' | 'slide-left' | 'post-slide' }>({ currentIndex: 0, sliding: 'no-slide' });

   function renderReview(review: Review, index: number) {
      const { name, date, title, message } = review;
      return (
         <div key={index} className="w-2/6 px-2 flex flex-col items-center justify-center">
            <div className="bg-stone-50 py-2 px-4 rounded-md w-full">
               <div className="flex flex-row items-center">
                  <div className="text-nowrap font-medium">{name}</div>
                  <div className="text-nowrap mx-2 flex-1 text-stone-700">{date}</div>
                  <div className="text-xl text-yellow-500">★★★★★</div>
               </div>
               {title ? <div className="text-xl font-bold mt-1">
                  {title}
               </div> : <></>}
               <div className="mt-1">
                  {message}
               </div>
            </div>
         </div>
      )
   }

   function getIndexes() {
      const { currentIndex } = state;

      if (currentIndex === reviews.length - 2) {
         return [currentIndex, currentIndex + 1, 0];
      } else if (currentIndex === reviews.length - 1) {
         return [currentIndex, 0, 1];
      } else {
         return [currentIndex, currentIndex + 1, currentIndex + 2];
      }
   }

   const reviewSelection = getIndexes().map(index => reviews[index]);

   useEffect(() => {
      const timeToWait = 5000;
      switch (state.sliding) {
         case 'no-slide':
            // set a timeout to slide
            const timeoutId = setTimeout(() => {
               setState(state => ({ ...state, sliding: 'slide-left' }))
            }, timeToWait);
            return () => clearTimeout(timeoutId);
         case 'slide-left':
            // do nothing
            break;
         case 'post-slide':
            // change index and set slide to no-slide
            setState(state => {
               let currentIndex = state.currentIndex;
               if (currentIndex < reviews.length - 1)
                  currentIndex++;
               else
                  currentIndex = 0;
               return { currentIndex, sliding: 'no-slide' }
            });
      }
   }, [state.sliding]);

   return (
      <div className="bg-stone-300 rounded-lg py-4 px-2 my-4 overflow-x-hidden w-full h-52">
         <div className={`flex flex-1 flex-row items-center slide-box ${state.sliding} h-full`} onAnimationEnd={() => {
            setState(state => ({ ...state, sliding: 'post-slide' }))
         }}>
            {reviewSelection.map(renderReview)}
         </div>
      </div>
   )
}