import SimpleButton from "../components/button";
const RCCGPraiseHouseWelcome = () => {
  return (
    <div className="bg-background-50 text-text-950 flex flex-col md:flex-row items-center justify-center p-4">
      {/* Left Section: Image */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://18nlg60l9z.ufs.sh/f/XtuuqJbb4M5FIFCMPZxF5bLGwA6hnutYjlpzDBfPoMOXJ7Qv" // Replace with the actual path to your image
          alt="Pastor and Wife"
          className="rounded-lg shadow-lg  max-w-full h-auto" // Added max-w-full and h-auto for responsiveness
          style={{ maxWidth: "400px" }} //Added for consistency
        />
      </div>

      {/* Right Section: Welcome Text */}
      <div className="md:w-1/2 space-y-4 md:pl-12">
        <h2 className="text-3xl font-semibold text-secondary-500">WELCOME</h2>
        <p className="text-text-500 text-xl">
          Greetings in the name of our Lord and Savior Jesus Christ! My Wife and
          I are honored that you have taken the time to visit our website to
          learn more about us. We want you to extend this visit by coming along
          and becoming part of our church family. We'd love for you to join us
          this Sunday. God bless you!
        </p>

        <p className="font-semibold text-primary-500">
          - Pastor Oladiipo Omopariola
        </p>
        <a href='/contact'>
        <SimpleButton inform="Get in contact "/>
        </a>
        
      </div>
    </div>
  );
};

export default RCCGPraiseHouseWelcome;
