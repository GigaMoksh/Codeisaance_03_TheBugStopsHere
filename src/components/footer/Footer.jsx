import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-evenly">
        <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  w-[160px]">
          <p className="items-center text-center">Omkar Bosteshkar</p>
          <img
            className="mt-4 rounded-2xl"
            src={require("../../assests/omkar.jpg")}
          ></img>
        </div>

        <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  w-[160px]">
          <p className="items-center text-center"> Mokshit Surana</p>
          <img
            className="mt-4 rounded-2xl"
            src={require("../../assests/mokshit.png")}
          ></img>
        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  w-[160px] items-center justify-center">
          <p className="items-center text-center">Vaibhav Gawad</p>
          <img
            className="mt-4 rounded-2xl"
            src={require("../../assests/vaibhav.jpg")}
          />
        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  w-[160px] items-center justify-center">
          <p className="items-center text-center">Prateek Vishwakarma</p>
          <img
            className="mt-4 rounded-2xl"
            src={require("../../assests/prateek.png")}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
