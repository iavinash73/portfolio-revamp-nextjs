
export default function NavBar() {
 
  return (
    <>
      <nav
        className={`w-full fixed top-8 z-30 hidden md:block font-Grotesk text-white`}
      >
        <div
          className={`w-[60%] mx-auto shadow  rounded-full backdrop-blur-lg bg-opacity-30 text-black firefox:bg-opacity-90 items-center justify-between py-2 flex px-8`}
        >
          <div className={`text-[32px] flex items-center "text-white"`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <h1 className="text-[18px] font-so text-white pl-2 pb-1 pt-3 md:pt-1 md:text-[22px] lg:text-[25px] ">
              Avinash ;
            </h1>
          </div>
          <div className={`text-white text-[18px]`}>
            <ul className={`items-center justify-center flex gap-10`}>
              <li className="text-pri-white hover:scale-[1.05] duration-300 hover:text-purple hover:font-medium">
                <a href="#projects">Projects</a>
              </li>
              <li className="text-pri-white hover:scale-[1.05] duration-300 hover:text-purple hover:font-medium">
                <a href="#experience">Experience</a>
              </li>
              <li className="text-pri-white hover:scale-[1.05] duration-300 hover:text-purple hover:font-medium">
                <a href="#skills">Skills</a>
              </li>
              <li className="text-pri-white hover:scale-[1.05] duration-300 hover:text-purple hover:font-medium">
                <a
                  href="https://www.linkedin.com/in/avinash-pr-0b98a8220/"
                  target="_blank"
                >
                  Let&apos;s Talk!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    // <nav className="w-full">
    //   <div className="justify-between px-12 mx-auto pt-5 md:items-center md:flex md:px-20 lg:px-20 lg:max-w-7xl">
    //     <div className="relative flex items-center justify-between py-3 md:py-5 md:block">
    //       <a href="#">
    //         <img src={require("../images/coding.gif")} className="absolute left-[16px] top-6 h-[25px] md:left-[10px] md:h-[35px] lg:left-0 lg:h-10 lg:w-10"></img>
    //         <h1 className="text-[18px] font-so font-black text-sec-white pl-12 pt-3 md:pt-1 md:text-[22px] lg:text-[25px] ">Avinash ;</h1>
    //       </a>
    //     </div>
    //     <div>
    //       <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"}`}>
    //         <ul className="items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0">
    //           <li className="font-so text-black duration-[300ms] hover:scale-[1.1] hover:text-slate-400">
    //             <a href="#edu">Experience</a>
    //           </li>
    //           <li className="font-so text-black duration-[300ms] hover:scale-[1.1] hover:text-slate-400">
    //             <a href="#skillz">My Skills</a>
    //           </li>
    //           <li className="font-so text-black duration-[300ms] hover:scale-[1.1] hover:text-slate-400">
    //             <a href="#projects">Projects</a>
    //           </li>
    //           <li className="font-so text-black duration-[300ms] hover:scale-[1.1] hover:text-slate-400">
    //             <a href="https://www.linkedin.com/in/avinash-pr-0b98a8220/" target="_blank">Let's Talk!</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
