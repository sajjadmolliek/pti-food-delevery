import Swal from "sweetalert2";
import imLogo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";

const AddProduct = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "true", label: "True" },
    { value: "false", label: "False" },
  ];

  // Start React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    Swal.fire("Congratulation", "You Successfully Added Item", "success");
    reset();
  };

  // End React Hook Form

  return (
    <div className="mb-20 ">
      <div className="md:w-[40rem] mx-auto py-10 ">
        <p className="font-bold font-serif text-xl md:text-3xl text-[#FE834C] text-center py-2">
          Add Your Item
        </p>
        <div className="flex justify-center  items-center gap-x-4">
          <div className="w-[10rem] h-[1px] bg-[#FE834C]" />
          <img className="w-[3rem]" src={imLogo} alt="imLogo" />
          <div className="w-[10rem] h-[1px] bg-[#FE834C]" />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-3/5 mx-auto bg-[#FFF9ED] p-10 py-10 rounded-lg"
      >
        <div className=" flex flex-col lg:flex-row gap-12 ">
          <label className="input-group w-full  lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] text-[#FE834C] font-bold">Name</span>
            <input
              {...register("name",{required:true})}
              type="text"
              // required
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </label>
          {errors.name && (
                <span className="text-red-600 -mt-8 block lg:hidden">This field is required</span>
              )}
          <label className="input-group w-full  lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem]  text-[#FE834C] font-bold">price</span>
            <input
              {...register("price",{ required: true })}
              // required
              name="price"
              type="text"
              placeholder="price"
              className="input input-bordered w-full"
            />
          </label>
          {errors.price && (
                <span className="text-red-600 -mt-8 inline lg:hidden">This field is required</span>
              )}
        </div>
        {errors.name && (
                <span className="text-red-600 mr-[15rem] hidden lg:inline">This field is required</span>
              )}
        {errors.price && (
          <span className="text-red-600 hidden lg:inline ">This field is required</span>
        )}

        <div className="  flex flex-col lg:flex-row gap-12 my-10">
          <label className="input-group w-full  lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] text-[#FE834C] font-bold">
              IsPopular
            </span>
            <Select
              className="w-full"
              required
              onChange={setSelectedOption}
              options={options}
            />
          </label>
          <label className="input-group w-full  lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] text-[#FE834C] font-bold">
              IsRecommended
            </span>
            <Select
              className="w-full"
              required
              onChange={setSelectedOption}
              options={options}
            />
          </label>
        </div>
        <label className="input-group  lg:w-full mx-auto input-group-md">
          <span className="w-[10rem] text-[#FE834C] font-bold">Photo URL</span>
          <input
            {...register("photo",{required:true})}
            // required
            name="photo"
            className="w-full input input-bordered input-md"
            type="text"
            placeholder="Photo URL"
          />
        </label>
        {errors.photo && (
          <span className="text-red-600">This field is required</span>
        )}
        <input
          className="w-full text-center mt-10 btn border-0 text-white text-bold text-lg bg-[#FE834C]"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddProduct;
