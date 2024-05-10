import flint from "../assets/flint.png";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <>
      <div className="w-[90%] flex justify-between items-center gap-4 ">
        <div className="w-[30%] flex items-center">
          <img src={flint} className="w-24 h-24" />
          <p className="text-3xl font-semibold rounded-lg p-2 text-sky-950 hover:text-sky-600 hover:bg-sky-200  cursor-pointer transition ease-in-out delay-75">FLINT</p>
        </div>
        <div className="w-[30%] flex items-center gap-2">
          <input
            type="text"
            className="w-[80%] p-2 border-[0.1px] border-solid border-gray-700"
            placeholder="Search your product"></input>
            <div className="border border-solid border-gray-700 p-3">
                <FaSearch className="text-sky-600 hover:text-sky-800"/>
            </div>
        </div>
        <div className="w-[30%] items-center justify-center flex flex-col">
            <p className="text-l font-light">Customer Service</p>
            <p className="text-xl font-mono">+121 885758942</p>
        </div>
      </div>
    </>
  );
};
export default SearchBar;