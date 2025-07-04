// src/data/mockCountries.ts

import Germanyflag from '../assets/engin-akyurt-qQomkOCpkes-unsplash.jpg'; 
import Americaflag from '../assets/Screenshot 2025-07-04 110959.png';
import Brazilflag from '../assets/Screenshot 2025-07-04 111157.png';
import Icelandflag from '../assets/engin-akyurt-4SAzqjeza24-unsplash.jpg';
import Afghanistanflag from '../assets/Screenshot 2025-07-04 111445.png';
import Aalandflag from '../assets/Screenshot 2025-07-04 111603.png';
import Albaniaflag from '../assets/Screenshot 2025-07-04 111722.png';
import Algeraflag from '../assets/Screenshot 2025-07-04 111809.png';




import type { Country } from '../types';


export const mockCountries: Country[] = [
  {
    name: { common: "Germany" },
    population: 81770900,
    region: "Europe",
    capital: ["Berlin"],
    flags: {
      png: Germanyflag,
      alt: "Flag of Germany"
    }
  },
  {
    name: { common: "United States of America" },
    population: 323947000,
    region: "Americas",
    capital: ["Washington, D.C."],
    flags: {
      png: Americaflag,
      alt: "Flag of United States"
    }
  },
  {
    name: { common: "Brazil" },
    population: 206135893,
    region: "Americas",
    capital: ["Brasília"],
    flags: {
      png: Brazilflag,
      alt: "Flag of Brazil"
    }
  },
  {
    name: { common: "Iceland" },
    population: 334300,
    region: "Europe",
    capital: ["Reykjavík"],
    flags: {
      png: Icelandflag,
      alt: "Flag of Iceland"
    }
  },
  {
    name: { common: "Afghanistan" },
    population: 27657145,
    region: "Asia",
    capital: ["Kabul"],
    flags: {
      png: Afghanistanflag,
      alt: "Flag of Afghanistan"
    }
  },
  {
    name: { common: "Åland Islands" },
    population: 29458,
    region: "Europe",
    capital: ["Mariehamn"],
    flags: {
      png: Aalandflag,
      alt: "Flag of Åland Islands"
    }
  },
  {
    name: { common: "Albania" },
    population: 2838244,
    region: "Europe",
    capital: ["Tirana"],
    flags: {
      png: Albaniaflag,
      alt: "Flag of Albania"
    }
  },
  {
    name: { common: "Algeria" },
    population: 40400000,
    region: "Africa",
    capital: ["Algiers"],
    flags: {
      png: Algeraflag,
      alt: "Flag of Algeria"
    }
  },
];
