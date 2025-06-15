import React from 'react'

export default function Brands() {
  const brands = [
    { name: 'BMW', logo: '/bmw-logo.png' },
    { name: 'Mercedes-Benz', logo: '/mercedes-benz-logo.png' },
    { name: 'Porsche', logo: '/porsche-logo.png' },
    { name: 'Tesla', logo: '/tesla-logo.png' },
    { name: 'Ferrari', logo: '/ferrari-logo.png' },
    { name: 'Audi', logo: '/audi-logo.png' },
    { name: 'Cadillac', logo: '/cadillac-logo.png' },
    { name: 'Chrysler', logo: '/chrysler-logo.png' },
    { name: 'Corvette', logo: '/corvette-logo.png' },
    { name: 'Dodge', logo: '/dodge-logo.png' },
    { name: 'Fiat', logo: '/fiat-logo.png' },
    { name: 'Ford', logo: '/ford-logo-2017-640.png' },
    { name: 'Ford-Mustang', logo: '/public/ford-mustang-logo.png' },
    { name: 'GMC', logo: '/gmc-logo.png' },
    { name: 'Honda', logo: '/honda-logo.png' },
    { name: 'Hyundai', logo: '/hyundai-logo.png' },
    { name: 'Infiniti', logo: '/infiniti-logo.png' },
    { name: 'Jaguar', logo: '/jaguar-logo.png' },
    { name: 'jeep', logo: '/jeep-logo.png' },
    { name: 'kia', logo: '/kia-logo.png' },
    { name: 'mazda', logo: '/mazda-logo.png' },
    { name: 'mclaren', logo: '/mclaren-logo.png' },
    { name: 'mini', logo: '/mini-logo.png' },
    { name: 'mitsubishi', logo: '/mitsubishi-logo.png' },
    { name: 'peugeot', logo: '/peugeot-logo.png' },
    { name: 'subaru', logo: '/subaru-logo.png' },
    { name: 'toyota', logo: '/toyota-logo.png' },
    { name: 'volkswagen', logo: '/volkswagen-logo.png' },
    { name: 'volvo', logo: '/volvo-logo.png' },
    { name: 'land-rover', logo: '/land-rover-logo.png' },
    { name: 'skoda', logo: '/skoda-logo.png' },
    { name: 'opel', logo: '/opel-logo.png' },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 capitalize">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="relative text-4xl sm:text-5xl font-extrabold text-gray-900 inline-block after:content-[''] after:block after:w-16 after:h-1.5 after:mt-3 after:bg-yellow-500 after:mx-auto after:rounded-full after:transition-all after:duration-500 hover:after:w-28">
            Our Premium Brands
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-gray-500 mx-auto">
            Discover the world's finest automotive brands
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
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
  );
}