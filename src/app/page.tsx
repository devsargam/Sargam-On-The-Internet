import Intro from "@/components/intro/";
import Resume from "@/components/resume";

export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-10 dark:bg-slate-900">
      <Intro />
      <Resume />
    </main>
  );
}
