// pages/team-projekte.js

import Link from 'next/link';
import Image from 'next/image';

export default function Projekte() {
  return (
    <main className="min-h-screen p-12 bg-gradient-to-r from-green-400 to-blue-500">
      {/* Titel oben */}
      <div className="text-center w-full mb-16">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight">
          Unsere Projekte
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white">
          .
        </p>
      </div>

      {/* Projekte Sektion */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-center text-3xl font-semibold mb-12">
            Unsere Projekte im Detail
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Projekt-1 */}
            <Link href="/projekt-1" className="group hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/projekt-1.jpg"
                alt="Projekt 1"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <p className="mt-4 text-lg font-medium text-white group-hover:text-gray-300">
                Emir: 
              </p>
            </Link>

            {/* Projekt-2 */}
            <Link href="/projekt-2" className="group hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/projekt-2.jpg"
                alt="Projekt 2"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <p className="mt-4 text-lg font-medium text-white group-hover:text-gray-300">
                Abdu: 
              </p>
            </Link>

            {/* Projekt-3 */}
            <Link href="/projekt-3" className="group hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/projekt-3.jpg"
                alt="Projekt 3"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <p className="mt-4 text-lg font-medium text-white group-hover:text-gray-300">
                Besar: 
              </p>
            </Link>

            {/* Projekt-4 */}
            <Link href="/projekt-4" className="group hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/projekt-4.jpg"
                alt="Projekt 4"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <p className="mt-4 text-lg font-medium text-white group-hover:text-gray-300">
                Projekt 4: 
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
