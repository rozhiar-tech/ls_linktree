import React from "react";

const Footer = () => {
  return (
    <footer>
      <h1 className="text-center text-2xl font-bold text-brand-orange mt-10">
        You Found it
      </h1>
      <div className="flex justify-center items-center gap-5 mt-10">
        <a
          href="https://www.facebook.com/profile.php?id=100094094267808"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/ls.aqar/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.snapchat.com/add/ls.aqar?share_id=zvITPPO68fw&locale=en-IQ"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/48/000000/snapchat.png"
            alt="Snapchat"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
