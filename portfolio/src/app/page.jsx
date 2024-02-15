'use client'
import React, { useMemo } from 'react';
import { Montserrat } from "next/font/google";
import { useState, useEffect } from 'react';
import { Icon } from '@iconify-icon/react';
import Component from "@/app/components/Component"
import Portfolio from "@/app/components/Portfolio"
import '@/app/css/TerminalTextEffect.css';
import '@radix-ui/themes/styles.css';



import rsLogo from '@/app/assets/rsLogo.png'

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// var colorArray = ['#a7ff00', '#00ffad', '#00c0ff', '#ff00e0', '#ffe700'];

// var random_color = colors[(Math.floor( 
//   Math.random() * colors.length))];

// function chngColor() {
//   const x = document.getElementById('clrchange'); 
//   x.style.color = random_color;  
// }

// className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow"




export default function Home() {

  // const colorArray = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']; // Add your desired colors

  const colorArray = ['#a7ff00', '#00ffad', '#00c0ff', '#ff00e0', '#ffe700'];

  const [randomColor, setRandomColor] = useState(colorArray[0]); // Initial color is the first color in the array

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    setRandomColor(colorArray[randomIndex]);
  };


  const textArray = useMemo(() => ["I'm a Frontend Developer", "I'm an editor", "I'm a tech enthusiast"], []);  const [currentText, setCurrentText] = useState(textArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * textArray.length);
      setCurrentText(textArray[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [textArray]);

  const pTitle = (content) => {
    return (
      <>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{content}</h5>
      </>
    );
  }

  const pContent = (content) => {
    return (
      <>
        <p class="mb-3 font-normal text-gray-700 text-xl">{content}</p>
      </>
    );
  }

  


  return (
    <main className={`${montserrat.className} overflow-y-hidden min-h-screen overflow-hidden`}>
      <Component className=""></Component>

      
      <section className="grid grid-cols-1 place-items-center " id="welcome">
        <div className=" text-white text-4xl md:text-6xl font-bold py-72 lg:py-64">                                              {/* hover:text-cyan-500 */}
              <h1 className="hidden tablet:block laptop:block text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 " id='clrchange' onMouseOver={generateRandomColor} style={{ color: randomColor}}
>i am dric.</h1>
        <h1 className=" laptop:hidden tablet:hidden text-center">i am dric.</h1>
        <h4 className="hidden laptop:tablet:block terminal-text text-center">{currentText}<span className="text-cursor"></span></h4>

        </div>
      </section>

      {/* About me: PC/Tablet */}
      <section className="hidden laptop:grid tablet:grid grid-cols-1 col-span-2 place-items-center pb-48 m-0" id="about" >
        <div className="grid text-white text-4xl font-bold bg-neutral-800 laptop:w-3/6 tablet:w-4/5 m-0 rounded-xl">
              <div className="p-0 my-4 ml-4">
                <h1 className="hidden md:block">🎨 About me 🎨</h1>
                <h1 className="text-3xl md:hidden">🎨 About me </h1>
                <p className="text-lg font-normal mt-2 mb-2">Hi, I'm Abraham, aka dric!</p>

                <p className="text-lg font-normal mt-2">I'm a young Frontend developer, and editor. I ran a Reverb, a Discord bot project which I recently ended, and I've been coding since 4th grade.</p>
                <p className="text-lg font-normal mt-2">Currently, I'm learning backend technologies such as:</p>
                <ul className="ml-5">
                  <li className="text-lg font-normal mt-2 list-disc">NodeJS</li>
                  <li className="text-lg font-normal mt-2 list-disc">JQuery</li>
                  <li className="text-lg font-normal mt-2 list-disc">MongoDB</li>
                </ul>
                <p className="text-lg font-normal mt-2">In my freetime, I enjoy watching movies and working out.</p>
              </div>
        </div>
      </section>

      {/* About me: MOBILE/Phone */}
      <section className="flex justify-center items-center pb-48 laptop:hidden tablet:hidden" id="about">

      <div className=" ml-5 text-white font-bold bg-neutral-800 rounded-xl p-2">
      <h1 className="text-center text-3xl md:hidden">🎨 About me </h1>
          <div className="text-center font-normal text-lg">
              <p className=" mt-2 mb-2">Hi, I'm Abraham, aka dric!</p>

              <p className="mt-2">I'm a young Frontend developer, and editor. I ran a Reverb, a Discord bot project, running on an async python api called Nextcord. This was a passion project which I'm considering continuing as I just recently shut it down.</p>
              <p className="mt-2">Currently, I'm learning backend technologies such as NodeJS, JQuery and MongoDB.</p>
              <p className="mt-2">In my freetime, I enjoy watching movies and working out.</p>
          </div>
          
      </div>

      </section>

      {/* Check out my works: PC/Tablet */}
      <section className="hidden laptop:grid tablet:grid place-items-center pb-48 m-0" id="about" >
        <div className=" text-white text-4xl font-bold bg-neutral-800 laptop:w-3/6 tablet:w-5/6 m-0 rounded-xl h-5/6 overflow-y-auto">

              <div className="grid grid-cols-2 grid-rows-2 justify-items-center p-0 my-4 mx-4">
                <h1 className=" col-span-2">Check out my Works! </h1>

                
                  <p className="text-lg font-medium col-span-3"> Links to the websites I've worked on</p>
                  <Portfolio title={pTitle("Studio Finish")} content={pContent("School Club")} link="https://tjstudiofinish.web.app/index.html" className="hidden laptop:block tablet:block mb-4"/>
                  <Portfolio title={pTitle("DaKidd Fuego")} content={pContent("Website for DaKidd Fuego")} className="hidden laptop:block tablet:block"/>                  
              </div>
        </div>
      </section>

      
      {/* Check out my works: MOBILE */}
      <section className="laptop:hidden tablet:hidden flex flex-col justify-center pb-48 m-0" id="about" >
        <div className="ml-4 text-white font-bold bg-neutral-800  rounded-xl">

              <div className="grid justify-items-center p-0 my-4 mx-4 text-xl ">
                <h1 className="">Check out my Works! </h1>

                <div className="grid">
                  <p className="text-lg text-center font-medium"> Past websites I've created:</p>

                  <ul className="text-lg list-disc list-inside justify-center font-medium">
                    <li><a href="https://tjstudiofinish.web.app/index.html" className="no-underline">Studio Finish School Club (beginner)</a></li>
                    <li><a href="#" className="no-underline">DaKidd Fuego Artist (fabricating)</a></li>
                  </ul>
                </div>
                
                
              </div>
        </div>
      </section>



      {/* Icons https://icon-sets.iconify.design/?query=css */}
      <section className="grid laptop:place-items-center tablet:place-items-center laptop:ml-0 tablet:ml-0 pb-48  justify-items-center" id="stacks" >

          <div className=" text-white text-4xl font-bold bg-neutral-800 computer:rounded-xl tablet:rounded-xl rounded-2xl laptop:w-auto tablet:w-auto computer:m-0 tablet:m-0 ml-3">
                  <div className="grid place-items-center p-0 my-4">
                      <div className="grid md:mt-2 mx-2 md:mx-4 md:gap-8 gap-x-10 md:gap-x-20 md:gap-y-6 laptop:grid-cols-6 tablet:grid-cols-4 laptop:grid-rows-3 tablet:grid-rows-3 justify-items-center" id="tech">
                        <div className="col-span-2 laptop:col-span-6 tablet:col-span-4"><h1 className="md:text-4xl font-bold computer:m0 tablet:m-0 mb-4">Technologies</h1></div>
                        {/* HTMl */}
                        <div className=""><Icon icon="logos:html-5" width="5rem" height="5rem" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" /></div>
                        {/* CSS */}
                        <div className=""><Icon icon="logos:css-3" width="5rem" height="5rem" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" /></div>
                        {/* JavaScript */}
                        <div><Icon icon="logos:javascript" width="4rem" height="4rem" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" /></div>
                        {/* NodeJS */}
                        <div><Icon icon="logos:nodejs-icon" width="5rem" height="5rem" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" /></div>
                        {/* NextJS */}
                        <div><Icon icon="logos:nextjs-icon" width="5rem" height="5rem" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" /></div>
                        {/* React */}
                        <div><Icon icon="logos:react" width="5rem" height="5rem" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" /></div>
                        {/* Typescript */}
                        <div><Icon icon="devicon:typescript" width="5rem" height="5rem" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" /></div>
                        {/* Tailwind */}
                        <div><Icon icon="devicon:tailwindcss" width="5rem" height="5rem" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" /></div>
                        {/* Github */}
                        <div><Icon icon="mdi:github" width="5rem" height="5rem" className="transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow" /></div>
                        {/* <div><p className="text-lg font-normal">React</p></div>
                        <div><p className="text-lg font-normal">Typescript</p></div> */}
                      </div>
                  </div>
            </div>
      </section>

      
      
    </main>
  );
}
