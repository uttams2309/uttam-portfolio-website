import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const TravelCard = ({ location, date, description, image, highlights }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
    >
      {image && (
        <div className="w-full h-56 overflow-hidden">
          <img 
            src={image} 
            alt={location} 
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{location}</h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <FaCalendarAlt className="mr-2 text-blue-600" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-start mb-4">
          <FaMapMarkerAlt className="mr-2 mt-1 text-red-600" />
          <p className="text-gray-700">{description}</p>
        </div>
        
        {highlights && highlights.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
            <ul className="list-disc pl-5">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-gray-600">{highlight}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

TravelCard.propTypes = {
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
};

export default TravelCard;