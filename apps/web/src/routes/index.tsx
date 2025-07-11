import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import { cn } from "@webun/ui/lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
});

type LogoProps = {
  href: string;
  src: string;
  alt: string;
  className: string;
};

function Logo({ href, src, alt, className }: LogoProps) {
  return (
    <a href={href} target="_blank">
      <img
        src={src}
        alt={alt}
        className={cn("h-24 m-6 transition-filter duration-300", className)}
      />
    </a>
  );
}

function Index() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="h-screen flex items-center">
        <div className="max-w-[1280px] mx-auto p-8 text-center">
          <div className="flex justify-center items-center">
            <Logo
              href="https://vite.dev"
              src={viteLogo}
              alt="Vite logo"
              className="hover:drop-shadow-[0_0_2em_#646cffaa]"
            />
            <Logo
              href="https://react.dev"
              src={reactLogo}
              alt="React logo"
              className="hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite]"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6">Vite + React</h1>
          <div className="p-8 mb-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p className="mt-4">
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="text-gray-500">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  );
}
