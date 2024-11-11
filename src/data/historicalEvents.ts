import type { HistoricalEvent } from '../types/Event';

export const historicalEvents: HistoricalEvent[] = [
  {
    id: '1',
    title: 'World War II Begins',
    year: 1939,
    description: 'Germany invades Poland, marking the beginning of World War II',
    location: { lat: 52.2297, lng: 21.0122 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/World_War_II'
  },
  {
    id: '2',
    title: 'World War II Ends',
    year: 1945,
    description: 'Japan surrenders, marking the end of World War II',
    location: { lat: 35.6762, lng: 139.6503 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Surrender_of_Japan'
  },
  {
    id: '3',
    title: 'First Moon Landing',
    year: 1969,
    description: 'Apollo 11 mission successfully landed humans on the Moon',
    location: { lat: 0.67408, lng: 23.47297 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Apollo_11'
  },
  {
    id: '4',
    title: 'Fall of the Berlin Wall',
    year: 1989,
    description: 'The Berlin Wall falls, symbolizing the end of the Cold War',
    location: { lat: 52.5163, lng: 13.3777 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall'
  },
  {
    id: '5',
    title: 'Cuban Missile Crisis',
    year: 1962,
    description: 'Confrontation between US and Soviet Union reaches peak',
    location: { lat: 23.1136, lng: -82.3666 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cuban_Missile_Crisis'
  },
  {
    id: '6',
    title: 'Chernobyl Disaster',
    year: 1986,
    description: 'Nuclear accident at the Chernobyl Nuclear Power Plant',
    location: { lat: 51.3892, lng: 30.0992 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Chernobyl_disaster'
  },
  {
    id: '7',
    title: 'First Atomic Bomb',
    year: 1945,
    description: 'Trinity Test - First detonation of a nuclear weapon',
    location: { lat: 33.6772, lng: -106.4754 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Trinity_(nuclear_test)'
  },
  {
    id: '8',
    title: 'Discovery of Tutankhamun\'s Tomb',
    year: 1922,
    description: 'Howard Carter discovers the tomb of Pharaoh Tutankhamun',
    location: { lat: 25.7402, lng: 32.6014 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Tutankhamun'
  },
  {
    id: '9',
    title: 'Wright Brothers First Flight',
    year: 1903,
    description: 'First successful powered aircraft flight at Kitty Hawk',
    location: { lat: 36.0146, lng: -75.6680 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Wright_brothers'
  },
  {
    id: '10',
    title: 'Great Depression Begins',
    year: 1929,
    description: 'Stock market crash leads to worldwide economic depression',
    location: { lat: 40.7061, lng: -74.0090 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Great_Depression'
  }
];