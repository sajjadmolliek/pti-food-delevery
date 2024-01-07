import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import axios from "axios";
import ExtraLogin from "../../Hooks/ExtraLogin/ExtraLogin";

// import Hosting image URL
const image_hosting = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting}`;
const Register = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data?.photo[0]);

    const res = await axios.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
   
  };

  return (
    <>
      <div className=" min-h-screen">
        <div
          onSubmit={handleSubmit(onSubmit)}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                {...register("name",{ required: true })}
                placeholder="User Name"
                className="input input-bordered"
              />
            </div>
            {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            <div className="my-6">
              <label className="label">
                <span className="label-text ">
                  Choose a Photo for Your Profile*
                </span>
              </label>
              <input
                type="file"
                {...register("photo", { required: true })}
                placeholder="Choose a file"
                className="file-input file-input-bordered w-full"
              />{" "}
              {errors.photo && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                {...register("email",{ required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                {...register("password", { required: true })}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="You Should enter at last 6 character one special character one uppercase and lower letter "
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">This field is required</span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">This field is required</span>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <AwesomeButton type="primary">Register</AwesomeButton>
            </div>
          </form>
          <p className="text-center mb-10">
            <small>
              Have you an account ? go to{" "}
              <Link to={"/login"} className="font-bold text-sm text-blue-600">
                Login
              </Link>
            </small>
          </p>
          <ExtraLogin></ExtraLogin>
        </div>
      </div>
    </>
  );
};

export default Register;
