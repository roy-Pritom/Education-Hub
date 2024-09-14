import { Button } from "@nextui-org/react";

const LatestUpdates = () => {
    const LatestUpdates = [
        {
            title: 'new Features Added',
            text: "We have added new interactive features to enhance your learning experience.Check them ot now!",
            name: "Learn More"
        },
        {
            title:"Upcoming Live Sessions",
            text: "Join our upcoming live sessions on key exam topics.Dates and Details avalable here.",
            name: "View Schedule"
        },
        
    ]
    return (
        <div className="mt-5">
            <p className="md:text-4xl text-2xl font-bold text-center mb-8">Latest Updates</p>
            {
                LatestUpdates?.map((item: any, index: number) => <div
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

export default LatestUpdates;