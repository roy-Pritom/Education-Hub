import { Button } from "@nextui-org/react";

const SubscribedSubjects = () => {
    const SubscribedSubjects = [
        {
            title: 'Arabic',
            name: "Go to the Subject"
        },
        {
            title:"Applied Mathematics",
            name: "Go to the Subject"
        },
        
    ]
    return (
        <div className="md:mt-20 mt-10">
            <p className="md:text-4xl text-2xl font-bold text-center mb-8">Subscribed Subjects</p>
            {
                SubscribedSubjects?.map((item: any, index: number) => <div
                    key={index}
                    className="text-center bg-white rounded-md p-5 shadow-lg space-y-4 w-[65%] mx-auto mb-5">
                    <p className="text-lg font-bold">{item?.title}</p>
                    <Button className="bg-red-500 text-white rounded-full font-semibold hover:bg-blue-400">{item?.name}</Button>
                </div>)
            }

        </div>
    );
};

export default SubscribedSubjects;