import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* Titel oben */}
      <div className="text-center w-full mb-16">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight">
          STÜBI DIGITAL
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white">
          Dein Partner für digitale Lösungen, die dein Unternehmen zum Erfolg führen.
        </p>
      </div>

      {/* Bilder Sektion */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-center text-3xl font-semibold mb-12">
            
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Bild-1 */}
            <Link href="/https://stuebi-hamburg.de/stadtteilschule/" className="group hover:shadow-lg hover:scale-105 transition-transform hover:text-red-500 hover:bg-slate-200">
              <Image
                src="/shrek.jpg"
                alt="Digitale Strategie"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <p className="mt-4 text-lg font-medium text-white group-hover:text-gray-300">
                Iserv
              </p>
            </Link>

            {/* Bild-2 */}
            <Link href="/team" className="group hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/shrek.jpg"
                alt="Teamwork"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <p className="mt-4 text-lg font-medium text-white group-hover:text-gray-300">
                Unser Team
              </p>
            </Link>

            {/* Bild-3 */}
            <Link href="/teem" className="group hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/shrek.jpg"
                alt="Prozessautomatisierung"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <p className="mt-4 text-lg font-medium text-white group-hover:text-gray-300">
                Unsere Projekte
              </p>
            </Link>

            {/* Bild-4 */}
            <a href="mailto:leo.morice.sari@stuebenhofer-weg.de" className="group hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/Kontakt-icon.webp"
                alt="Innovation"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <p className="mt-4 text-lg font-medium text-white group-hover:text-gray-300">
                Kontakt aufnehmen
              </p>
            </a>
          </div>
        </div>
      </section>

         {/* Split-Screen Layout */}
<div className="flex flex-col lg:flex-row h-auto lg:h-screen">
  {/* Linker Bereich */}
  <div className="w-full lg:w-1/2 flex justify-start items-center p-8 lg:p-16 h-full bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Warum uns wählen?</h2>
      <p className="text-lg sm:text-xl mb-8">
        Weil wir innovative Lösungen bieten, die dein Unternehmen stärken.
      </p>
      <div className="space-x-4">
        <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
          Erfahre mehr
        </button>
      </div>
    </div>
  </div>

  {/* Rechter Bereich */}
  <div className="w-full lg:w-1/2 flex justify-end items-start p-8 lg:p-16 h-full relative bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="absolute top-0 right-0 p-4 w-full max-w-md">
      
    </div>
  </div>
 

</div>
</main>
  );
}
