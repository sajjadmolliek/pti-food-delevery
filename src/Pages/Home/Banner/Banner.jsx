import banner from "../../../assets/image/Banner.png"

const Banner = () => {
    return (
        <div className='md:bg-[#F99F1C] flex flex-col lg:flex-row md:py-[5rem] lg:py-0 justify-center items-center rounded-[3rem] mt-[4rem] md:mt-[10rem] gap-20 md:gap-10 lg:gap-20 md:px-10'>
            <div >
                <h1 className="md:bg-[#F99F1C] text-black md:text-white text-[1.75rem] md:text-5xl font-bold md:font-semibold text-center md:text-left md:w-[30rem]">Deliver Food To Your Door Step |</h1>
                <p className="md:bg-[#F99F1C]  text-black md:text-[#d2d0d0ef] text-lg md:text-2xl pt-5">Authentic Food | Quick Service, Fast Delivery</p>
            </div>
            <div>
                <img className="bg-[#FD9460] rounded-3xl md:rounded-none md:bg-[#F99F1C] "  src={banner} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;