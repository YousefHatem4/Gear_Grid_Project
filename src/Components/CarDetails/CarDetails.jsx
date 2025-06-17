import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { carsContext } from '../Context/CarsContext';

export default function CarDetails() {
  const [car, setCar] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' ||
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  let { id } = useParams();
  let { getCarToSave, savedCarIds } = useContext(carsContext);
  const isSaved = savedCarIds && savedCarIds.has(parseInt(id));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  async function getCarDetails(carId) {
    try {
      setIsLoading(true);
      let { data } = await axios.get(`https://azmycarsapi.runasp.net/api/Car/${carId}`);
      setCar(data);
      document.title = `${data.make} ${data.model} Details | GearGrid`;
    } catch (error) {
      console.error('Error fetching car details:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCarDetails(id);
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black">
        <div className="text-center text-gray-800 dark:text-white">
          <h2 className="text-2xl font-semibold">Car not found</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Sorry, we couldn't find the car you're looking for.</p>
        </div>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-US').format(car.price);
  const year = new Date(car.year).getFullYear();

  return (
    <div className="min-h-screen pt-17 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl overflow-hidden transition-colors duration-300">
          <div className="bg-gray-100 dark:bg-black py-4 px-6 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-yellow-500">Gear</span>Grid
            </h1>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="p-4 md:p-6">
              <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                <img
                  src={car.imageCars[activeImage].imageUrl}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {car.imageCars.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-yellow-500' : 'border-gray-200 dark:border-gray-700'} transition-colors duration-300`}
                  >
                    <img
                      src={image.imageUrl}
                      alt={`${car.make} ${car.model} - ${index + 1}`}
                      className="w-full h-20 object-cover bg-gray-100 dark:bg-gray-900"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 md:p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {car.make} {car.model}
                  </h1>
                  <div className="flex items-center mt-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded-full transition-colors duration-300">
                      {car.category}
                    </span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">{year}</span>
                    <span className="ml-2 flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {car.color}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-yellow-500 dark:text-yellow-400 transition-colors duration-300">${formattedPrice}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 transition-colors duration-300">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Description</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{car.description}</p>
              </div>

              <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 transition-colors duration-300">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Key Features</h2>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500 dark:text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Turbocharged Engine</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500 dark:text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Premium Interior</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500 dark:text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Automatic Transmission</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500 dark:text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">i-Cockpit® Design</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={!isSaved ? () => getCarToSave(id) : null}
                  className={`flex-1 ${isSaved
                      ? 'bg-yellow-500 text-white cursor-default'
                      : 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 cursor-pointer'
                    } font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg`}
                >
                  <i className={`fa-${isSaved ? 'solid' : 'regular'} fa-bookmark me-2`}></i>
                  {isSaved ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}