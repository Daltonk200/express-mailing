import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function NavBar() {
  return (
    <div className='container  transparent h-[10vh] top-0 fixed z-10 bg-white/10 backdrop-blur-lg  '>
      <nav className=' flex  justify-between items-center w-[95%] mx-auto h-full'>
         <li className="hidden lg:block font-bold text-center uppercase list-none mr-4"><Link href='/'>Home</Link> </li>
         <li className="hidden lg:block font-bold text-center uppercase list-none mr-4"><Link href='/'>Shipment status</Link></li>
         <li className="hidden lg:block font-bold text-center uppercase list-none mr-4"><Link href='/'>Transport</Link></li>
         <li className="hidden lg:block font-bold text-center uppercase list-none mr-4"><Link href='/'>About us</Link></li>
         <li className=" flex justify-center items-center list-none mr-4  lg:w-[15rem] h-[4rem]"><Link href='/'><Image src='/logos/upscaled-2x-express_mailing_logo.PNG' width={100} height={100} className='w-full h-full'/></Link></li>
         <li className="hidden lg:block font-bold text-center uppercase list-none mr-4"><Link href='/'>Warehouse</Link></li>
         <li className="hidden lg:block font-bold text-center uppercase list-none mr-4"><Link href='/'>logistic</Link></li>
         <li className="hidden lg:block font-bold text-center uppercase list-none mr-4"><Link href='/'>pet transport</Link></li>
         <li className="text-center uppercase list-none mr-4 outline p-2 font-bold"><Link href='/'>contact us</Link></li>   
      </nav>
    </div>
  )
}

export default NavBar