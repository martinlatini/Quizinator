import Image from "next/image";
import { Merienda } from "next/font/google";

const merienda = Merienda({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-navy-900 to-navy-600 flex justify-center align-middle py-28">
      <div className="bg-gradient-to-br from-navy-700 to-pastel-green-500 w-[50rem] h-[30rem] flex justify-center align-middle flex-col py-16 rounded-xl border-2 border-pinky-500">
        <div className="bg-gallery-900 bg-opacity-30 backdrop-filter backdrop-blur-sm w-[30rem] mx-auto py-28 rounded-3xl shadow-lg shadow-pink-700">
          <div className="flex justify-center align-middle flex-col ">
            <h1 className={`${merienda.className} text-center text-3xl`}>
              QUIZINATOR
            </h1>
            <div className="mt-10 flex justify-center flex-col">
              <h2 className="text-center">BEST QUIZ APP EVER MADE</h2>
              <button className="bg-pastel-green-500 py-3 px-10 mt-5 mx-auto rounded-full shadow-pastel-green-700 shadow-md hover:bg-pinky-500 hover:shadow-pink-400 hover:shadow-md">
                START
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
