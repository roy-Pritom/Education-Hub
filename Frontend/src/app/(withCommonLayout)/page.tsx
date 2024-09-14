import Assessments from "@/components/HomeComponetes/Assessments/Assessments";
import Feedback from "@/components/HomeComponetes/Feedback";
import Hero from "@/components/HomeComponetes/Hero";
import LatestUpdates from "@/components/HomeComponetes/LatestUpdates/LatestUpdates";
import SubscribedSubjects from "@/components/HomeComponetes/SuscribedSubjects/SubscribedSubjects";
import WhatWeOffer from "@/components/HomeComponetes/WhatWeOffer";

export default function Home() {
  const user = '1'
  return (
    <div>
      <Hero />
      <div className="bg-[#D8F7FD] md:p-10 p-4 mt-10">
        {
          user ?
            (
              <div className="">
                <Assessments />
              </div>
            )
            : (
              <div className="">
                <WhatWeOffer />
                <Feedback />

              </div>
            )
        }

      </div> 
      <div className={`md:p-10 p-4 bg-[#E1E6E6] mt-6 ${user ? 'block' : 'hidden'}`}>
          {user && <LatestUpdates/>}
          {user && <SubscribedSubjects/>}
      </div>
    </div>
  );
}
