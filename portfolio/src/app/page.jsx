'use client'

import { Montserrat } from "next/font/google";
import { Button, Navbar } from 'flowbite-react';
import { useState } from 'react';
import Component from "@/app/components/Component"
import Image from "next/image";
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


  return (
    <main className={`${montserrat.className} m-0 p-0 min-h-screen`}>
      
      <Component></Component>

      
      <section className="grid grid-cols-1 place-items-center ">
        <div className=" text-white text-6xl font-bold py-64">                                              {/* hover:text-cyan-500 */}
              <h1 className="text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 " id='clrchange' onMouseOver={generateRandomColor} style={{ color: randomColor}}
>i am dric.</h1>
              <h4 className="text-center text-2xl font-semibold">i am dric.</h4>

        </div>
      </section>

      <section className="grid place-items-center p-48 m-0">
        <div className=" text-white text-center text-4xl font-bold bg-neutral-800 p-32 m-0 rounded-xl">
              <div>
                <h1>About me</h1>
                <p className="text-2xl font-normal">Hello!</p>
              </div>
        </div>
      </section>
      
    </main>
  );
}
