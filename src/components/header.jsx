import React from "react";
import Logo from "./logo.jpg";

const Header = () => {
  return (
    <header className="mt-20 mb-10">
      <div className="flex justify-center flex-col items-center">
        <img src={Logo} alt="Logo" className="w-16" />
        <h1 className="text-4xl font-bold text-brand-orange">Ls Aqarat</h1>
      </div>
    </header>
  );
};

export default Header;
