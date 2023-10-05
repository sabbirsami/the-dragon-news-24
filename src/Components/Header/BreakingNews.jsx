import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="container mx-auto">
            <div className="flex bg-gray-200">
                <p className="bg-rose-700 text-white  py-4 px-8  ">Latest</p>

                <Marquee className="gap-x-8" pauseOnHover={true}>
                    <Link to={"/"}>
                        Match Highlights: Germany vs Spain — as it happened !
                        Match Highlights: Germany vs Spain as...{" "}
                    </Link>
                    <Link to={"/"}>
                        Match Highlights: Germany vs Spain — as it happened !
                        Match Highlights: Germany vs Spain as...{" "}
                    </Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;
