import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 bg-h-14 bg-gradient-to-r from-cyan-500 to-blue-500 ">
      {/* Titel oben */}
      <div className="text-center w-full mb-16">
        <h1 className="text-6xl sm:text-10xl md:text-6x3 font-extrabold text-white tracking-tight">
          STÜBI DIGITAL
        </h1>
        <p className="mt-10000 text-lg sm:text-xl text-white">
          Dein Partner für digitale Lösungen, die deinem Unternehmen zum Erfolg
          verhelfen.
        </p>
      </div>

      <section className="bg-h-14 bg-gradient-to-r from-cyan-500 to-blue-500 py-8 px-4">
        <div className="max-w-6x6 mx-auto">
          <h2 className="text-white text-center text-2xl font-medium mb-12">
            Trusted by the world&apos;s most innovative teams
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center ">
            <Link
              href="https://stuebenhofer-weg.de/iserv/auth/login?_target_path=/iserv/auth/auth?_iserv_app_url%3D%2Fiserv%2F%26client_id%3D5_5p3u4yhl5ckc0ss4go44w44wk88w4s4g0c008s0cws0cowcs4o%26nonce%3D7073fc1a-69e1-42fe-9bca-194c776c3686%26redirect_uri%3Dhttps%253A%2F%2Fstuebenhofer-weg.de%2Fiserv%2Fapp%2Fauthentication%2Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520uuid%2520iserv%253Asession-id%2520iserv%253Aweb-ui%2520iserv%253A2fa%253Aconfiguration%2520iserv%253Aaccess-groups%26state%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjEifQ.eyJyZWRpcmVjdF91cmkiOiJodHRwczpcL1wvc3R1ZWJlbmhvZmVyLXdlZy5kZVwvaXNlcnZcLyIsIm5vbmNlIjoiNzA3M2ZjMWEtNjllMS00MmZlLTliY2EtMTk0Yzc3NmMzNjg2IiwiYWRtaW4iOmZhbHNlLCJpc3MiOiJodHRwczpcL1wvc3R1ZWJlbmhvZmVyLXdlZy5kZVwvaXNlcnZcLyIsImV4cCI6MTc0MTY4MDY5MiwibmJmIjoxNzMzOTA0NjMyLCJpYXQiOjE3MzM5MDQ2OTIsInNpZCI6IiJ9.Yef5yeI_Jp-bwrggKskNKCTdb4W-iC5hEracirwv_Yxj7K_MwpA05kK9ifpbMf606nMbTyu9xLPayTwpEFbnMw"
              className="hover:shadow-lg hover:border hover:border-black"
            >
              <Image
                src="/shrek.jpg"
                alt="Transistor"
                width={450}
                height={440}
                className="h-16 w-auto brightness-0 invert"
              />
              <p>Name fuer den Link</p>
            </Link>

            <Link
              href="/team"
              className="hover:shadow-lg hover:border hover:border-black"
            >
              <Image
                src="/shrek.jpg"
                alt="Reform"
                width={450}
                height={440}
                className="h-16 w-auto brightness-0 invert"
              />
              <p> Name fuer den Link</p>
            </Link>

            <Link
              href="/"
              className="hover:shadow-lg hover:border hover:border-black"
            >
              <Image
                src="/shrek.jpg"
                alt="Tuple"
                width={150}
                height={40}
                className="h-16 w-auto brightness-0 invert"
              />
              <p>Name fuer den Link</p>
            </Link>

            <Link
              href="/"
              className="hover:shadow-lg hover:border hover:border-black"
            >
              <Image
                src="/shrek.jpg"
                alt="SavvyCal"
                width={150}
                height={40}
                className="h-16 w-auto brightness-0 invert"
              />
              <p>Namen fuer den Link</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Split-Screen Layout */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
        {/* Linker Bereich */}
        <div className="w-full lg:w-1/2 flex justify-start items-center p-8 lg:p-16 h-full">
          {' '}
          {/* h-full hinzugefügt */}
          <div className="text-center text-white">
            <h2 className="text-6xl sm:text-3x3 lg:text-4xl font-bold mb-4"></h2>
            <p className="text-lg sm:text-xl mb-20"></p>
            {/* Hier könnte noch ein weiteres Bild oder CTA eingebaut werden */}

            <div className="space-x-9">
              <button></button>
              <button></button>
            </div>
          </div>
        </div>

        {/* Rechter Bereich */}
        <div className="w-full lg:w-1/2 flex justify-end items-start p-8 lg:p-16 relative h-full">
          {' '}
          {/* h-full hinzugefügt */}
          {/* Bild oben rechts */}
          <div className="absolute top-0 right-0 p-4 w-3/6">
            {/* Link zu einer externen Seite */}

            {/* Link zu einer internen Seite */}
          </div>
        </div>
      </div>
    </main>
  );
}
