import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png"

const LayoutRegisLogin = ({ children, name ="Đăng ký" }) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-end pr-[241px]">
        <Link className="flex" to={"/"}>
          <img className="w-40 h-20 my-2 bg-gradient-to-r from-cyan-500 to-cyan-700 pr-3 rounded-full" src={logo} alt="not-found" />
          {/* <p className="flex items-center text-2xl font-medium ml-2">{name}</p> */}
        </Link>
        {/* <div className="w-40" /> */}
      </div>
      <div className="h-[600px] bg-[#D2ECED]">
        <div className="w-full flex justify-around">
          <img className="w-[500px] h-[520px] pt-10" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/orange-juice-recipe.jpg" alt="not-found" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutRegisLogin;
