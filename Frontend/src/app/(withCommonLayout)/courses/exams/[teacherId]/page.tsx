"use client"
import EducationNavBar from "@/components/Common/EducationNavBar";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";


const Exams = ({params}:{params:{teacherId:string}}) => {
    // const chapters=
    const items = [
        {
            chapterName:'Chapter Exams',
            lessons:[   
          {
            key: "new",
            label: "Lesson 1",
          },
          {
            key: "copy",
            label: "Lesson 2",
          },
          {
            key: "edit",
            label: "Lesson 3",
          },
          {
            key: "delete",
            label: "Lesson 4",
          }
            ]
        },
        {
            chapterName:'Exam 2',
            lessons:[   
          {
            key: "new",
            label: "Lesson 1",
          },
          {
            key: "copy",
            label: "Lesson 2",
          },
          {
            key: "edit",
            label: "Lesson 3",
          },
          {
            key: "delete",
            label: "Lesson 4",
          }
            ]
        },
        {
            chapterName:'Exam 3',
            lessons:[   
          {
            key: "new",
            label: "Lesson 1",
          },
          {
            key: "copy",
            label: "Lesson 2",
          },
          {
            key: "edit",
            label: "Lesson 3",
          },
          {
            key: "delete",
            label: "Lesson 4",
          }
            ]
        },
      ];
    return (
        <div className="md:py-16 pt-14 min-h-screen">
          <EducationNavBar/>
          <p className="text-center text-2xl font-bold mt-20">Exams</p>
          <div className="flex flex-col gap-10 justify-center items-center mt-10">
             {
                items?.map((item:any,index:number)=><Dropdown
                key={index}
                >
                <DropdownTrigger>
                  <Button 
                    className="bg-slate-600 text-white text-lg mx-auto w-[20%]"
                  >
                  {item?.chapterName}
                    <ChevronDown/>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dynamic Actions" items={item.lessons}>
                  {(lesson:any) => (
               
                    <DropdownItem
                      key={lesson?.key}
                      className=""
                    >
                        {/* lesson id */}
                     <Link href={`/subjects/teachers/examp/${4}`}>
                     <Button fullWidth={true}>
                     {lesson.label}

                     </Button>
                     </Link>
                    </DropdownItem>
           
                  )}
                </DropdownMenu>
              </Dropdown>)
             }
          </div>
        </div>
    );
};

export default Exams;