import Image from 'next/image';
import Link from 'next/link';

import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';

// Sample sponsor data (replace with your actual sponsors)
const sponsors = [
  {
    name: 'Leonel',
    logo: '/shrek.jpg',
    url: 'https://www.roblox.com/de',
  },
  {
    name: 'Abdu',
    logo: '/shrek.jpg',
    url: 'https://techgiant.com',
  },
  {
    name: 'Zainuddin',
    logo: '/shrek.jpg',
    url: 'https://innovate.co',
  },
  {
    name: 'Abu',
    logo: '/shrek.jpg',
    url: 'https://futuretech.com',
  },
  {
    name: 'Leo',
    logo: '/shrek.jpg',
    url: 'https://futuretech.com',
  },
  {
    name: 'Emir',
    logo: '/shrek.jpg',
    url: 'https://winterfest-nbws--3000--88b6dd69.local-corp.webcontainer.io/',
  },
  {
    name: 'FutureTech',
    logo: '/shrek.jpg',
    url: 'https://futuretech.com',
  },
  {
    name: 'FutureTech',
    logo: '/shrek.jpg',
    url: 'https://futuretech.com',
  },
];

export default function Component() {
  return (
    <div className="w-full bg-gray-100 py-8 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">UNSER TEAM</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsors.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-60 h-60 relative bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  sizes="(max-width: 128px) 100vw, 128px"
                  className="object-contain p-2"
                />
              </div>
              <p className="mt-2 text-sm text-center text-gray-600 group-hover:text-gray-900">
                {sponsor.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
