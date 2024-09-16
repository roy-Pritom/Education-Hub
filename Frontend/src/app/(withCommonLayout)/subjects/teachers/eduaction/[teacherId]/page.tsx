import EducationNavBar from "@/components/Common/EducationNavBar";
import { BookCheck, BookText, NotebookText, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TeacherEducationPage = ({params}:{params:{teacherId:string}}) => {
    const {teacherId}=params;
    // console.log(teacherId);
    return (
     <div className="md:py-16 pt-14">
         <EducationNavBar/>
           <div className="bg-secondaryBackgroundColor pt-14">
             <div className="flex items-center justify-center gap-3">
             <div className="rounded-full w-32 h-32 p-4 bg-[#10233D] ">
                 <Image src='https://cdn-icons-png.flaticon.com/128/2215/2215500.png' alt="profile" width={120} height={120} className="mx-auto rounded-full bg-white  text-white"/>
                 </div>
                 <div className="">
                 <p className="text-2xl font-bold">Ahmed AI-Mansour</p>
                 <p className="text-xl text-blue-400 font-semibold">Arabic</p>
                 </div>
             </div>

             <div className="grid md:grid-cols-2 grid-cols-1 gap-3 md:mx-6 mt-8 mx-2">
                <div className="bg-[#10233D] p-4 text-center rounded-xl  ">
                <BookText className="w-14 h-14 mx-auto" fill="white"/>
                    <p className="text-xl font-semibold text-white">Courses</p>
                </div>
                <div className="bg-[#10233D] p-4 text-center rounded-xl  ">
                <BookCheck className="w-14 h-14 mx-auto" fill="white"/>
                    <p className="text-xl font-semibold text-white">Exams</p>
                </div>
                <div className="bg-[#10233D] p-4 text-center rounded-xl  ">
                <Video className="w-14 h-14 mx-auto text-white" fill="white"/>
                    <p className="text-xl font-semibold text-white">Live Sessions</p>
                </div>
                <div className="bg-[#10233D] p-4 text-center rounded-xl  ">
                <NotebookText className="w-14 h-14 mx-auto " fill="white"/>
                    <p className="text-xl font-semibold text-white">Revisions</p>
                </div>
             </div>

             {/* about courses */}
             <div className="bg-white shadow-xl rounded-xl py-8 px-5 w-1/2 mx-auto mt-10 space-y-2">
                <p className="text-xl font-bold">About the Course: Arabic</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore dicta eum asperiores voluptatum voluptate ea, fugiat repellendus impedit molestiae eaque quos amet eius quis temporibus autem doloremque incidunt omnis.lore</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore dicta eum asperiores voluptatum voluptate ea, fugiat repellendus impedit molestiae eaque quos amet eius quis temporibus autem doloremque incidunt omnis.lore</p>
             </div>
        </div>
     </div>
    );
};

export default TeacherEducationPage;