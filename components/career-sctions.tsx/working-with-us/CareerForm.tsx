import FormButton from "@/components/ui/buttons/form-button";
import { Input } from "@/components/ui/input";
import React from "react";

const CareerForm = () => {
  return (
    <form className="relative z-30 w-[588px] bg-white/60 backdrop-blur-[10px] border border-white/30 rounded-[20px] py-[50px] px-5 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex flex-col gap-6">
      <Input
        className=" border-0 border-b border-[#A8A9AD] focus:border-white focus:ring-0 placeholder:text-[#737373] text-[#737373] rounded-none"
        type="text"
        placeholder="Your name"
        required
      />
      <Input
        className=" border-0 border-b border-[#A8A9AD] focus:border-white focus:ring-0 placeholder:text-[#737373] text-[#737373] rounded-none"
        type="email"
        placeholder="Email address"
        required
      />
      <Input
        className=" border-0 border-b border-[#A8A9AD] focus:border-white focus:ring-0 placeholder:text-[#737373] text-[#737373] rounded-none"
        type="text"
        placeholder="Role"
        required
      />
      <Input
        className=" border-0 border-b border-[#A8A9AD] focus:border-white focus:ring-0 placeholder:text-[#737373] text-[#737373] rounded-none"
        type="text"
        placeholder="Linkedin link"
        required
      />
      <Input
        className=" border-0 border-b border-[#A8A9AD] focus:border-white focus:ring-0 text-[#737373] rounded-none"
        type="file"
        required
      />
      <div className="w-[138px] md:pl-[101px] pt-[6px]">
        <FormButton />
      </div>
    </form>
  );
};

export default CareerForm;
