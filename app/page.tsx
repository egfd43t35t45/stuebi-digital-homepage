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
            <Link href="/https://stuebenhofer-weg.de/iserv/auth/login?_target_path=/iserv/auth/auth?_iserv_app_url%3D%2Fiserv%2F%26client_id%3D5_5p3u4yhl5ckc0ss4go44w44wk88w4s4g0c008s0cws0cowcs4o%26nonce%3D4d72b27d-0f96-4ca6-a6fb-2b0138ff9898%26redirect_uri%3Dhttps%253A%2F%2Fstuebenhofer-weg.de%2Fiserv%2Fapp%2Fauthentication%2Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520uuid%2520iserv%253Asession-id%2520iserv%253Aweb-ui%2520iserv%253A2fa%253Aconfiguration%2520iserv%253Aaccess-groups%26state%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjEifQ.eyJyZWRpcmVjdF91cmkiOiJodHRwczpcL1wvc3R1ZWJlbmhvZmVyLXdlZy5kZVwvaXNlcnZcLyIsIm5vbmNlIjoiNGQ3MmIyN2QtMGY5Ni00Y2E2LWE2ZmItMmIwMTM4ZmY5ODk4IiwiYWRtaW4iOmZhbHNlLCJpc3MiOiJodHRwczpcL1wvc3R1ZWJlbmhvZmVyLXdlZy5kZVwvaXNlcnZcLyIsImV4cCI6MTc0MTY5NDQ1MiwibmJmIjoxNzMzOTE4MzkyLCJpYXQiOjE3MzM5MTg0NTIsInNpZCI6IiJ9.aQpp8bKZ8e-xtCG5h98AMg73Cih9TrS3nSUmfiDCchxGbgV17_TMntesQwvdijm-KCL36Iz7FJYIGY-mXSbykA" className="group hover:shadow-lg hover:scale-105 transition-transform hover:text-red-500 hover:bg-slate-200 hover:border hover:border-black">
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
            <Link href="/automation" className="group hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/shrek.jpg"
                alt="Prozessautomatisierung"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <p className="mt-4 text-lg font-medium text-white group-hover:text-gray-300">
                .
              </p>
            </Link>

            {/* Bild-4 */}
            <Link href="/innovation" className="group hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/Kontakt-icon.webp"
                alt="Innovation"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <p className="mt-4 text-lg font-medium text-white group-hover:text-gray-300">
                .
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Split-Screen Layout */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
        {/* Linker Bereich */}
        <div className="w-full lg:w-1/2 flex justify-start items-center p-8 lg:p-16 h-full bg-gradient-to-r from-blue-700 to-blue-500">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Warum uns wählen?</h2>
            <p className="text-lg sm:text-xl mb-20">
              Weil wir innovative Lösungen bieten, die dein Unternehmen stärken.
            </p>
            <div className="space-x-4">
              <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200">
                Erfahre mehr
              </button>
              <button className="px-6 py-3 bg-transparent text-white border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-500">
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>

        {/* Rechter Bereich */}
        <div className="w-full lg:w-1/2 flex justify-end items-start p-8 lg:p-16 h-full relative bg-gradient-to-r from-cyan-700 to-cyan-500">
          <div className="absolute top-0 right-0 p-4 w-full max-w-md">
            <Image
              src="/success.jpg"
              alt="Erfolg durch Innovation"
              width={450}
              height={300}
              className="rounded-lg"
            />
            <p className="text-white text-center mt-4">
              Erfolg ist planbar – mit den richtigen digitalen Tools.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
