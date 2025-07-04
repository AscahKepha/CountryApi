// src/App.tsx

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { mockCountries } from '../src/data/mockCountries'; // Import mock data
import CountryGrid from './components/countries/CountryGrid'; // Import the new CountryGrid component
import type { Country } from '../src/types'; // Import the Country interface

// Main App Component
const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Initialize dark mode from localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('theme');
      if (savedMode) {
        return savedMode === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Effect to apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Simulate fetching data
  useEffect(() => {
    setCountries(mockCountries); // Using imported mock data
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleRegionSelect = useCallback((region: string) => {
    setSelectedRegion(region);
    setIsDropdownOpen(false); // Close dropdown after selection
  }, []);

  const uniqueRegions = useMemo(() => {
    const regions = new Set(mockCountries.map(country => country.region));
    return Array.from(regions).sort();
  }, []);

  const filteredCountries = useMemo(() => {
    return countries.filter(country => {
      const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
      return matchesSearch && matchesRegion;
    });
  }, [countries, searchTerm, selectedRegion]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-sans">
      {/* Header */}
      <header className="bg-white dark:bg-gray-700 shadow-md py-6 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Where in the world?</h1>
          <button
            onClick={toggleDarkMode}
            // Using DaisyUI btn class for styling
            className="btn btn-ghost flex items-center space-x-2 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              // Sun icon (Light Mode)
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-yellow-400">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="M4.93 4.93l1.41 1.41"></path>
                <path d="M17.66 17.66l1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="M4.93 19.07l1.41-1.41"></path>
                <path d="M17.66 6.34l1.41-1.41"></path>
              </svg>
            ) : (
              // Moon icon (Dark Mode)
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-700">
                <path d="M12 3a6.36 6.36 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
            <span className="font-semibold text-sm">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 md:px-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full p-3 pl-10 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          {/* DaisyUI Dropdown */}
          <div className={`dropdown ${isDropdownOpen ? 'dropdown-open' : ''} w-full md:w-1/4`}>
            <button
              tabIndex={0} // Important for accessibility with dropdowns
              role="button" // Important for accessibility
              className="btn w-full justify-between bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedRegion || 'Filter by Region'}</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-gray-700 rounded-box w-full mt-2">
                <li>
                  <a onClick={() => handleRegionSelect('')} className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">All Regions</a>
                </li>
                {uniqueRegions.map(region => (
                  <li key={region}>
                    <a onClick={() => handleRegionSelect(region)} className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                      {region}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* The 'container' for country cards */}
        <CountryGrid countries={filteredCountries} />
      </main>
    </div>
  );
};

export default App;
