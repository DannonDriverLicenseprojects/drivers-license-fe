import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Accredited Driving Schools
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {' '}
          for learners
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Begin your journey to becoming a licensed driver with our user-friendly
        driver's license portal. Navigate the process smoothly with our
        step-by-step guidance, from learning to drive at accredited driving
        schools to passing your driving test. Start your application today and
        hit the road with confidence!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md"
        >
          Enroll today
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Check Accredited Centers
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
