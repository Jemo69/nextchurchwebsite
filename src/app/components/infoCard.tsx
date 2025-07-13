import React from 'react';

interface InfoCardProps {
  image: string;
  title: string;
  name: string;
  className?: string; // Optional class name for additional styling
}

const InfoCard: React.FC<InfoCardProps> = ({ image, title, name, className }) => {
  const combinedClassName = `flex items-center bg-background-300 mx-5 rounded-lg shadow-md overflow-hidden w-90 h-40 ${className || ''}`;

  return (
    <div className={combinedClassName}>
      {/* Image Placeholder */}
      <div className="w-1/3  bg-gray-900 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-auto object-cover" />
        ) : (
          <span className="text-gray-500">Image Placeholder</span>
        )}
      </div>

      {/* Title and Name */}
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-semibold text-accent-600">{title}</h2>
        <p className="text-accent-700">{name}</p>
      </div>
    </div>
  );
};

export default InfoCard;
