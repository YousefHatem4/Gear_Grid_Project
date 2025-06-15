import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Top horizontal line */}
      <div className='flex justify-center items-center'>
        <div className="mt-5 w-[90%] h-[1px] bg-gray-300" />
      </div>

      {/* Footer Content */}
      <div className='flex flex-col md:flex-row flex-wrap justify-center bg-white mt-4 px-4 md:px-16 py-10 gap-y-10'>
        {/* Each Column */}
        <div className='w-full sm:w-1/2 md:w-1/5 px-4'>
          <h1 className='font-semibold text-xl mb-4'>Company</h1>
          <ul>
            <li className='mb-2'>About Us</li>
            <li className='mb-2'>Blog</li>
            <li className='mb-2'>Services</li>
            <li className='mb-2'>FAQs</li>
            <li className='mb-2'>Terms</li>
            <li className='mb-2'>Contact Us</li>
          </ul>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/5 px-4'>
          <h1 className='font-semibold text-xl mb-4'>Quick Links</h1>
          <ul>
            <li className='mb-2'>Get in Touch</li>
            <li className='mb-2'>Help Center</li>
            <li className='mb-2'>Live Chat</li>
            <li className='mb-2'>How it Works</li>
          </ul>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/5 px-4'>
          <h1 className='font-semibold text-xl mb-4'>Our Brands</h1>
          <ul className='columns-2 md:columns-1 gap-4'>
            <li className='mb-2'>Toyota</li>
            <li className='mb-2'>Porsche</li>
            <li className='mb-2'>Audi</li>
            <li className='mb-2'>BMW</li>
            <li className='mb-2'>Ford</li>
            <li className='mb-2'>Nissan</li>
            <li className='mb-2'>Peugeot</li>
            <li className='mb-2'>Volkswagen</li>
          </ul>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/5 px-4'>
          <h1 className='font-semibold text-xl mb-4'>Vehicle Types</h1>
          <ul className='columns-2 md:columns-1 gap-4'>
            <li className='mb-2'>Sedan</li>
            <li className='mb-2'>Hatchback</li>
            <li className='mb-2'>SUV</li>
            <li className='mb-2'>Hybrid</li>
            <li className='mb-2'>Electric</li>
            <li className='mb-2'>Coupe</li>
            <li className='mb-2'>Truck</li>
            <li className='mb-2'>Convertible</li>
          </ul>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/5 px-4'>
          <h1 className='font-semibold text-xl mb-4'>Sale Hours</h1>
          <ul className='mb-6'>
            <li className='mb-2'>Mon–Fri: 09:00AM – 09:00PM</li>
            <li className='mb-2'>Saturday: 09:00AM – 07:00PM</li>
            <li>Sunday: Closed</li>
          </ul>

          <h1 className='font-semibold text-xl mb-3'>Connect With Us</h1>
          <div className='flex gap-4 text-gray-700 text-xl '>
            <i className="fa-brands fa-facebook-f hover:text-blue-600 cursor-pointer"></i>
            <i className="fa-brands fa-twitter hover:text-blue-400 cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover:text-pink-500 cursor-pointer"></i>
            <i className="fa-brands fa-linkedin hover:text-blue-700 cursor-pointer"></i>
          </div>
        </div>
      </div>

      {/* Bottom horizontal line */}
      <div className='flex justify-center items-center'>
        <div className="w-[90%] h-[1px] bg-gray-300" />
      </div>

      {/* Footer Bottom Section */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-16 py-4 text-center text-sm'>
        <p className='font-medium'>© 2024 example.com. All rights reserved.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='bg-yellow-500 hover:bg-black/100 transition duration-500 text-white px-3 py-2 rounded-full cursor-pointer'>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        <p className='font-medium'>Terms & Conditions • Privacy Notice</p>
      </div>
    </>
  );
}
