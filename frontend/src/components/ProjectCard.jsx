import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, technologies, githubLink, demoLink }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaGithub className="mr-1" /> Code
            </a>
          )}
          
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaExternalLinkAlt className="mr-1" /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string,
  demoLink: PropTypes.string,
};

export default ProjectCard;