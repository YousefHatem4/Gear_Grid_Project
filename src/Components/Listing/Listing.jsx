import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faCarSide,
  faCarAlt,
  faLeaf,
  faSun,
  faTruck,
  faCalendarAlt,
  faPalette,
  faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Listing() {
  const categories = [
    { name: 'Sedan', icon: faCar },
    { name: 'SUV', icon: faTruck },
    { name: 'Hatchback', icon: faCarAlt },
    { name: 'Coupe', icon: faCarSide },
    { name: 'Hybrid', icon: faLeaf },
    { name: 'Convertible', icon: faSun }
  ];

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getAllCars() {
      let { data } = await axios.get(`https://azmycarsapi.runasp.net/api/Car`);
      setCars(data);
      setLoading(false);
  }

  useEffect(() => {
    getAllCars();
  }, []);

  // Format price as EGP with commas
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: 'EGP'
    }).format(price).replace('EGP', 'EGP');
  };

  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="relative text-4xl sm:text-5xl font-extrabold text-gray-900 inline-block after:content-[''] after:block after:w-16 after:h-1.5 after:mt-3 after:bg-yellow-500 after:mx-auto after:rounded-full after:transition-all after:duration-500 hover:after:w-28">
              Car Categories
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-gray-500 mx-auto">
              Explore our diverse range of vehicle types
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 ">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer relative bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
              >
                <div className="flex-shrink-0 h-20 w-20 rounded-full bg-gray-50 p-4 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={category.icon}
                    className="h-16 w-16 text-black text-2xl"
                  />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900 group-hover:text-yellow-500 transition-colors duration-300">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Car Listing Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Available Cars</h2>
            <p className="mt-2 text-sm text-gray-500">Find your perfect vehicle from our collection</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <i className='fas fa-spinner fa-spin fa-4x text-yellow-500'></i>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative flex flex-col h-full"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={car.imageUrl || 'https://via.placeholder.com/300x200?text=Car+Image'}
                      alt={car.model}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Car+Image';
                      }}
                    />

                    {/* Save Button */}
                    <button
                      title="Save"
                      className="absolute cursor-pointer top-2 left-2 text-yellow-500 bg-white flex justify-center items-center p-2 rounded-full shadow hover:bg-yellow-500 hover:text-white transition-colors"
                    >
                      <i className="fa-regular fa-bookmark text-sm"></i>
                    </button>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Title and Basic Info */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">{car.model}</h3>

                      <div className="flex items-center text-sm text-gray-600">
                        <FontAwesomeIcon icon={faPalette} className="mr-2 text-yellow-500" />
                        <span className="capitalize">{car.color}</span>
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-yellow-500" />
                        <span>{car.year}</span>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mt-3 mb-4 flex-grow">
                      <p className="text-sm text-gray-600">
                        {car.description
                          ? car.description.split(' ').slice(0, 7).join(' ') + (car.description.split(' ').length > 5 ? '...' : '')
                          : 'No description available'}
                      </p>
                    </div>

                    {/* Price and Action Button */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center text-lg font-bold text-yellow-600">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" />
                        {formatPrice(car.price)}
                      </div>
                      <Link
                        to={`/cardetails/${car.id}`}
                        className="px-4 py-2 bg-yellow-500 text-sm text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
                      >
                        View 
                      </Link>
                    </div>
                  </div>
            </div>
              
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}