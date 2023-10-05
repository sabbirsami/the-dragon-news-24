import { BsBookmark } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <div className="px-16">
            <h2 className="text-xl font-semibold"> Dragon News Home</h2>
            <div className="pt-3">
                <div className="border rounded-lg">
                    <div className="flex justify-between bg-slate-100 p-4 items-center rounded-t-lg">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-10 w-10 object-cover rounded-full"
                                src="https://i.ibb.co/DVj40s9/Rectangle-2-4.png"
                                alt=" "
                            />
                            <div className="">
                                <p>Awlad Hossain</p>
                                <p className="text-gray-600 text-sm">
                                    2022-08-21
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <BsBookmark className="text-2xl font-bold" />
                            <PiShareFatLight className="text-3xl" />
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            className="w-full object-cover h-[28rem]"
                            src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt=""
                        />
                        <div className="absolute bottom-0 right-0 m-4 rounded bg-gray-50/70 p-2 text-xs">
                            1.3k views
                        </div>
                    </div>
                    <div className="pt-4 pb-6 px-3">
                        <h2 className="font-bold text-xl">
                            Biden Pledges Nearly $3 Billion To Ukraine In
                            Largest U.S. Military Aid Package Yet
                        </h2>
                        <p className="text-sm pt-2">
                            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden,
                            EU, Euro, Europe, Military, News, Russia, Security,
                            UK, United States, – U.S. President Joe Biden has
                            announced nearly $3 billion in new U.S. military
                            a...{" "}
                            <span className="text-rose-700">
                                <Link to="/">Read More</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
