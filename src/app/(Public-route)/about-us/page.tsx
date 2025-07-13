import SimpleButton from '../../components/button';
import LeadershipSection from '@/app/section/leaderShip';
// Placeholder image URL (replace with actual image URL if available)
const placeholderImageUrl = "https://placehold.co/400x300/EEE/31343C?text=Placeholder";

// Dummy data for leadership (replace with your actual data)


const WhoWeAreSection = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-8 text-center">Who We Are</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-gray-200 text-lg mb-6">
                            We are a vibrant and welcoming community dedicated to spreading the
                            message of faith, hope, and love. Our mission is to create a
                            transformative experience for everyone who walks through our doors.
                            We believe in fostering spiritual growth, building strong
                            relationships, and serving our community with compassion.
                        </p>
                        <p className="text-gray-200 text-lg mb-6">
                            At RCCG the praise house , you'll find a diverse group of people from all
                            walks of life, united by a common desire to connect with God and
                            make a positive impact on the world. We offer a variety of
                            programs and ministries for all ages, designed to help you grow in
                            your faith journey.
                        </p>
                        <SimpleButton inform="Learn More About Us"/> 
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Placeholder images - replace with actual images */}
                        <img
                            src={placeholderImageUrl}
                            alt="Church Gathering 1"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                        <img
                            src={placeholderImageUrl}
                            alt="Church Gathering 2"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                        <img
                            src={placeholderImageUrl}
                            alt="Church Event 1"
                            className="w-full h-auto rounded-lg object-cover col-span-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const WelcomeSection = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    We'd love for you to join us this Sunday!
                </h2>
                <p className="text-lg mb-8">
                    Experience the warmth of our community and the power of faith.  All are welcome!
                </p>
            </div>
        </section>
    );
};

const ConcactUs = () => {
    return (
        <div className="bg-background-500">
            <WhoWeAreSection />
            <LeadershipSection/>
            <WelcomeSection />
            {/* Add more sections as needed (e.g., events, contact) */}
        </div>
    );
};

export default ConcactUs;
