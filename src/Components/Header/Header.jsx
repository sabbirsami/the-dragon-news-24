import logo from "../../assets/logo.png";

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
                        <span className="font-semibold">Sunday,</span> November
                        27, 2022
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
