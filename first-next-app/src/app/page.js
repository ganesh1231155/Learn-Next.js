import Image from "next/image";
import nextImg from "../../public/next.svg";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="text-lg text-gray-700">
          This is a simple example of a Next.js application with a custom layout.
        </p>
        <Image
          src={nextImg}
          alt="Example Image"
          width={500}
          height={300}
          className="rounded-lg border border-red-500 shadow-lg shadow-gray-500/50 transition-transform transform hover:scale-105"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Click Me
        </button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
