import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import './Skills.css'; // Make sure to create this CSS file for the transition styles

function Skills() {
  let icons1 = [
    {
      k: 0,
      n: "Figma",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      k: 1,
      n: "HTML",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      k: 2,
      n: "CSS",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      k: 3,
      n: "Bootstrap",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      k: 4,
      n: "Tailwind",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      k: 5,
      n: "JQuery",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain.svg",
    },
    {
      k: 6,
      n: "JavaScript",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      k: 7,
      n: "TypeScript",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    },
    {
      k: 8,
      n: "React Js",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      k: 10,
      n: "Redux Toolkit",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      k: 9,
      n: "Next Js",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
  ];
  let icons2 = [
    {
      k: 10,
      n: "MySQL",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      k: 11,
      n: "MongoDB",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      k: 12,
      n: "Supabase",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
    {
      k: 13,
      n: "Express Js",
      lnk: "/express-logo.png",
    },
    {
      k: 13,
      n: "Redis",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
      k: 14,
      n: "Node Js",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
    },
    {
      k: 14,
      n: "Postgres",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      k: 14,
      n: "Solidity",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-plain.svg",
    },
  ];
  let icons3 = [
    {
      k: 15,
      n: "Postman",
      lnk: "/postman.png",
    },
    {
      k: 15,
      n: "Strapi",
      lnk: "/strapi.png",
    },
    {
      k: 16,
      n: "Prisma",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    },
    {
      k: 16,
      n: "Docker",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      k: 15,
      n: "Arduino",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    },
    {
      k: 16,
      n: "RaspberryPi",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
    },
    {
      k: 17,
      n: "Numpy",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg",
    },
    {
      k: 18,
      n: "Pandas",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg",
    },
    {
      k: 19,
      n: "Github",
      lnk: "/github-logo.png",
    },
    {
      k: 20,
      n: "Git",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    },
    {
      k: 21,
      n: "C",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      k: 22,
      n: "C++",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      k: 23,
      n: "Java",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    },
    {
      k: 24,
      n: "Python",
      lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    },
  ];
  const [activeComponent, setActiveComponent] = useState("frontend");
  return (
    <div id="skills" className="flex justify-center font-Grotesk">
      <div className="md:p-4 md:w-[85vw] my-32 flex flex-col items-center">
        <h1 className="heading font-Grotesk mb-20">
          Tech I&apos;ve had a chance to{" "}
          <span className="text-purple">Work On</span>
        </h1>
        <div className="flex mb-12 font-medium text-[18px] md:text-[20px] toggle-bar">
          <button
            onClick={() => setActiveComponent("frontend")}
            className={`px-6 py-2 rounded-l-full border-slate-800 border-y border-l ${activeComponent === "frontend"
                ? "active"
                : "inactive"
              }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveComponent("backend")}
            className={`px-6 py-2 border-slate-800 border ${activeComponent === "backend"
                ? "active"
                : "inactive"
              }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveComponent("others")}
            className={`px-6 py-2 border-slate-800 rounded-r-full border-y border-r ${activeComponent === "others"
                ? "active"
                : "inactive"
              }`}
          >
            Others
          </button>
        </div>
        <div className="md:p-4 w-full flex justify-center">
          {activeComponent === "frontend" && (
            <div className="flex flex-wrap gap-20 justify-center">
              {icons1.map((icons, k) => (
                <div key={icons.k} className="front">
                  <p className="text-center font-semibold mt-[10px] text-[16px]">
                    {icons.n}
                  </p>
                  <img
                    src={icons.lnk}
                    className="my-[4px] mb-[10px] mx-auto drop-shadow-2xl w-[70px] h-[40px] lg:h-[55px] xl:h-[60px] object-contain"
                  ></img>
                </div>
              ))}
            </div>
          )}
          {activeComponent === "backend" && (
            <div className="flex flex-wrap gap-20 justify-center">
              {icons2.map((icons, k) => (
                <div key={icons.k} className="">
                  <p className="text-center font-semibold mt-[10px] text-[16px]">
                    {icons.n}
                  </p>
                  <img
                    src={icons.lnk}
                    className="my-[4px] mb-[10px] mx-auto drop-shadow-2xl w-[70px] h-[40px] lg:h-[55px] xl:h-[60px] object-contain"
                  ></img>
                </div>
              ))}
            </div>
          )}
          {activeComponent === "others" && (
            <div className="flex flex-wrap gap-20 justify-center">
              {icons3.map((icons, k) => (
                <div key={icons.k} className="text-center">
                  <p className="m-auto font-semibold mt-[10px] text-[16px]">
                    {icons.n}
                  </p>
                  <img
                    src={icons.lnk}
                    className="my-[4px] mb-[10px] mx-auto drop-shadow-2xl w-[70px] h-[40px] lg:h-[55px] xl:h-[60px] object-contain"
                  ></img>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
