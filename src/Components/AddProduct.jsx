import Swal from "sweetalert2";
import imLogo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";

const AddProduct = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "bangali", label: "Bangali" },
    { value: "traditional", label: "Traditional" },
    { value: "korean", label: "Korean" },
    { value: "chaines", label: "Chaines" },
    { value: "indian", label: "Indian" },
    { value: "nonevage", label: "Nonevage" },
  ];

  // Start React Hook Form
  const { register,  handleSubmit } = useForm();

  const onSubmit = () => {
    Swal.fire('Congratulation', "You Successfully Added Item","success")
  };

  // End React Hook Form

  return (
    <div className="mb-20 ">
      <div className="md:w-[40rem] mx-auto py-10 ">
        <p className="font-bold font-serif text-xl md:text-3xl text-[#e23139] text-center py-2">
          Add Your Recipe
        </p>
        <div className="flex justify-center  items-center gap-x-4">
          <div className="w-[10rem] h-[1px] bg-[#e23139]" />
          <img className="w-[3rem]" src={imLogo} alt="imLogo" />
          <div className="w-[10rem] h-[1px] bg-[#e23139]" />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-3/5 mx-auto bg-[#FFF9ED] p-10 py-10 rounded-lg"
      >
        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#e23139] text-white font-bold">
              Name
            </span>
            <input
              {...register("name")}
              required
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </label>

          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#e23139] text-white font-bold">
              Category
            </span>
            <Select
              className="w-full"
              required
              onChange={setSelectedOption}
              options={options}
            />
          </label>
        </div>

        <div className="  flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#e23139] text-white font-bold">
              Type
            </span>
            <input
              {...register("type")}
              required
              name="type"
              type="text"
              placeholder="Type"
              className="input input-bordered w-full"
            />
          </label>
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto input-group-md">
            <span className="w-[10rem] bg-[#e23139] text-white font-bold">
              Photo URL
            </span>
            <input
              {...register("photo")}
              required
              name="photo"
              className="w-full input input-bordered input-md"
              type="text"
              placeholder="Photo URL"
            />
          </label>
        </div>
        <label className="input-group md:w-4/5 lg:w-full mx-auto lg:input-group-md mb-10">
          <span className="w-[10rem] bg-[#e23139] text-white font-bold">
            Description
          </span>
          <input
            {...register("description")}
            required
            name="description"
            type="text"
            placeholder="Description"
            className="input input-bordered w-full"
          />
        </label>

        <input
          className="w-full text-center btn border-0 text-white text-bold text-lg bg-[#e23139]"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddProduct;
