import category from "../utils/categories";
const Categories = () => {
    return (
        <>
            <div className="w-[90%] ">
                <div className="flex w-full items-center gap-4 justify-center">
                    <p className="text-[40px] font-bold text-sky-950">Categories</p>
                    <hr className=" border-sky-950 w-full border-dotted mt-2" ></hr>
                </div>   
                <div className="flex flex-wrap w-[100%] gap-4 items-start p-4">
                {
                        category.map((ele, index) => (
                            <div key={index} className=" group flex w-[19%] p-4 items-center justify-center gap-2 shadow-xl rounded-lg transition-all ease-in-out hover:scale-105 hover:bg-sky-950 cursor-pointer hover">
                                <div className="w-24 h-24 rounded-full">
                                    <img src = {ele.imgUrl}  className="w-full h-full rounded-full object-cover shadow-lg transform group-hover:scale-110 transition-all duration-500"/>
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="font-semibold text-gray-700 group-hover:text-gray-200">{ele.category.toUpperCase()}</p>
                                    <p className="font-thin text-sm group-hover:text-gray-300">{ele.products} Products</p>
                                </div>
                            </div>
                        ))
                }
                </div>

            </div>
        </>
    )
}
export default Categories;