
'use client';
import { Flowbite, Button, Navbar, CustomFlowbiteTheme } from 'flowbite-react';
import Image from "next/image";
import rsLogo from '@/app/assets/rsLogo.png'



export default function TechStack() {

  return (
    <>
      
      <div className=" text-white text-4xl font-bold bg-neutral-800 w-4/6 m-0 rounded-xl">
              <div className="grid place-items-center p-0 my-4">
                <h1 className="text-4xl font-bold" id="stack">Tech Stack</h1>
                  <div className="grid mt-2 ml-4 mr-4 gap-8 gap-x-20 grid-cols-6 justify-items-center">
                    {/* HTMl */}
                    <div><Image src="https://api.iconify.design/devicon:html5-wordmark.svg" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" width="100" height="100"></Image></div>
                    {/* CSS */}
                    <div><Image src="https://api.iconify.design/logos:css-3.svg" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" width="100" height="100"></Image></div>
                    {/* JavaScript */}
                    <div><Image src="https://api.iconify.design/devicon:html5-wordmark.svg" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" width="100" height="100"></Image></div>
                    {/* NodeJS */}
                    <div><Image src="https://api.iconify.design/devicon:html5-wordmark.svg" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" width="100" height="100"></Image></div>
                    {/* NextJS */}
                    <div><Image src="https://api.iconify.design/devicon:html5-wordmark.svg" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" width="100" height="100"></Image></div>
                    {/* React */}
                    <div><Image src="https://api.iconify.design/devicon:html5-wordmark.svg" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" width="100" height="100"></Image></div>
                    {/* Typescript */}
                    <div><Image src="https://api.iconify.design/devicon:html5-wordmark.svg" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" width="100" height="100"></Image></div>
                    {/* Tailwind */}
                    <div><Image src="https://api.iconify.design/devicon:html5-wordmark.svg" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" width="100" height="100"></Image></div>
                    {/* Github */}
                    <div><Image src="https://api.iconify.design/devicon:html5-wordmark.svg" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" width="100" height="100"></Image></div>

                    <div><Image src="https://api.iconify.design/devicon:html5-wordmark.svg" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" width="100" height="100"></Image></div>

                    
                    {/* <div><p className="text-lg font-normal">React</p></div>
                    <div><p className="text-lg font-normal">Typescript</p></div> */}
                  </div>
              </div>
        </div>
      
    </>
  );
}
