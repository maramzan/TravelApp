import React from 'react';

import kayak from '../images/png/kayak.png';
import kayakBig from '../images/png/kayak-big.png';
import canyon from '../images/png/canyon-1.png';
import canyonBig from '../images/png/canyon.png';

const discoverData = [
  {
    id: 'discover-1',
    title: 'Kayaking in the Tofino Sea',
    location: 'Canada',
    image: kayak,
    imageBig: kayakBig,
    description:
      "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating. An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
    liked: true,
    price: 50,
    rating: 5,
    duration: 2,
  },
  {
    id: 'discover-2',
    title: 'Hiking the Grand Canyon',
    location: 'USA',
    image: canyon,
    imageBig: canyonBig,
    description:
      'Great day hikes and backpacking routes on the North and South Rim of this century-old national park include easy hikes overlooking the rim and more rugged trekking options that descend into the canyon.',
    liked: true,
    price: 350,
    rating: 4.5,
    duration: 3,
  },
];

export default discoverData;
