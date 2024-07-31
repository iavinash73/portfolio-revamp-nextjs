"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = () => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-3 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4"
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className={`text-white text-[17px] font-Grotesk font-normal`}>
          <ul className={`items-center justify-center flex gap-10`}>
            <li className="text-pri-white duration-300 hover:text-purple ">
              <a href="#experience">Experience</a>
            </li>
            <li className="text-pri-white duration-300 hover:text-purple ">
              <a href="#skills">Skills</a>
            </li>
            <li className="text-pri-white duration-300 hover:text-purple ">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-pri-white duration-300 hover:text-purple ">
              <a
                href="https://www.linkedin.com/in/avinash-pr-0b98a8220/"
                target="_blank"
              >
                Let&apos;s Talk!
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
