import { useState } from "react";

import {
  IoLogoTiktok,
  IoLogoYoutube,
  IoLogoDiscord,
  IoLogoTwitch,
  IoLogoGithub,
  IoLogoInstagram,
} from "react-icons/io5";

import Button from "./components/Button";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center h-screen bg-gradient-to-r from-violet-800 to-purple-500">
        <div>
          <h1 className="font-bold text-3xl text-white mt-5 mb-3 hover:scale-110 hover:text-violet-300 transition">
            wypie.net
          </h1>
          <div className="flex text-center items-center justify-center">
            <p className="text-white text-lg mb-4">
              Unsere Kreativität, dein Spiel spaß.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 m-6 text-white">
          <button
            className="hover:scale-110"
            onClick={() => {
              window.open("https://discord.gg/zB6pMZUf2W"), "_blank";
            }}
          >
            <IoLogoDiscord size="24" />
          </button>

          <button
            className="hover:scale-110"
            onClick={() => {
              window.open("https://www.tiktok.com/@wypie.net"), "_blank";
            }}
          >
            <IoLogoTiktok size="24" />
          </button>
          <button
            className="hover:scale-110"
            onClick={() => {
              window.open("https://www.youtube.com/@wypie"), "_blank";
            }}
          >
            <IoLogoYoutube size="24" />
          </button>
          <button
            className="hover:scale-110"
            onClick={() => {
              window.open("https://github.com/WypieNetwork/"), "_blank";
            }}
          >
            <IoLogoGithub size="24" />
          </button>
        </div>

        <hr className="lg:w-[475px] h-5 w-[375px]" />

        <Button displayName="Unsere Website" link="https://wypie.net"></Button>
        <Button
          displayName="Bewerben"
          link="https://bewerben.wypie.net"
        ></Button>
        <p className="text-sm text-white m-10">
          Made with 💘 |{" "}
          <a
            className=" text-emerald-200 hover:text-emerald-300"
            href="https://github.com/WypieNetwork/lnk-site"
            target="_blank"
          >
            View Project
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
