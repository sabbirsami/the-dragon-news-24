import {
    FaFacebook,
    FaGithub,
    FaGoogle,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
const RightSideNav = () => {
    return (
        <div className="">
            <h2 className="text-xl font-semibold">Login With</h2>
            <div className="text-start pt-4">
                <button className="border py-2 px-3 w-full rounded-t-lg text-start flex items-center gap-3">
                    <FaGoogle className="text-xl ms-2" /> login with Google
                </button>
                <button className="border py-2 px-3 w-full rounded-b-lg text-start flex items-center gap-3">
                    <FaGithub className="text-xl ms-2" />{" "}
                    <span>login with Github</span>
                </button>
            </div>
            <div className="pt-8">
                <h2 className="text-xl font-semibold">Find Us On</h2>
                <div className=" pt-4">
                    <button className="border py-4 px-3 w-full  text-start flex items-center gap-3">
                        <FaFacebook className="text-xl ms-2" />{" "}
                        <span>Facebook</span>
                    </button>
                    <button className="border py-4 px-3 w-full  text-start flex items-center gap-3">
                        <FaTwitter className="text-xl ms-2" />{" "}
                        <span>Twitter</span>
                    </button>
                    <button className="border py-4 px-3 w-full  text-start flex items-center gap-3">
                        <FaInstagram className="text-xl ms-2" />{" "}
                        <span>Instagram</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;
