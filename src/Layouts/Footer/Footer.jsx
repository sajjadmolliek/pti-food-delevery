import footerImg from "../../assets/image/Footer-Image.png"

const Footer = () => {
  return (
    <div className="bg-[#F99F1C] flex justify-center items-center mt-[10rem]">
      <div>
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="bg-[#F99F1C] ">
        <img className="bg-[#F99F1C] w-[80%]" src={footerImg} alt="footer Image" />
      </div>
    </div>
  );
};

export default Footer;
