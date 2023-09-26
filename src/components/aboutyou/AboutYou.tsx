'use client';
import { useUserAgent } from '@/hooks/useUserAgent';

function AboutYou() {
  const [osMessage, browserName] = useUserAgent();

  return (
    <section>
      <div className="container font-mono text-left">
        <div className="pt-10 text-lg text-green-300 sm:text-2xl">
          About You 🫵
        </div>
        <div className="pt-5 text-xl text-white">You ...</div>
        <ul className="ml-2 text-white sm:ml-5">
          <li className="py-2 sm:py-3">
            <span className="sm:text-xl text-md">
              made a wise choice of visiting my website today
            </span>
          </li>
          <li className="py-2 sm:py-3">
            <span className="sm:text-xl text-md"> {osMessage}</span>
          </li>
          <li className="py-2 sm:py-3">
            <span className="sm:text-xl text-md">
              visited this site in {browserName} and thinking if Sargam is
              watching me
            </span>
          </li>
        </ul>
        <br />
        <div className="sm:py-3 text-white">
          <span className="sm:text-xl text-md">
            Remember when you look at the internet, the internet always looks
            back at you 👀
          </span>
        </div>
      </div>
    </section>
  );
}

export default AboutYou;
