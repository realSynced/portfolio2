
'use client';
import { Flowbite, Button, Navbar, CustomFlowbiteTheme } from 'flowbite-react';
import rsLogo from '@/app/assets/rsLogo.png'



export default function Component() {

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <>
      <Navbar fluid rounded className='bg-transparent'>
        <Navbar.Brand>
          {/* <img src={rsLogo} className="mr-3 h-6 sm:h-9" alt="realSynced Logo" /> */}
          <span className="text-white self-center whitespace-nowrap text-xl font-semibold dark:text-white">realSynced</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className='bg-black'>Contact</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {/* <Navbar.Link href="#" className='text-white text-lg' >
            Welcome
          </Navbar.Link> */}
          <Navbar.Link href="#" className='text-white text-lg hover:text-black' data-modal-target="default-modal" data-modal-toggle="default-modal">Works</Navbar.Link>
          <Navbar.Link href="#" className='text-white text-lg' onClick={() => scrollToId('tech')}>Tech Stack</Navbar.Link>
          <Navbar.Link href="#" className='text-white text-lg' onClick={() => scrollToId('about')}>About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      
    </>
  );
}
