import { useState } from "react";
import { NavLink } from "react-router-dom";
import userImg from "../../assets/user.png";

const Navbar = () => {
    const [user, setUser] = useState(false);
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div className="">
                    <nav>
                        <ul className="flex gap-5">
                            <li>
                                <NavLink className={"pb-3"} to={"/"}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={"pb-3"} to={"/about"}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={"pb-3"} to={"/career"}>
                                    Career
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="">
                    {user ? (
                        <img
                            className="w-10 h-auto mt-2"
                            src={userImg}
                            alt=""
                        />
                    ) : (
                        <button className="bg-rose-700 text-white  py-2 mt-2 px-8  ">
                            <NavLink to={"/login"}>login</NavLink>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
