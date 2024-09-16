"use client"
import {Calendar} from "@nextui-org/react";
import {parseDate} from '@internationalized/date';
import EducationNavBar from "@/components/Common/EducationNavBar";
const LiveSessionPage = () => {
    return (
        <div className="bg-secondaryBackgroundColor md:py-16 pt-14 min-h-screen text-center">
               <EducationNavBar/>
               <p className="text-2xl font-bold text-center my-10">Upcoming Live Sessions</p>
             <div className="flex gap-x-4 justify-center">
      {/* <Calendar aria-label="Date (No Selection)" /> */}
      <Calendar aria-label="Date (Uncontrolled)" defaultValue={parseDate("2020-02-03")} />
    </div>
        </div>
    );
};

export default LiveSessionPage;