import Link from "next/link";
import React from "react";

function Intro() {
  const myInfo = [
    "I am a Computer Engineering student 👨‍🎓",
    "I am a full stack developer 👨‍💻 from Nepal 🇳🇵",
    "I am interested in web 🌏 & cyber security 🔐",
    "I mostly work with React, tailwind, Next, Express, Prisma & Nest 🛠️",
  ];

  return (
    <section className="">
      <h1 className="text-4xl font-bold text-center text-white underline decoration-white decoration-2 md:text-8xl sm:text-6xl">
        <Link href="/">Sargam</Link> On The Internet
      </h1>
      <div className="container p-5 font-mono sm:pt-20 sm:px-20">
        <span className="py-5 text-lg text-green-300 sm:text-2xl">
          Hi, I'm Sargam Poudel.
        </span>
        <ul className="mt-5 text-white">
          {myInfo.map((info, index) => (
            <li className="py-2 sm:py-3" key={index}>
              <span className="sm:text-xl text-md">
                {index + 1}. {info}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Intro;
