
'use client';
import { Flowbite, Button, Navbar, CustomFlowbiteTheme } from 'flowbite-react';
import Image from "next/image";
import { Icon } from '@iconify-icon/react';
import rsLogo from '@/app/assets/rsLogo.png'

// Icons: https://icon-sets.iconify.design/?query=css


export default function TechStack() {

  return (
    <>
      
      <div className=" text-white text-4xl font-bold bg-neutral-800 w-4/6 m-0 rounded-xl">
              <div className="grid place-items-center p-0 my-4">
                <h1 className="text-4xl font-bold" id="stack">Tech Stack</h1>
                  <div className="grid mt-2 ml-4 mr-4 gap-8 gap-x-20 grid-cols-6 justify-items-center">
                    {/* HTMl */}
                    <div><Icon icon="logos:html-5" width="5rem" height="5rem" /></div>
                    {/* CSS */}
                    <div><Icon icon="logos:css-3" width="5rem" height="5rem" /></div>
                    {/* JavaScript */}
                    <div><Icon icon="logos:javascript" width="4rem" height="4rem" /></div>
                    {/* NodeJS */}
                    <div><Icon icon="logos:nodejs-icon" width="5rem" height="5rem" /></div>
                    {/* NextJS */}
                    <div><Icon icon="logos:nextjs-icon" width="5rem" height="5rem" /></div>
                    {/* React */}
                    <div><Icon icon="logos:react" width="5rem" height="5rem" /></div>
                    {/* Typescript */}
                    <div><Icon icon="devicon:typescript" width="5rem" height="5rem" /></div>
                    {/* Tailwind */}
                    <div><Icon icon="devicon:tailwindcss" width="5rem" height="5rem" /></div>
                    {/* Github */}
                    <div><Icon icon="mdi:github" width="5rem" height="5rem" /></div>

                    
                    {/* <div><p className="text-lg font-normal">React</p></div>
                    <div><p className="text-lg font-normal">Typescript</p></div> */}
                  </div>
              </div>
        </div>
      
    </>
  );
}
