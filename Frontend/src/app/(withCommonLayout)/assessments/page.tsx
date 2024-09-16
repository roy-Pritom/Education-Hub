import AniamteButton from "@/components/Common/AniamteButton";

const AssessmentsPage = () => {
    return (
    <div className="py-24 bg-secondaryBackgroundColor">
        <p className="text-3xl font-bold mb-5 text-center">Assessments</p>
            <div className="">
            <div className="space-y-3 w-[95%] mx-auto  shadow-xl px-5 py-8 rounded-xl bg-white">
                <p className="md:text-2xl text-xl font-bold text-red-500">Arabic Assessments</p>
                <hr className="border-2 border-cyan-400" />
                <p className="md:text-xl text-lg font-bold">Week 1 Exam</p>
                <p>Test your knowledge with our Week 1 Arabic exam,Includes various question types.</p>
                <AniamteButton btnColor="bg-red-500" textColor="text-white"    message="Start Assessment"/>
                <div className="space-y-3 pt-5">
                <p className="md:text-xl text-lg font-bold ">Daily Assessment</p>
                <p>Quick daily quiz to test your Arabic skills and track your progress.</p>
                <AniamteButton btnColor="bg-red-500" textColor="text-white"   message="Take Assessment"/>
                {/* <Button className="bg-red-500 text-white rounded-full font-semibold hover:bg-blue-400">Take Assessment</Button> */}
                </div>
            </div>
        </div>
        {/* 2 nd assessments */}
            <div className="mt-6">
            <div className="space-y-3 w-[95%] mx-auto  shadow-xl px-5 py-8 rounded-xl bg-white">
                <p className="md:text-2xl text-xl font-bold text-red-500">Applied Mathematics Assessments</p>
                <hr className="border-2 border-cyan-400" />
                <p className="md:text-xl text-lg font-bold">Week 1 Exam</p>
                <p>Challenge yourself with our Week 1 Applied Mathematics exam.Covers key topics.</p>
              <AniamteButton btnColor="bg-red-500" textColor="text-white"    message="Start Assessment"/>
               
            </div>
        </div>
        
            <div className="md:w-[250px]  mx-auto mt-10">
        <AniamteButton btnColor="bg-blue-400" textColor="text-white"  message="Retake Done Assessment"/>
            </div>

    </div>
    );
};

export default AssessmentsPage;