import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  useEffect(() => {
    document.title = 'About'
  }, [])
  return <>
    {/* section one */}
    <section className='min-h-[70vh] bg-[url("/car-about4.jpg")] bg-cover bg-center bg-no-repeat flex justify-start items-center'>
      <div className='ms-20 mb-20' >
        <h1 className='text-[#FFFFFF] text-5xl font-semibold capitalize  leading-tight'>We make finding the <br></br>
          right car simple  </h1>
        <div className='flex text-black font-semibold mt-5'>
          <Link to={'/listing'} type='button' className='  bg-transparent rounded-3xl border-white border py-4 px-16 text-white cursor-pointer button-home-2'>Find Out More
            <i class="fa-solid fa-chevron-right ms-2"></i> </Link>
        </div>
      </div>
    </section>


    {/* section two */}
    <section className='my-15'>
      <h1 className='text-3xl font-bold mb-10 ms-32 md:ms-40'>Why Choose Us?</h1>
      <div className=' text-center md:flex justify-center items-center gap-15 '>
        <div className='w-full md:w-2/12 mb-8 md:mb-0'>
          <i class="fa-solid fa-coins text-3xl mb-4"></i>
          <h1 className='mb-3 font-semibold'>Special Financing Offers</h1>
          <p className='text-[12px]'>Our stress-free finance department that can</p>
          <p className='text-[12px]'>find financial solutions to save you money.</p>
        </div>

        <div className='w-full md:w-2/12 mb-8 md:mb-0'>
          <i class="fa-regular fa-gem text-3xl mb-4"></i>
          <h1 className='mb-3 font-semibold'>Trusted Car Dealership</h1>
          <p className='text-[12px]'>Our stress-free finance department that can</p>
          <p className='text-[12px]'>find financial solutions to save you money.</p>
        </div>

        <div className='w-full md:w-2/12 mb-8 md:mb-0'>
          <i class="fa-solid fa-dollar-sign text-3xl mb-4"></i>
          <h1 className='mb-3 font-semibold'>Transparent Pricing</h1>
          <p className='text-[12px]'>Our stress-free finance department that can</p>
          <p className='text-[12px]'>find financial solutions to save you money.</p>
        </div>

        <div className='w-full md:w-2/12 mb-8 md:mb-0'>
          <i class="fa-solid fa-car-burst text-3xl mb-4"></i>
          <h1 className='mb-3 font-semibold'>Expert Car Service</h1>
          <p className='text-[12px]'>Our stress-free finance department that can</p>
          <p className='text-[12px]'>find financial solutions to save you money.</p>
        </div>
      </div>
    </section>
    {/* section three */}

    <section className='mt-15 bg-[#F9FBFC] min-h-[50vh] py-12 px-4 sm:px-6'>
      <div className='flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto mb-12 gap-4'>
        <h1 className='text-3xl font-bold text-gray-900'>What our customers say</h1>
        <p className='text-sm text-gray-600'>
          Rated 4.7 / 5 based on 28,370 reviews. Showing our 4 & 5 star reviews.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-6 max-w-7xl mx-auto'>
        {/* Card 1 */}
        <div className='w-full md:w-[22%] bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200'>
          <div className='flex items-center mb-4'>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-sm text-amber-400 mr-0.5"></i>
              ))}
            </div>
            <div className='flex items-center ml-3'>
              <i className="fas fa-check-circle text-blue-500 text-sm"></i>
              <span className='ml-1 text-blue-500 text-xs font-medium'>Verified</span>
            </div>
          </div>
          <h3 className='text-lg font-semibold text-gray-900 mb-3 text-left'>Sales process was simple and easy</h3>
          <p className='text-sm text-gray-600 text-left mb-2 leading-relaxed'>Sales process was simple and easy</p>
          <p className='text-sm text-gray-600 text-left mb-4 leading-relaxed'>Maximillion was friendly and I didn't feel.</p>
          <p className='font-medium text-gray-900'>Ali Tufan</p>
        </div>

        {/* Card 2 */}
        <div className='w-full md:w-[22%] bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200'>
          <div className='flex items-center mb-4'>
            <div className='flex'>
              {[...Array(4)].map((_, i) => (
                <i key={i} className="fas fa-star text-sm text-amber-400 mr-0.5"></i>
              ))}
              <i className="fas fa-star-half-alt text-sm text-amber-400"></i>
            </div>
            <div className='flex items-center ml-3'>
              <i className="fas fa-check-circle text-blue-500 text-sm"></i>
              <span className='ml-1 text-blue-500 text-xs font-medium'>Verified</span>
            </div>
          </div>
          <h3 className='text-lg font-semibold text-gray-900 mb-3 text-left'>Good job for project</h3>
          <p className='text-sm text-gray-600 text-left mb-2 leading-relaxed'>Sales process was simple and easy</p>
          <p className='text-sm text-gray-600 text-left mb-4 leading-relaxed'>Maximillion was friendly and I didn't feel.</p>
          <p className='font-medium text-gray-900 mt-10'>John Doe</p>
        </div>

        {/* Card 3 */}
        <div className='w-full md:w-[22%] bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200'>
          <div className='flex items-center mb-4'>
            <div className='flex'>
              {[...Array(2)].map((_, i) => (
                <i key={i} className="fas fa-star text-sm text-amber-400 mr-0.5"></i>
              ))}
              {[...Array(3)].map((_, i) => (
                <i key={i} className="fas fa-star-half-alt text-sm text-amber-400"></i>
              ))}
            </div>
            <div className='flex items-center ml-3'>
              <i className="fas fa-check-circle text-blue-500 text-sm"></i>
              <span className='ml-1 text-blue-500 text-xs font-medium'>Verified</span>
            </div>
          </div>
          <h3 className='text-lg font-semibold text-gray-900 mb-3 text-left'>Sales process was simple and easy</h3>
          <p className='text-sm text-gray-600 text-left mb-2 leading-relaxed'>At Voiture what matters to us is making</p>
          <p className='text-sm text-gray-600 text-left mb-4 leading-relaxed'>your car search and buying.</p>
          <p className='font-medium text-gray-900'>Brooklyn Simmons</p>
        </div>

        {/* Card 4 */}
        <div className='w-full md:w-[22%] bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200'>
          <div className='flex items-center mb-4'>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-sm text-amber-400 mr-0.5"></i>
              ))}
            </div>
            <div className='flex items-center ml-3'>
              <i className="fas fa-check-circle text-blue-500 text-sm"></i>
              <span className='ml-1 text-blue-500 text-xs font-medium'>Verified</span>
            </div>
          </div>
          <h3 className='text-lg font-semibold text-gray-900 mb-3 text-left'>Good job for project</h3>
          <p className='text-sm text-gray-600 text-left mb-2 leading-relaxed'>Sales process was simple and easy</p>
          <p className='text-sm text-gray-600 text-left mb-4 leading-relaxed'>Maximillion was friendly and I didn't feel.</p>
          <p className='font-medium text-gray-900 mt-10'>Augusta Silva</p>
        </div>
      </div>
    </section>

    {/* section four */}
    <section className='mt-20'>
      <h1 className='font-bold text-4xl ms-40 mb-10'>Our Team</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-15'>
        <div className="w-8/12 md:w-2/12">
          <img className="rounded-t-lg w-full" src="/team-1.png" alt />
          <div className="p-2">
            <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 ">Courtney Henry</h5>
            <p className="mb-3 text-sm font-normal text-gray-700 ">Development Manager</p>
          </div>
        </div>

        <div className="w-8/12 md:w-2/12">
          <img className="rounded-t-lg w-full" src="/team-2.png" alt />
          <div className="p-2">
            <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 ">Jenny Wilson</h5>
            <p className="mb-3 text-sm font-normal text-gray-700 ">UI/UX Designer</p>
          </div>
        </div>

        <div className="w-8/12 md:w-2/12">
          <img className="rounded-t-lg w-full" src="/team-3.jpg" alt />
          <div className="p-2">
            <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 ">john albert</h5>
            <p className="mb-3 text-sm font-normal text-gray-700 ">Software Tester</p>
          </div>
        </div>

        <div className="w-8/12 md:w-2/12">
          <img className="rounded-t-lg w-full mb-13" src="/team-5.jpg" alt />
          <div className="p-2">
            <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 ">Jenny Wilson</h5>
            <p className="mb-3 text-sm font-normal text-gray-700 ">Front End Developer</p>
          </div>
        </div>

      </div>
    </section>
  </>
}
