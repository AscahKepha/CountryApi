// src/components/CountryCard.tsx

import React from 'react';
import type { Country } from '../../types'; 

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105 cursor-pointer">
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="w-full h-40 object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null; // prevents infinite loop
          e.currentTarget.src = `https://placehold.co/600x400/cccccc/333333?text=Flag+Not+Found`;
        }}
      />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{country.name.common}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          <span className="font-semibold">Region:</span> {country.region}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          <span className="font-semibold">Capital:</span> {country.capital.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
