import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-white">
      <div
        className="flex justify-center items-center mt-[45%] md:mt-[15%] bg-white"
        id="error-page"
      >
        <div className="bg-white">
          <h1 className="text-center font-bold text-4xl bg-white text-[#FD6011]">
            OOPS!
          </h1>
          <p className="my-5 font-semibold text-lg bg-white">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-center font-medium text-base bg-white">No Data Found</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 bg-white">
        <NavLink to="/">
          <button className="btn bg-[#FD6011] text-white">Back to Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
