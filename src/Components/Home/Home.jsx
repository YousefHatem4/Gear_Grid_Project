import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  useEffect(() => {
    document.title = 'Home'
  }, [])

  const brands = [
    { name: 'BMW', logo: '/bmw-logo.png' },
    { name: 'Porsche', logo: '/porsche-logo.png' },
    { name: 'Tesla', logo: '/tesla-logo.png' },
    { name: 'Ferrari', logo: '/ferrari-logo.png' },
  ];
  
  return <>
    <header className="h-screen w-full bg-[url('/car-home.png')]  bg-cover bg-center bg-no-repeat flex justify-start items-center ">

      <div className='ms-15' >
        <p className='text-[#FFFFFF] mb-5'>We make finding the right car simple</p>
        <h1 className='text-[#FFFFFF] text-5xl font-semibold '>Drive Your Dream</h1>
        <div className='flex text-black font-semibold mt-5'>
          <Link to={'/listing'} type='button' className='bg-[#FFFFFF] rounded-3xl py-2 px-4  cursor-pointer button-home'>View Inventory<i class="fa-solid fa-chevron-right ms-2"></i> </Link>
          <Link to={'/contact'} type='button' className=' ms-5 bg-transparent rounded-3xl border-white border py-2 px-4 text-white cursor-pointer button-home-2'>Contact Us
            <i class="fa-solid fa-chevron-right ms-2"></i> </Link>
        </div>
      </div>
    </header>
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className=" font-bold tracking-tight text-gray-900 text-3xl">
            Explore Our Premium Brands
          </h1>
          <Link to={'/brands'} className='cursor-pointer hover:text-yellow-500 transition duration-500'>show All Brands <i class="fa-solid fa-chevron-right ms-1"></i></Link>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
            >
              <div className="flex-shrink-0 h-24 w-24 rounded-full bg-gray-50 p-4 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 w-16 object-contain object-center"
                />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900 group-hover:text-yellow-500 transition-colors duration-300">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
}
