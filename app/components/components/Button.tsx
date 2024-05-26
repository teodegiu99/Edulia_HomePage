import React from "react";
import Link from "next/link";

interface BtnProps {
  text: string;
  link: string;
}

const Button: React.FC<BtnProps> = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="bg-[#f8485e] text-white text-center font-semibold py-2 max-w-[300px] rounded-lg px-6 w-full">
      {text}
    </Link>
  );
};

export default Button;
