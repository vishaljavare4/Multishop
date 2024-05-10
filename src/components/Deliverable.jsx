import { TiTick } from "react-icons/ti";
import { FaTruck } from "react-icons/fa";
import { IoMdReturnLeft } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
const Deliverable = () => {
    return (
        <>
            <div className="w-[90%] flex justify-between mt-24 mb-10">
                    <div className="w-[24%]  flex gap-2 p-4 items-center justify-center rounded-lg shadow-xl">
                        <TiTick className="text-[60px] text-sky-600"/>
                        <p className="text-xl font-semibold text-sky-600">Quality Product</p>
                    </div>
                    <div className="w-[24%]  flex gap-2 p-4 items-center justify-center  rounded-lg shadow-xl">
                        <FaTruck className="text-[60px] text-sky-600"/>
                        <p className="text-xl font-semibold text-sky-600">Free Shipping</p>
                    </div>
                    <div className="w-[24%]  flex gap-2 p-4 items-center justify-center rounded-lg shadow-xl">
                        <IoMdReturnLeft className="text-[60px] text-sky-600"/>
                        <p className="text-xl font-semibold text-sky-600">14 Day Return</p>
                    </div>
                    <div className="w-[24%]  flex gap-2 p-4 items-center justify-center rounded-lg shadow-xl">
                        <IoIosCall className="text-[60px] text-sky-600"/>
                        <p className="text-xl font-semibold text-sky-600">24 / 7 Support</p>
                    </div>
            </div>
        </>
    )
}
export default Deliverable;