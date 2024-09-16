import AniamteButton from "@/components/Common/AniamteButton";
import EducationNavBar from "@/components/Common/EducationNavBar";
import {RadioGroup, Radio, Button} from "@nextui-org/react";

import { Video } from "lucide-react";

const LessonPage = ({params}:{params:{lessonId:string}}) => {


    const quizes=[
        {
             ques:"What is Arbi?",
             options:[
                'a) Subject',
                'b) Subject',
                'c) Subject',
                'd) Subject'
             ]
        },
        {
             ques:"What is Arbi2?",
             options:[
                'a) Subject',
                'b) Subject',
                'c) Subject',
                'd) Subject'
             ]
        },
        {
             ques:"What is Arbi3?",
             options:[
                'a) Subject',
                'b) Subject',
                'c) Subject',
                'd) Subject'
             ]
        },
    ]
    return (
        <div className="bg-secondaryBackgroundColor md:py-16 pt-14 min-h-screen text-center">
            <EducationNavBar/>
            <p className="text-2xl font-bold text-center my-5">Lesson 1 : arabic</p>
            <div className="p-10 w-1/2 bg-slate-300 rounded-md mx-auto">
                <Video className="w-14 h-14 mx-auto text-black" fill="black"/>
            </div>
            <p className="text-xl font-bold my-5">Quiz</p>

            <div className="">
                    {
                        quizes?.map((item:any,index:number)=><div
                        key={index} className="mt-4"
                        >
                           {/* <p>{index + 1}. {item?.ques}</p> */}
                           <RadioGroup label={`${index + 1}. ${item?.ques}`}>
      {item?.options?.map((option:any, i:number) => (
        <Radio key={i} value={option.toLowerCase().replace(" ", "-")} className=" mx-auto">
          {option}
        </Radio>
      ))}
    </RadioGroup>
                         
                        </div>)
                    }
                    <div className="mt-5">
                    <AniamteButton message="Submit" btnColor="bg-blue-400" textColor="text-white"/>
                    </div>
            </div>
            <div className="w-1/2 mx-auto">
            <p className="text-xl my-4 ">Summary</p>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officia rerum in expedita libero iusto quidem aperiam, cumque sunt cum magni quo doloribus necessitatibus facere sit sed dignissimos! Aperiam, rem.</p>
            </div>
        </div>
    );
};

export default LessonPage;