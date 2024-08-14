import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  let href = userId ? "/journal" : "new-user";

  if (userId) href;
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-purple-800 to-indigo-900 flex justify-center items-center text-white overflow-hidden relative">
      <div className="w-full max-w-[600px] mx-auto text-center animate-fade-in-up">
        <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 animate-text-glow">
          The Ultimate Journal Experience
        </h1>
        <p className="text-2xl text-white/80 mb-8 animate-fade-in-down">
          Discover the most intuitive and visually stunning journal app designed
          to help you track your moods, set goals, and reflect on your journey.
          With our app, honesty and self-awareness become effortless.
        </p>
        <div className="relative mb-8">
          <img
            src="./screenshot.png"
            alt="Journal App Screenshot"
            className="mx-auto rounded-lg shadow-lg max-w-[80%] border-4 border-white/40"
          />
        </div>
        <div>
          <Link href={href}>
            <button className="bg-gradient-to-r from-blue-500 to-green-400 px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-out">
              Get Started
            </button>
          </Link>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-sm text-white/60">
          <p>© 2024 JournalApp Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
