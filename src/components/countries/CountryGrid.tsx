// src/components/CountryGrid.tsx

import React from 'react';
import CountryCard from './CountryCard'; 
import type { Country } from '../../types'; 

interface CountryGridProps {
  countries: Country[]; 
}

const CountryGrid: React.FC<CountryGridProps> = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {countries.length > 0 ? (
        countries.map(country => (
          <CountryCard key={country.name.common} country={country} />
        ))
      ) : (
        <p className="col-span-full text-center text-lg text-gray-600 dark:text-gray-300">No countries found.</p>
      )}
    </div>
  );
};

export default CountryGrid;
