"use client";
import { projects } from "@/data";
import { redirect } from "next/navigation";

const RecentProjects = () => {
  return (
    <div className="pt-10" id="projects">
      <h1 className="heading font-Grotesk mb-10">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid gap-2 mt-[20px] ml-[40px] mr-[30px] sm:grid-cols-2 font-Grotesk">
        {projects.map((Data, k) => (
          <div key={Data.id}>
            <div
              className="drop-shadow-2xl relative mx-[10px] my-[20px] rounded-lg group shadow-lg lg:mx-[40px] hover:cursor-pointer "
              onClick={() => {
                redirect(Data.link);
              }}
            >
              <img
                src={Data.img}
                className="h-[400px] object-cover rounded-lg inset-0  brightness-[0.6] duration-[500ms] hover:ease-in transition-brightness group-hover:brightness-[0.2] md:w-[50rem] duration-300"
              />
              <p className="absolute top-[15px] left-[10px] ml-[15px] duration-300 text-[21px] text-white group-hover:text-white font-ra lg:text-[25px] font-normal">
                {Data.title}
              </p>
              <div className="absolute bottom-[15px] pl-[5px] pr-[10px]">
                <a href={Data.link} target="_blank">
                  <img
                    src={"/arrow.png"}
                    className="h-[30px] ml-[15px] mb-[10px] opacity-0 duration-[400ms] group-hover:opacity-100 lg:h-[35px]"
                  />
                </a>
                <div className="ml-[15px] translate-y-6 opacity-0 transform transition duration-[250ms]  group-hover:translate-y-0 group-hover:opacity-100 mb-[7px]">
                  <p className="text-[16px] text-white md:text-md leading-[26px] ">
                    {Data.des}
                  </p>
                </div>
                <div className="ml-[15px] text-[15px] mt-4 translate-y-6 opacity-0 transform transition duration-[250ms] text-white group-hover:translate-y-0 group-hover:opacity-100 lg:text-md ">
                  {Data.stack}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default RecentProjects;
