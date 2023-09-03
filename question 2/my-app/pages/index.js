import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ trains }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center text-sm lg:flex">
        <div className="flex flex-col items-center justify-center mb-16 lg:mb-8 lg:items-start">
          <h1 className="mb-4 text-5xl font-bold leading-tight  text-center lg:text-left lg:text-6xl">
            TRAIN STATUS
          </h1>
        </div>
      </div>
      <div className="mb-9 text-2xl lg:text-2xl p-3">
        <table class="table-auto">
          <thead>
            <tr>
              <th className="p-2 text-left">Train Schedule</th>
              <th className="p-2 text-left">Seat Availability</th>
              <th className="p-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">karnataka EXP</td>
              <td className="p-2">245</td>
              <td className="p-2">2220Rs</td>
            </tr>
            <tr>
              <td className="p-2">SMK Exp</td>
              <td className="p-2">234</td>
              <td className="p-2">2220</td>
            </tr>
            <tr>
              <td className="p-2">Lucknow Exp</td>
              <td className="p-2">123</td>
              <td className="p-2">2200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}