import logo from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
    return (
        <div className="container mx-auto">
            <div className="py-10 flex justify-between">
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div className="text-gray-600 text-end">
                    <p>Journalism Without Fear or Favour</p>
                    <p className="">
                        {moment().format("dddd, MMMM DD, YYYY,")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
