'use client'
import { Montserrat } from "next/font/google";
import { Button, Navbar } from 'flowbite-react';
import { useState, useEffect } from 'react';
import Component from "@/app/components/Component"
import TechStack from "@/app/components/TechStack"
import '@/app/css/TerminalTextEffect.css';


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






export default function Home() {

  // const colorArray = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']; // Add your desired colors

  const colorArray = ['#a7ff00', '#00ffad', '#00c0ff', '#ff00e0', '#ffe700'];

  const [randomColor, setRandomColor] = useState(colorArray[0]); // Initial color is the first color in the array

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    setRandomColor(colorArray[randomIndex]);
  };


  const textArray = ["I'm a Frontend Developer", "I'm an editor", "I'm a tech enthusiast"];
  const [currentText, setCurrentText] = useState(textArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * textArray.length);
      setCurrentText(textArray[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [textArray]);

  


  return (
    <main className={`${montserrat.className} m-0 p-0 min-h-screen`}>
      <Component className=""></Component>

      
      <section className="grid grid-cols-1 place-items-center " id="welcome">
        <div className=" text-white text-6xl font-bold py-64">                                              {/* hover:text-cyan-500 */}
              <h1 className="text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 " id='clrchange' onMouseOver={generateRandomColor} style={{ color: randomColor}}
>i am dric.</h1>
            <h4 className="terminal-text text-center">{currentText}<span className="text-cursor"></span></h4>

        </div>
      </section>

      <section className="grid place-items-center pb-48 m-0" id="about" >
        <div className=" text-white text-4xl font-bold bg-neutral-800 w-3/6 m-0 rounded-xl">
              <div className="p-0 my-4 ml-4">
                <h1>🎨 About me 🎨</h1>
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
      {/* Icons https://icongr.am/devicon */}
      <section className="grid place-items-center pb-48 m-0" id="stacks" >
        <TechStack></TechStack>
      </section>

      
      
    </main>
  );
}
