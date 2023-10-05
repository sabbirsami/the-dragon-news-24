import BreakingNews from "../Header/BreakingNews";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";
import Category from "../Main/Category";
import News from "../Main/News";
import RightSideNav from "../Main/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className="container mx-auto py-6">
                <div className="grid grid-cols-5 gap-2">
                    <div className="">
                        <Category />
                    </div>
                    <div className="col-span-3">
                        <News />
                    </div>
                    <div className="">
                        <RightSideNav />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
