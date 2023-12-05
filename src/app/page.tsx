import { Merienda } from "next/font/google";
import Link from "next/link";

const merienda = Merienda({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gallery-900 bg-opacity-30 backdrop-filter backdrop-blur-sm w-[30rem] mx-auto py-28 rounded-3xl shadow-lg shadow-pink-700">
      <div className="flex justify-center align-middle flex-col ">
        <h1 className={`${merienda.className} text-center text-3xl`}>
          QUIZINATOR
        </h1>
        <div className="mt-10 flex justify-center flex-col">
          <h2 className="text-center">BEST QUIZ APP EVER MADE</h2>
          <Link href="/start" className="flex justify-center">
            <button className="bg-pastel-green-500 py-3 px-10 mt-5 mx-auto rounded-full shadow-pastel-green-700 shadow-md hover:bg-pinky-500 hover:shadow-pink-400 hover:shadow-md">
              START
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
