import AniamteButton from "@/components/Common/AniamteButton";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const SubjectsTeacherPage = ({params}:{params:{subjectId:string}}) => {
    const {subjectId}=params;
    // console.log(subjectId);
    const teachers=[
        {
            id:1,
            name:"Ahmed Al-Mansour",
            label:"Specialized in Modern Arabic Literature"
        },
        {
            id:2,
            name:"Fatema EI-Sayed",
            label:"Expert in Classic Arabic"
        },
        {
            id:3,
            name:"Ahmed Al-Mansour",
            label:"Specialized in Modern Arabic Literature"
        },
    ]
    return (
        <div className="bg-secondaryBackgroundColor md:py-32 pt-14 ">
            <p className="text-3xl font-bold text-center mb-10">Arabic Language Teachers</p>
            {
                teachers?.map((teacher:any)=><div 
                key={teacher?.id}
                className="bg-white p-3  shadow-lg  rounded-md mx-auto  text-center space-y-3 mb-4 w-1/5"
                >
                    <Image src='https://cdn-icons-png.flaticon.com/128/2215/2215500.png' alt="profile" width={70} height={70} className="mx-auto"/>
                <p className="text-xl font-bold text-center">{teacher?.name}</p>
                <p className="text-sm">{teacher?.label}</p>
                {/* <Button color="primary" className="text-black">View Profile</Button> */}
              <Link href={`/subjects/teachers/teacher/${teacher?.id}`}>
              <AniamteButton message="View Profile" btnColor="bg-blue-400" textColor="text-black"/></Link>
                </div>)
            }
        </div>
    );
};

export default SubjectsTeacherPage;