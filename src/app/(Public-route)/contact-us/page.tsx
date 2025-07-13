import Hero from "@/app/section/aboutus/hero";
import PrayerForm  from "@/app/section/prayerFormSection";
import MapComponent from "@/app/components/map";
import GetInTouch from "@/app/section/aboutus/getInTouch";

function AboutUs() {
  return (
    // Use a fragment or a main tag if appropriate for the overall structure
    <>
      {/* Hero Section - Takes full width */}
      <Hero />

      {/* Main content container */}
      <div className="w-full bg-background-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Get In Touch Section */}
        <div className="mb-12 md:mb-16">
          <GetInTouch />
        </div>

        {/* Contact Form and Map Section */}
        {/* Flex container: stacks vertically on small screens, row on medium and up */}
        <div className="flex flex-col w-screen md:flex-row gap-8 lg:gap-12 items-start">
          {/* Contact Form Container */}
          {/* Takes full width on small screens, half width on medium and up */}
          <div className="w-full md:w-1/2">
            <PrayerForm for_prayer={false} />
          </div>

          {/* Map Container */}
          {/* Takes full width on small screens, half width on medium and up */}
          {/* Added flex and justify-center to center the MapComponent if it has a fixed width */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            {/* MapComponent might have its own width styling (e.g., w-[80%]). */}
            {/* This container ensures it's positioned correctly within the layout. */}
            {/* Pass className="w-full" to MapComponent if it supports overriding width */}
            <MapComponent className="w-full max-w-xl" />{" "}
            {/* Example: Ensure map takes available space up to a max width */}
          </div>
        </div>
      </div>

      {/* Footer Section - Assuming it handles its own styling/layout */}
      {/* Consider placing Footer outside the main content container if it needs full width */}
    </>
  );
}
export default AboutUs;