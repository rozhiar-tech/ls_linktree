import React from "react";
import Fb from "./facebook.png";
import Insta from "./instagram.png";
import Snap from "./snapchat.png";
import YouTube from "./youtube.png";
import TikTok from "./tik-tok.png";

const Content = () => {
  return (
    <div className="content flex flex-col justify-center items-center gap-11">
      <div
        className="bg-white w-80 h-14 rounded-lg flex justify-start items-center text-brand-orange font-bold
       hover:bg-brand-orange hover:text-brand-blue"
      >
        <img className="w-10 h-10 ml-3" src={Fb} alt="Facebook" />
        <a
          href="https://www.facebook.com/ls.aqarat?mibextid=LQQJ4d"
          className="text-center ml-20"
        >
          <h1 className="text-center ">Facebook</h1>
        </a>
      </div>
      <div
        className="bg-white w-80 h-14 rounded-lg flex justify-start items-center text-brand-orange font-bold
       hover:bg-brand-orange hover:text-brand-blue"
      >
        <img className="w-10 h-10 ml-3" src={Insta} alt="instagram" />
        <a
          href="https://instagram.com/ls_aqar?igshid=MzRlODBiNWFlZA=="
          className="text-center ml-20"
        >
          <h1 className="text-center ">Instagram</h1>
        </a>
      </div>
      <div
        className="bg-white w-80 h-14 rounded-lg flex justify-start items-center text-brand-orange font-bold
       hover:bg-brand-orange hover:text-brand-blue"
      >
        <img className="w-10 h-10 ml-3 " src={Snap} alt="Snapchat" />
        <a
          href="https://www.snapchat.com/add/ls.aqar?share_id=zvITPPO68fw&locale=en-IQ"
          className="text-center ml-20"
        >
          <h1 className="text-center ">Snapchat</h1>
        </a>
      </div>
      <div
        className="bg-white w-80 h-14 rounded-lg flex justify-start items-center text-brand-orange font-bold
       hover:bg-brand-orange hover:text-brand-blue"
      >
        <img className="w-10 h-10 ml-3 " src={YouTube} alt="Snapchat" />
        <a href="https://www.youtube.com/@LSAqar" className="text-center ml-20">
          <h1 className="text-center ">YouTube</h1>
        </a>
      </div>
      <div
        className="bg-white w-80 h-14 rounded-lg flex justify-start items-center text-brand-orange font-bold
       hover:bg-brand-orange hover:text-brand-blue"
      >
        <img className="w-10 h-10 ml-3 " src={TikTok} alt="TikTok" />
        <a
          href="https://www.tiktok.com/@ls.aqar?lang=en"
          className="text-center ml-20"
        >
          <h1 className="text-center ">TikTok</h1>
        </a>
      </div>
    </div>
  );
};

export default Content;
