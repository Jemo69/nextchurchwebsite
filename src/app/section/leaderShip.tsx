import React from 'react';
import InfoCard from '../components/infoCard'; // Assuming InfoCard is in this path relative to leaderShip.tsx

// Define the data for the info cards
// TODO: Replace placeholder data with actual leadership information and image paths

const leadershipData = [
    //! wrong info
  { id: 1, image: '/path/to/image1.jpg', title: 'Senior Pastor', name: 'Pastor John Doe' },
  { id: 2, image: '/path/to/image2.jpg', title: 'Associate Pastor', name: 'Pastor Jane Smith' },
  { id: 3, image: '/path/to/image3.jpg', title: 'Elder', name: 'Elder Robert Johnson' },
  { id: 4, image: '/path/to/image4.jpg', title: 'Deaconess', name: 'Deaconess Emily White' },
  { id: 5, image: '/path/to/image5.jpg', title: 'Worship Leader', name: 'Michael Brown' },
  { id: 6, image: '/path/to/image6.jpg', title: 'Youth Coordinator', name: 'Sarah Davis' },
];

const LeadershipSection: React.FC = () => {
    console.log('to be done in leaderShip')
  return (
    <section className="py-12 bg-background-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-700 mb-8">
          Meet Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:gap-6 lg:gap-25 lg:grid-cols-3 gap-8 justify-items-center lg:portrait:grid-cols-2 ">
          {leadershipData.map((member) => (
            <InfoCard
              key={member.id}
              image={member.image || ''} // Use empty string if image path is not available yet
              title={member.title}
              name={member.name}
              className="max-w-sm" // Add max-width or other constraints if needed
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
