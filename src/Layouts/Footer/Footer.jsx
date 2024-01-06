import {
  BsArrowRight,
  BsGoogle,
  BsInstagram,
  BsTwitter,
} from "react-icons/Bs";
import footerImg from "../../assets/image/Footer-Image.png";

const Footer = () => {
  return (
    <div className="bg-[#F99F1C] lg:gap-[10rem] py-10 flex flex-col lg:flex-row justify-around items-center mt-[10rem]">
      <div className="ml-[5rem]">
        <div className="form-control md:w-[40rem] relative bg-[#F99F1C]">
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[white] btn btn-sm bg-[#FC6011] hover:bg-[#FC6011] join-item mr-2 px-10">
            Subscribe{" "}
            <span>
              <BsArrowRight className="bg-[#FC6011] " />
            </span>
          </button>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="input pl-10 rounded-[1rem]" // Add padding to accommodate the icon
          />
        </div>

        <div className="bg-[#F99F1C] gap-[3rem] lg:gap-[15rem] flex flex-col lg:flex-row  justify-center lg:items-end">
          <div className="bg-[#F99F1C] pt-[4rem] lg:pt-[10rem]">
            <h1 className="bg-[#F99F1C] font-maven-pro text-4xl font-bold pb-2 lg:pb-5">
              pti<span className="text-[#FC6011] bg-[#F99F1C]">.</span>
            </h1>
            <aside>
              <p className="font-bold bg-[#F99F1C]">
                Copyright©Tripp.Allrightreserved
              </p>
            </aside>
          </div>
          <div>
            <div className="flex bg-[#F99F1C]  gap-3  flex-wrap">
              <BsGoogle className="text-[#FC6011] bg-[#FEDDBA] p-2 text-4xl rounded-full"></BsGoogle>
              <BsTwitter className="text-[#FC6011] bg-[#FEDDBA] p-2 text-4xl rounded-full"></BsTwitter>
              <BsInstagram className="text-[#FC6011] bg-[#FEDDBA] p-1 text-4xl rounded-full"></BsInstagram>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F99F1C] justify-end">
        <img
          className="bg-[#F99F1C] w-[50%] lg:w-[80%]"
          src={footerImg}
          alt="footer Image"
        />
      </div>
    </div>
  );
};

export default Footer;
