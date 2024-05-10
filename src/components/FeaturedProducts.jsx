import products from "../utils/products";

const FeaturedProducts = () => {
  return (
    <>
      <div className="w-[90%] ">
        <div className="flex w-full items-center gap-4 justify-center">
          <p className="text-[40px] font-bold text-sky-950 w-[40%]">Featured Products</p>
          <hr className=" border-sky-950 w-full border-dotted mt-2"></hr>
        </div>
        <div className="flex flex-wrap w-[100%] gap-4 items-start p-4">
            {
                products.map((each,index) => (
                    <div key={index} className="w-[23%] rounded-lg shadow-xl  flex flex-col items-center justify-center p-4 group  transition-all ease-in-out delay-200 cursor-pointer">
                       <div className="h-[150px] w-full">
                            <img src={each.images[0]} className="w-full h-full object-contain"></img>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-600">{each.title}</p>
                        </div>
                        <div>
                            <p className="text-sm text-sky-950">${each.price}</p>
                        </div>
                        <p className="text-center"><span className="text-sky-700">Rating:</span> {each.rating}</p>
                        <div>
                            <button className="p-2 bg-rose-600 rounded-lg text-white mt-10 hover:bg-rose-700">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))
            }
               
        </div>
      </div>
    </>
  );
};
export default FeaturedProducts;