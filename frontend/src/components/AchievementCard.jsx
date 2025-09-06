import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';

const AchievementCard = ({ title, organization, date, description, type }) => {
  const getIcon = () => {
    switch (type.toLowerCase()) {
      case 'award':
        return <FaTrophy className="text-yellow-500 text-2xl" />;
      case 'certification':
        return <FaCertificate className="text-blue-500 text-2xl" />;
      default:
        return <FaMedal className="text-gray-500 text-2xl" />;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start">
        <div className="mr-4">
          {getIcon()}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 font-medium">{organization}</p>
          <p className="text-sm text-gray-500 mb-3">{date}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

AchievementCard.propTypes = {
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default AchievementCard;