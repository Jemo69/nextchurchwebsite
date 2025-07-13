import React from "react";
import { MapPin, Navigation } from "lucide-react"; // Using Navigation icon

// Define interfaces for props to make the component potentially reusable
interface MapComponentProps {
  address?: string;
  embedUrl?: string;
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  // Default values match the original hardcoded ones
  address = "806 Reisterstown Rd, Pikesville, MD 21208, USA",
  embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.061951118784!2d-76.6979680846347!3d39.38397677950009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a1111a1b4eb%3A0x8b0f1e1e1a1b1b1b!2s806%20Reisterstown%20Rd%2C%20Pikesville%2C%20MD%2021208%2C%20USA!5e0!3m2!1sen!2suk!4v1678886666666!5m2!1sen!2suk",
  className = "", // Allow passing additional classes
}) => {
  // Split address for better display formatting if needed, though not strictly required here
  const addressLine1 = "806 Reisterstown Rd";
  const addressLine2 = "Pikesville, MD 21208, USA";

  // Construct Google Maps directions URL
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

  return (
    // Use theme-consistent background and border colors
    <div
      className={`rounded-lg shadow-lg w-[80%] overflow-hidden border border-background-400 bg-background-300 ${className}`}

    >
      {/* Map Embed - Make it full width of its container */}
      <div className="aspect-video w-full"> {/* Maintain aspect ratio */}
        <iframe
          className="w-full h-full border-0" // Ensure iframe fills the container
          src={embedUrl}
          title={`Map showing location: ${addressLine1}`} // Add accessible title
          allowFullScreen={false}
          loading="lazy" // Lazy load the map
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Address and Directions Button */}
      <div className="p-4 md:p-6"> {/* Add more padding on larger screens */}
        <div className="flex items-start gap-2 mb-2"> {/* Align items start for potentially longer addresses */}
          <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" /> {/* Adjust icon alignment */}
          <div>
            <h2 className="text-lg font-semibold text-text-800">
              {addressLine1}
            </h2>
            <p className="text-sm text-text-700">{addressLine2}</p> {/* Use slightly lighter text color */}
          </div>
        </div>

        {/* Directions Link/Button */}
        <div className="mt-4"> {/* Add margin top for spacing */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            // Apply button styling directly to the anchor tag for simplicity
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200" // Use theme colors and standard button styling
          >
            <Navigation className="w-4 h-4" /> {/* Use imported Navigation icon */}
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
