import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaChartLine, FaProjectDiagram } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import { placeholderMachineLearningData } from '../data/placeholder';

const MachineLearning = ({ userData }) => {
  const [ml, setMl] = useState(placeholderMachineLearningData);
  
  useEffect(() => {
    if (userData?.machineLearning) {
      setMl(userData.machineLearning);
    }
  }, [userData]);

  // Icons for different ML areas
  const getIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'ai':
        return <FaRobot className="text-2xl" />;
      case 'ml':
        return <FaBrain className="text-2xl" />;
      case 'data science':
        return <FaChartLine className="text-2xl" />;
      case 'deep learning':
        return <FaProjectDiagram className="text-2xl" />;
      default:
        return <FaBrain className="text-2xl" />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white">
        <SectionContainer className="py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Machine Learning & AI
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-purple-100 max-w-3xl mx-auto">
              {ml.introduction || "Exploring the cutting-edge of artificial intelligence and machine learning through research and projects."}
            </p>
          </motion.div>
        </SectionContainer>
      </div>

      {/* ML & AI Skills */}
      <SectionContainer>
        <SectionHeader 
          title="ML & AI Expertise" 
          subtitle="My technical skills in machine learning and artificial intelligence"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {ml.skills && ml.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SkillCard
                icon={getIcon(skill.category)}
                title={skill.name}
                description={skill.description}
                level={skill.level}
              />
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Projects Section */}
      <div className="bg-gray-50">
        <SectionContainer>
          <SectionHeader 
            title="ML & AI Projects" 
            subtitle="Applications and research work in machine learning and artificial intelligence"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {ml.projects && ml.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                />
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </div>

      {/* Research Areas */}
      <SectionContainer>
        <SectionHeader 
          title="Research Areas" 
          subtitle="My focus areas in machine learning and AI research"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {ml.researchAreas && ml.researchAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              
              {area.keyPoints && area.keyPoints.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Explorations:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {area.keyPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-gray-600">{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Publications or Articles */}
      {ml.publications && ml.publications.length > 0 && (
        <div className="bg-gray-50">
          <SectionContainer>
            <SectionHeader 
              title="Publications & Articles" 
              subtitle="My contributions to the field of machine learning and AI"
            />
            
            <div className="mt-12 space-y-6">
              {ml.publications.map((pub, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{pub.title}</h3>
                  <p className="text-gray-600 mb-3">{pub.authors}</p>
                  <p className="text-gray-500 mb-3">{pub.venue} • {pub.year}</p>
                  <p className="text-gray-700 mb-4">{pub.abstract}</p>
                  
                  {pub.link && (
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Read Publication
                      <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </div>
      )}
    </div>
  );
};

MachineLearning.propTypes = {
  userData: PropTypes.object,
};

export default MachineLearning;