import React from 'react';

function Aboutme() {
  const about = [
    'started writing code ~3 years ago',
    'grew up in south-eastern part of Nepal in Jhapa district',
    'went to high school in Kathmandu, Nepal',
    "am currently pursuing my bachelor's degree in Computer Engineering",
    'currently live in my university hostel in Bangalore, India',
    'can speak Nepali, Hindi & English, के तपाई नेपालीमा बोल्न सक्नुहुन्छ?',
    'only pay interest to those who understand computers',
    'am a "Jack of all trades, master of none" but maybe one day I might master one',
  ];

  return (
    <section>
      <div className="container font-mono text-left">
        <div className="pt-10 text-lg text-green-300 sm:text-2xl">
          About Me 🙋‍♂️
        </div>
        <br />
        <div className="pt-5 text-xl text-white">I ...</div>
        <ul className="ml-2 text-white sm:ml-5">
          {about.map((point, index) => (
            <li className="py-2 sm:py-3" key={index}>
              <span className="sm:text-xl text-md">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Aboutme;
