import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SkillCard = ({ icon, title, description, level }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="text-blue-600 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {level && (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
          <p className="text-xs text-gray-500 mt-1 text-right">{level}%</p>
        </div>
      )}
    </motion.div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  level: PropTypes.number,
};

export default SkillCard;