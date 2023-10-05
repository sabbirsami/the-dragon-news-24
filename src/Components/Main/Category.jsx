import { NavLink } from "react-router-dom";

const Category = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold">All Category</h2>
            <div>
                <nav>
                    <ul className=" pt-3">
                        <li className="px-6 py-3  bg-gray-200">
                            <NavLink to={"/national-news"}>
                                National News
                            </NavLink>
                        </li>
                        <li className="px-6 py-3 ">
                            <NavLink to={"/national-news"}>
                                Breaking News
                            </NavLink>
                        </li>
                        <li className="px-6 py-3 ">
                            <NavLink to={"/national-news"}>
                                Regular News
                            </NavLink>
                        </li>
                        <li className="px-6 py-3 ">
                            <NavLink to={"/national-news"}>
                                International News
                            </NavLink>
                        </li>
                        <li className="px-6 py-3 ">
                            <NavLink to={"/national-news"}>Sports News</NavLink>
                        </li>
                        <li className="px-6 py-3 ">
                            <NavLink to={"/national-news"}>
                                Entertainment
                            </NavLink>
                        </li>
                        <li className="px-6 py-3 ">
                            <NavLink to={"/national-news"}>
                                Cultural News
                            </NavLink>
                        </li>
                        <li className="px-6 py-3 ">
                            <NavLink to={"/national-news"}>Arts</NavLink>
                        </li>
                        <li className="px-6 py-3 ">
                            <NavLink to={"/national-news"}>All News</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Category;
