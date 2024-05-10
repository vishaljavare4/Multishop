const HeroSection = () => {
    return (
        <>
            <div className="w-[90%] flex mt-10 items-start ">
                {/* Catalog 1 */}
                <div className="w-[60%] h-[450px] flex">
                    <img 
                        src="https://assets.vogue.com/photos/61e9c43c8aa98afba69ec2e8/master/w_2560%2Cc_limit/00_story.jpg" 
                        className="w-full h-full object-cover "  
                        alt="Catalog Image" 
                    />
                    <div className=" ml-[10%] w-full">
                        <p className="text-[80px] text-sky-950 font-semibold">Mens Fashion</p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore veniam, architecto itaque veritatis enim doloremque laudantium aliquid quod cupiditate exercitationem.
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;