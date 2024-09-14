import { Button } from "@nextui-org/react";

const Assessments = () => {
    const assessments = [
        {
            title: 'Arabic Week 1 Exam',
            text: "Prepare for the Arabic week 1 exam with our practice tests and sample questions.",
            name: "Start Assessment"
        },
        {
            title:"Applied Mathematics Week 1 Exam",
            text: "Test your knowledge with our latest applied Mathematics week 1 exam.New question added weekly! ",
            name: "Take Exam"
        },
        
    ]
    return (
        <div className="mt-5">
            <p className="md:text-4xl text-2xl font-bold text-center mb-8">Assessments</p>
            {
                assessments?.map((item: any, index: number) => <div
                    key={index}
                    className="text-center bg-white rounded-md p-5 shadow-lg space-y-4 w-[65%] mx-auto mb-5">
                    <p className="text-lg font-bold">{item?.title}</p>
                    <p className=" text-base">&quot;{item?.text}&quot;</p>
                    <Button className="bg-red-500 text-white rounded-full font-semibold hover:bg-blue-400">{item?.name}</Button>
                </div>)
            }

        </div>
    );
};

export default Assessments;