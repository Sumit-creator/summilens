import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <>
      <header
        className="w-full flex justify-ce
   items-center flex-col"
      >
        <nav className="flex justify-between items-center w-full mb-10 pt-3  ">
          <img
            src={logo}
            alt="sumz_log"
            srcSet=""
            className="w-28 object-contain"
          />
          <button
            className="black_btn"
            type="button "
            onClick={() => window.open("https://github.com")}
          >
            {" "}
            Github
          </button>
        </nav>
        <h1 className="head_text">
          Summerize Articles with <br className="max-md:hidden" />
          <span className="orange_gradient">AI </span>
        </h1>
        <h2 className="desc">
        Streamline your reading with Summize, an open-source article summarizer designed to condense lengthy articles into clear and concise summaries.
        </h2>
      </header>
    </>
  );
};

export default Hero;
