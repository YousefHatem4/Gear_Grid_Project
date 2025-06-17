import React, { useContext, useEffect } from 'react';
import { carsContext } from '../Context/CarsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Save() {
  const { save } = useContext(carsContext);

  useEffect(() => {
    document.title = 'Saved Cars';
  }, []);

  // Format price as EGP
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: 'EGP'
    }).format(price).replace('EGP', 'EGP');
  };

  if (!save || save.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-center">
        <h2 className="text-xl text-gray-500">No saved cars yet.</h2>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="relative text-4xl sm:text-5xl font-extrabold text-gray-900 inline-block after:content-[''] after:block after:w-16 after:h-1.5 after:mt-3 after:bg-yellow-500 after:mx-auto after:rounded-full after:transition-all after:duration-500 hover:after:w-28">
            Saved Items
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-500 mx-auto">
            Your favorite cars in one place
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {save.map((item) => {
            const car = item.car;
            const imageUrl = car.imageUrl
              ? `https://azmycarsapi.runasp.net${car.imageUrl}`
              : 'https://via.placeholder.com/300x200?text=Car+Image';

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={car.model}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Car+Image';
                    }}
                  />
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.make} {car.model}</h3>

                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faPalette} className="mr-2 text-yellow-500" />
                      <span>{car.color}</span>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-yellow-500" />
                      <span>{car.year}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-gray-500 line-clamp-3">
                    {car.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="text-lg font-bold text-yellow-600 flex items-center">
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
