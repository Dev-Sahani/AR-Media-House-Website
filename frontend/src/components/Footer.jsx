import React from 'react'
import DropDown from './DropDown'

const Footer = () => {
  return (
    <footer className='w-full bg-secondary-500 text-tertiary-500 pt-12 px-0 md:px-16 lg:px-24'>
      <div className='flex flex-col gap-4 md:flex-row justify-between'>

      <div className='flex flex-col sm:flex-row md:flex-col justify-between md:justify-start px-4 md:px-0 gap-6'>
        <div>
          {/* AR MEDIA HOUSE's Logo and Name */}
          <div className='flex gap-2 items-center mb-4'>
            <h2 className='py-1 px-3 rounded-full bg-primary-500 inline text-secondary-500 text-3xl lg:text-5xl'>A</h2>
            <h1 className='text-sm lg:text-base'>AR MEDIA HOUSE</h1>
          </div>
          {/* Social Media Icons */}
          <div className='flex gap-1'>
            <img className='w-8 lg:w-10' src='./assets/Instagram-Logo.svg' alt="instagram" />
            <img className='w-8 lg:w-10' src='./assets/facebook.svg' alt="facebook" />
            <img className='w-8 lg:w-10' src='./assets/linkedin.svg' alt="linkedin" />
            <img className='w-8 lg:w-10' src="./assets/twitter.svg" alt="twitter" />
            <img className='w-8 lg:w-10' src="./assets/mail.svg" alt="mail" />
          </div>
        </div>
        <div className="flex gap-8 md:block">
          {/* Addresses Line 1 */}
          <div>
            <h1 className="text-sm lg:text-base">Address Line 1</h1>
            <p className="text-sm lg:text-base">--------------------------------------------</p>
            <p className="text-sm lg:text-base">------------------</p>
          </div>
          {/* Address Line 2 */}
          <div>
            <h1 className="text-sm lg:text-base">Address Line 2</h1>
            <p className="text-sm lg:text-base">--------------------------------------------</p>
            <p className="text-sm lg:text-base">--------</p>
          </div>
        </div>
      </div>


      <div className='hidden md:block flex flex-col md:gap-6'>
        <h1 className='text-xl lg:text-2xl'>Services</h1>
        <ul className='flex flex-col gap-2'>
          {SERVICES_LIST.map((el,ind)=><li key={ind} className="text-sm lg:text-base">{el}</li>)}
        </ul>
      </div>
      

      <div className='hidden md:block flex flex-col gap-6'>
        <h1 className='text-xl lg:text-2xl'>Site-map</h1>
        <ul className='flex flex-col gap-2 mt-2'>
          {SITE_MAP_LIST.map((el,ind)=><li key={ind} className="text-sm lg:text-base">{el}</li>)}
        </ul>
      </div>


      <div className='hidden md:block flex flex-col gap-6'>
        <h1 className='text-xl lg:text-2xl'>Insta-feed</h1>
        <div className='grid grid-cols-2 gap-8'>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
        </div>
      </div>
      <div className='flex flex-col'>
        <DropDown 
        className="block md:hidden !border-b-0" 
        title="Services" 
        titleClass="text-xl lg:text-2xl py-2 px-4">
          <ul className='flex flex-col gap-2 mt-2'>
          {SERVICES_LIST.map((el,ind)=><li key={ind} className="text-sm lg:text-base">{el}</li>)}
          </ul>
        </DropDown>
        <DropDown 
        className="block md:hidden !border-b-0" 
        title="Site-map" 
        titleClass="text-xl lg:text-2xl py-2 px-4">
          <ul className='flex flex-col gap-2 mt-2'>
          {SITE_MAP_LIST.map((el,ind)=><li key={ind} className="text-sm lg:text-base">{el}</li>)}
          </ul>
        </DropDown>
        <DropDown 
        className="block md:hidden" 
        title="Insta-feed" 
        titleClass="text-xl lg:text-2xl py-2 px-4">
          <div className='grid grid-cols-2 gap-8'>
            <div className='w-20 h-20 rounded bg-tertiary-500'></div>
            <div className='w-20 h-20 rounded bg-tertiary-500'></div>
            <div className='w-20 h-20 rounded bg-tertiary-500'></div>
            <div className='w-20 h-20 rounded bg-tertiary-500'></div>
          </div>
        </DropDown>
      </div>
      </div>

      <div className='mt-8 py-1 text-xs flex flex-wrap justify-center gap-1'>
        <p className='text-nowrap'>Copyrights @2023 are reserved with the ARMEDIAHOUSE.</p>
        <p className='text-nowrap'>For more details contact +91 XXXXXXXXXX or armediahouse@gmail.com</p>
      </div>
    </footer>
  )
}

const SERVICES_LIST = ["Performance Marketing", "E-commerce","Media Buying","Lead Generation","Content Marketing","Martech"]
const SITE_MAP_LIST = ["Home", "Technology","Services","Career","Blogs","About"]

export default Footer