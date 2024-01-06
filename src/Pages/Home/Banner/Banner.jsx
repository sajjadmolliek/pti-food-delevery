import banner from "../../../assets/image/Banner.png"

const Banner = () => {
    return (
        <div className='bg-[#F99F1C] flex flex-col lg:flex-row py-[10rem] lg:py-0 justify-center items-center rounded-[3rem] mt-[10rem] gap-20'>
            <div >
                <h1 className="bg-[#F99F1C] text-white text-5xl font-semibold">Deliver Food To Your <br /> Door Step |</h1>
                <p className="bg-[#F99F1C] text-[#d2d0d0ef] text-2xl pt-5">Authentic Food | Quick Service, Fast Delivery</p>
            </div>
            <div>
                <img className="bg-[#F99F1C]" src={banner} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;