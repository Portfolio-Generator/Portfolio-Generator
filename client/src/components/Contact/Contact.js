import React from 'react';
import L_GITHUB from "../../assets/images/skills/github.svg";

const Contact = () => {
  return (
    <section  className="bg-dark-blue font-lite-gray p-2">
      <div className="flex flex-row  justify-center w-full p-2">

        {/* Vicky Loebel */}
        <div className="flex-col justify-center w-full m-1 ">
          <div className="flex justify-center text-center m-1">
          <a href="https://github.com/vloebel" target="_blank">
          <img alt="GitHub Profile" src={L_GITHUB}
          width="60" height="60" />
          </a>
          </div>
          <div className="text-center raleway-font font-lite-gray m-1">
          <a href="https://github.com/vloebel" target="_blank">
          Vicky Loebel
          </a>
          </div>
        </div>

        {/* Stephanie Giel */}
        <div className="flex-col justify-center w-full m-1">
          <div className="flex justify-center text-center m-1">
          <a href="https://github.com/SGiel" target="_blank">
          <img alt="GitHub Profile" src={L_GITHUB}
          width="60" height="60"/>
          </a>
          </div>
          <div className="text-center raleway-font font-lite-gray m-1">
          <a href="https://github.com/SGiel" target="_blank">
          Stephanie Giel
          </a>
          </div>
        </div>

        {/* Dan Arbelo */}
        <div className="flex-col justify-center w-full  m-1">
          <div className="flex justify-center text-center m-1">
          <a href="https://github.com/Govepitr" target="_blank">
          <img alt="GitHub Profile" src={L_GITHUB}
          width="60" height="60"/>
          </a>
          </div>
          <div className="text-center raleway-font font-lite-gray m-1">
          <a href="https://github.com/Govepitr" target="_blank">
          Dan Arbelo
          </a>
          </div>
        </div>

        {/* Kashay Arbelo */}
        <div className="flex-col justify-center w-full  m-1">
          <div className="flex justify-center text-center m-1">
          <a href="https://github.com/KashCodes" target="_blank">
          <img alt="GitHub Profile" src={L_GITHUB}
          width="60" height="60"/>
          </a>
          </div>
          <div className="text-center raleway-font font-lite-gray m-1">
          <a href="https://github.com/KashCodes" target="_blank">
          Kashay Arbelo
          </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;