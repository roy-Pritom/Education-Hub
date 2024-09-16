import AniamteButton from "@/components/Common/AniamteButton";
import { UserRound, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TeacherDetailsPage = ({params}:{params:{teacherId:string}}) => {
    const {teacherId}=params;
    // console.log(teacherId);
    return (
        <div className="bg-secondaryBackgroundColor md:pt-32 pb-10 pt-14 flex h-screen">
            <div className="bg-blue-950   text-white fixed left-0 top-0 bottom-0 w-64  md:pt-20 px-10 space-y-4">
             <p className="text-xl font-semibold">Subscription</p>
             <p className="text-2xl font-medium">99 EGP / month</p>
             <div className="">
                <Link href={`/subjects/teachers/eduaction/${4}`}>
                <AniamteButton textColor="text-white" btnColor="bg-red-500" message="Subscribe"/>
                </Link>
             </div>
               <div className="">
               <Link href='/'>
             <p className="text-blue-400 text-sm">Watch a Free Lesson</p>
             </Link>
               </div>
            </div>
            <div className="ml-64 p-4 overflow-y-auto h-full mx-auto text-center w-full">
                <div className="space-y-2">
                <div className="rounded-full w-32 h-32 p-4 bg-[#10233D]  mx-auto">
                 <Image src='https://cdn-icons-png.flaticon.com/128/2215/2215500.png' alt="profile" width={120} height={120} className="mx-auto rounded-full bg-white  text-white"/>
                 </div>
                 <p className="text-2xl font-bold">Ahmed Ai-Mansour</p>
                 <p className="italic">Specialized in Modern Arabic Literature</p>
                </div>
                <div className="rounded-md px-5 py-8 text-center space-y-3 bg-slate-200 w-1/2 mx-auto mt-8 shadow-md cursor-pointer">
                <Video className="text-[#0E243D] w-20 h-20 mx-auto" fill="#0E243D" />
                    <p className="text-xl font-bold">Introductory Video</p>
                </div>
                <p className="text-xl font-bold my-10">Student Feedback</p>
                <div className="flex items-center gap-[20%] w-4/6 mx-auto rounded-md bg-[#EBEBE8] p-4 shadow">
                <UserRound className="text-[#FF494F] h-10 w-10" fill="#FF494F"/>
                 <div className="">
                 <p>&rdquo;Mr. AL-Mansour made Arabic literature so engaging.Highly recommended!&rdquo;</p>
                 <p>-Sarah M.</p>
                 </div>
                </div>
                <div className="flex items-center gap-[20%] w-4/6 mx-auto rounded-md bg-[#EBEBE8] p-4 mt-5 shadow">
                <UserRound className="text-[#FF494F] h-10 w-10" fill="#FF494F"/>
                 <div className="">
                 <p>&rdquo;Mr. AL-Mansour made Arabic literature so engaging.Highly recommended!&rdquo;</p>
                 <p>-Sarah M.</p>
                 </div>
                </div>
                {/* details */}
                <div className="w-4/6 mx-auto rounded-md bg-slate-100  p-7 mt-10 shadow space-y-3">
                  <p className="text-xl font-bold">About Ahmed AI-Mansour</p>
                 <p className="text-justify">Mr. AL-Mansour made Arabic literature so engaging.Highly recommended!.Mr. AL-Mansour made Arabic literature so engaging.Highly recommended!</p>
                
                </div>
            </div>
        </div>
    );
};

export default TeacherDetailsPage;