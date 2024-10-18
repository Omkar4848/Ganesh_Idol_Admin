import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('Hero.jpeg')" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to the Ganesh Museum</h1>
            <p className="mt-4 text-lg">
              Discover the Rich Culture and Heritage of Lord Ganesh
            </p>
            <Link
              to={"/"}
              className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white rounded-lg"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Exhibits Section */}
      <section className="py-20 bg-gray-100" id="exhibits">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Featured Exhibits</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Exhibit 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">The Origins of Ganesh</h3>
              <p className="mt-2 text-gray-600">
                Ganesh, created by Goddess Parvati and later given an elephant
                head by Lord Shiva, symbolizes wisdom and strength. Revered as
                the ‘Remover of Obstacles,’ he is worshipped before new
                beginnings. His influence extends beyond India, with cultural
                adaptations in Thailand, Nepal, and more.
              </p>
            </div>
            {/* Exhibit 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">
                Artistic Representations of Ganesh
              </h3>
              <p className="mt-2 text-gray-600">
                Ganesh is depicted in various forms, from traditional Indian
                statues to contemporary art. Each piece reflects unique
                symbolism, such as his elephant head for wisdom and his multiple
                arms for power. His imagery varies globally, with styles
                influenced by local cultures in Nepal, Thailand, and beyond.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">
                Festivals Celebrating Ganesh
              </h3>
              <p className="mt-2 text-gray-600">
                The grand festival of Ganesh Chaturthi celebrates Ganesh’s birth
                with vibrant processions, music, and dancing. Devotees create
                elaborate clay idols of Ganesh, which are immersed in water to
                symbolize renewal. Celebrations span India and other regions,
                showcasing diverse cultural traditions and reverence for Ganesh.
              </p>
            </div>
          </div>
          <Link
            href="#all-exhibits"
            className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white rounded-lg"
          >
            View All Exhibits
          </Link>
        </div>
      </section>

      {/* Visitor Information Section */}
      <section className="py-20 bg-white" id="visit">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Visitor Information</h2>
          <p className="mt-4 text-gray-700">
            Hours of Operation: Open daily from 10 AM to 6 PM
          </p>
          <p className="mt-2 text-gray-700">
            Admission Fees: Adults: $10 | Children under 12: Free
          </p>
          <p className="mt-2 text-gray-700">
            Location: 123 Ganesh Lane, City, State, ZIP
          </p>
          <Link
            href="#plan-your-visit"
            className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white rounded-lg"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-100" id="events">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Upcoming Events</h2>
          <div className="mt-10">
            <h3 className="text-xl font-semibold">
              Ganesh Chaturthi Celebration
            </h3>
            <p>Date and Details</p>
            <h3 className="text-xl font-semibold mt-4">
              Art Workshop: Crafting Ganesh Statues
            </h3>
            <p>Date and Details</p>
            <Link
              href="#all-events"
              className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white rounded-lg"
            >
              See All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Testimonials</h2>
          <div className="mt-10">
            <p className="italic">
              “A beautiful tribute to Lord Ganesh! The exhibits are
              enlightening.” 
            </p>
            <p className="italic mt-4">
              “A must-visit for anyone interested in culture and art!” 
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gray-100" id="newsletter">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Stay Updated!</h2>
          <p className="mt-4">
            Subscribe to our newsletter for the latest news and events.
          </p>
          <div className="mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg border border-gray-300"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
