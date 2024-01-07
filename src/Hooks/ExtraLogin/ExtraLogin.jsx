import { FcGoogle } from "react-icons/fc";
// import useAuthProvider from "../useAuthProvider/useAuthProvider";

const ExtraLogin = () => {
  // const { googleLogin } = useAuthProvider();



  const googleResister = () => {
    // googleLogin()
    //   .then()
    //   .catch();
  };

  return (
    <button
      onClick={googleResister}
      className="grid grid-cols-3 font-bold border-2 px-4 text-center py-3 rounded-lg mx-7 mb-6 hover:bg-blue-500  hover:text-white"
    >
      <FcGoogle className="w-10 text-3xl  "></FcGoogle>
      <span>Google</span>
    </button>
  );
};

export default ExtraLogin;
