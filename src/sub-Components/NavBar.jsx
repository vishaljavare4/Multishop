import { IoReorderThree } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import category from "../utils/categories";

import { useState } from "react";
const NavBar = () => {
  const [categorySelect, setCategory] = useState("Category");
  const [showCategory, setShowCategory] = useState(false);
  
  const showOptions = () => {
    setShowCategory(!showCategory);
  };
  
  const handleCategory = (category) => {
    setCategory(category);
    setShowCategory(false);
  };

  return (
    <>
      <div className="w-full bg-sky-950  flex items-center justify-center mt">
        <div className="w-[90%] flex justify-between items-center ">
          <div className="w-[70%] flex  items-center gap-24 ">
            <div className="relative">
              <div className="p-4 bg-sky-600 items-center gap-4 w-[300px] flex justify-between cursor-pointer" onClick={showOptions}>
                <IoReorderThree className="text-3xl text-white" />
                <p className="text-xl text-white">{categorySelect.toLocaleUpperCase()}</p>
                <FaChevronDown className="text-white cursor-pointer" />
              </div>
              {showCategory && (
                <div className="absolute top-full left-0 bg-sky-600  shadow-xl w-[300px] ">
                  {category.map((ele, index) => (
                    <p key={index} className="text-white p-2 hover:bg-sky-950 cursor-pointer" onClick={() => handleCategory(ele.category)}>
                      {ele.category.toUpperCase()}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="w-[100%] flex gap-4">
              <p className="text-white hover:text-blue-300 cursor-pointer">
                Home
              </p>
              <p className="text-white hover:text-blue-300 cursor-pointer">
                Shop
              </p>
              <p className="text-white hover:text-blue-300 cursor-pointer">
                Shop Detail
              </p>
              <p className="text-white hover:text-blue-300 cursor-pointer">
                Pages
              </p>
              <p className="text-white hover:text-blue-300 cursor-pointer">
                Contact
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <FaHeart className="text-sky-100 hover:text-sky-500 cursor-pointer text-2xl"/>
            <FaShoppingCart className="text-sky-100 hover:text-sky-500 cursor-pointer text-2xl"/>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;

