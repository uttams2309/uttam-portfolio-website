import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGlobeAmericas, FaPlane, FaCamera } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import TravelCard from '../components/TravelCard';
import { placeholderTravellingData } from '../data/placeholder';

const Travelling = ({ userData }) => {
  const [travelling, setTravelling] = useState(placeholderTravellingData);
  
  useEffect(() => {
    if (userData?.travelling) {
      setTravelling(userData.travelling);
    }
  }, [userData]);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <SectionContainer className="py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Travelling Adventures
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white max-w-3xl mx-auto">
              {travelling.introduction || "Exploring the world, one destination at a time. Here's a glimpse of my travel experiences."}
            </p>
          </motion.div>
        </SectionContainer>
      </div>

      {/* Travel Map or Stats */}
      <SectionContainer>
        <SectionHeader 
          title="My Travel Journey" 
          subtitle="Countries visited and experiences gained"
        />
        
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <FaGlobeAmericas className="mx-auto text-4xl text-blue-500 mb-2" />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {travelling.countriesVisited?.length || '10+'}
              </h3>
              <p className="text-gray-600">Countries Visited</p>
            </div>
            <div>
              <FaPlane className="mx-auto text-4xl text-blue-500 mb-2" />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {travelling.totalTrips || '25+'}
              </h3>
              <p className="text-gray-600">Total Trips</p>
            </div>
            <div>
              <FaCamera className="mx-auto text-4xl text-blue-500 mb-2" />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {travelling.favoriteDestinations?.length || '5+'}
              </h3>
              <p className="text-gray-600">Favorite Destinations</p>
            </div>
          </div>

          {/* Countries List */}
          {travelling.countriesVisited && travelling.countriesVisited.length > 0 && (
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-3 text-center">Countries Visited</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {travelling.countriesVisited.map((country, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </SectionContainer>

      {/* Featured Trips */}
      <div className="bg-gray-50">
        <SectionContainer>
          <SectionHeader 
            title="Featured Adventures" 
            subtitle="Memorable trips and experiences from around the world"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {travelling.trips && travelling.trips.map((trip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TravelCard
                  location={trip.location}
                  date={trip.date}
                  description={trip.description}
                  image={trip.image}
                  highlights={trip.highlights}
                />
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </div>

      {/* Travel Philosophy */}
      <SectionContainer>
        <SectionHeader 
          title="Travel Philosophy" 
          subtitle="What travelling means to me and how it shapes my perspective"
        />
        
        <div className="mt-10">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  {travelling.philosophyImage ? (
                    <img 
                      src={travelling.philosophyImage} 
                      alt="Travel Philosophy" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-6xl text-blue-500" />
                    </div>
                  )}
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why I Travel</h3>
                <div className="prose text-gray-600 max-w-none">
                  {travelling.philosophy ? (
                    travelling.philosophy.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))
                  ) : (
                    <>
                      <p className="mb-4">
                        Traveling has always been more than just visiting new places—it's about immersing myself in different cultures, gaining new perspectives, and challenging my comfort zone.
                      </p>
                      <p className="mb-4">
                        Every journey teaches me something valuable, whether it's about the world, other people, or myself. I believe that these experiences have shaped who I am today and continue to influence my personal and professional growth.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

Travelling.propTypes = {
  userData: PropTypes.object,
};

export default Travelling;