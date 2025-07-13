// Removed unused Play import
"use client";

const RCCGPraiseHouse = () => {
  return (
    <main className="bg-background-50 text-accent-900 flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      {/* Left Section: Welcome and Service Times */}
      <section className="md:w-1/2 space-y-6 md:pr-12" aria-labelledby="welcome-heading">
        <h1 id="welcome-heading" className="text-4xl font-bold text-secondary-500">Welcome to RCCG The Praise House</h1>
        <div className="space-y-2">
          <h2 className="text-sm md:text-2xl font-semibold">Our Service Times</h2>
          <nav aria-label="Service Schedule">
            <ul className="text-sm md:text-2xl list-disc list-inside space-y-1">
              <li>Every Sunday at 9:00 am - Worship service (onsite or online via Zoom)</li>
              <li>Every Wednesday at 9:00 am - Word study (online via Zoom)</li>
              <li>Every Thursday at 9:00 am - Word study (online via Zoom)</li>
            </ul>
          </nav>
        </div>
        <address className="text-accent-500 font-bold" aria-label="Church Location">
          Our location: 806 Reisterstown Rd, Pikesville, MD 21208, USA
        </address>
      </section>

      {/* Right Section: Latest Sermon Video */}
      <section className="w-80 md:w-1/3 flex flex-col items-center justify-center mt-8 md:mt-0" aria-labelledby="sermon-heading">
        <h2 id="sermon-heading" className='text-4xl font-bold py-6 text-primary-500'>Our Latest Sermon</h2>
        <div className="bg-gray-700 w-full max-w-md h-64 flex items-center justify-center rounded-lg relative overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/CTOopBZUEJs?si=L2dy8u-4Zz1Cts9x"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Latest Sermon from RCCG The Praise House Baltimore"
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      {/* Add Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Church", "LocalBusiness"],
          "name": "RCCG The Praise House Baltimore",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "806 Reisterstown Rd",
            "addressLocality": "Pikesville",
            "addressRegion": "MD",
            "postalCode": "21208",
            "addressCountry": "USA"
          },
          "description": "A vibrant Christian community dedicated to worship, fellowship, and spiritual growth in Baltimore.",
          "openingHours": [
            "Su 09:00-11:00",
            "We 09:00-10:00",
            "Th 09:00-10:00"
          ],
          "url": location.origin
        })}
      </script>
    </main>
  );
};

export default RCCGPraiseHouse;
