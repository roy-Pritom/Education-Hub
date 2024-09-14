
const Feedback = () => {
    const feedBacks=[
        {
           text:"You can adjust the classes to match your desired styling",
           name:"- Ahmed S."
        },
        {
           text:"You can adjust the classes to match your desired styling",
           name:"- Fatima A."
        },
        {
           text:"You can adjust the classes to match your desired styling",
           name:"- Mohamed K."
        },
    ]
    return (
        <div className="mt-24">
            <p className="md:text-4xl text-2xl font-bold text-center mb-8">What Our Student Say?</p>
            {
                feedBacks?.map((item:any,index:number)=> <div
                key={index}
                className="text-center bg-white rounded-md p-5 shadow-lg space-y-2 w-[60%] mx-auto mb-5">
                <p className="md:text-lg text-base">&quot;{item?.text}&quot;</p>
                <p className="text-lg text-red-500">{item?.name}</p>
            </div>)
            }
           
        </div>
    );
};

export default Feedback;