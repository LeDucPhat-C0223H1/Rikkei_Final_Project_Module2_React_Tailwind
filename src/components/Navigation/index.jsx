import React from "react";
import {  NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="bg-[#f3f3f3]">
        <div className=" xl:w-[1200px] lg:w-[970px] md:w-[750px] sm:w-[600px] px-4 mx-auto">
          <div className="table w-full">
            <div className=" relative table-cell align-middle">
            </div>
            <div className="pl-5 table-cell align-middle h-16">
              <div>
                <ul className=" flex justify-center" id="menu-main-menu">
                  <li className="inline-block">
                    <NavLink
                      to="/"
                      className={({ isActive })=> isActive ? "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-yellow-400 to-orange-600 text-white " : "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider "}
                      title="Home"
                    >
                      Trang chủ
                    </NavLink>
                  </li>
                  <li className="inline-block">
                    <NavLink
                      to="/juice"
                      className={({ isActive })=> isActive ? "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-yellow-400 to-orange-600 text-white " : "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider "}
                      title="Juice"
                    >
                      Nước ép trái cây
                    </NavLink>
                  </li>
                  <li className="inline-block">
                    <NavLink
                      to="/veggie"
                      className={({ isActive })=> isActive ? "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-yellow-400 to-orange-600 text-white " : "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider "}
                      title="Veggie"
                    >
                      Nước ép rau củ
                    </NavLink>
                  </li>
                  
                  <li className="inline-block">
                    <NavLink
                      to="/shake"
                      className={({ isActive })=> isActive ? "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-yellow-400 to-orange-600 text-white " : "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider "}
                      title="Shake"
                    >
                      Sinh tố
                    </NavLink>
                  </li>
                  <li className="inline-block">
                    <NavLink
                      to="/tea"
                      className={({ isActive })=> isActive ? "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-yellow-400 to-orange-600 text-white " : "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider "}
                      title="Tea"
                    >
                      Trà trái cây
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      to="/contact"
                      className={({ isActive })=> isActive ? "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-yellow-400 to-orange-600 text-white " : "p-5 text-sm cursor-pointer uppercase font-semibold tracking-wider "}
                      title="About"
                    >
                      Liên hệ
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
