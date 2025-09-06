import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaDatabase } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import { placeholderDevelopmentData } from '../data/placeholder';

const Development = ({ userData }) => {
  const [development, setDevelopment] = useState(placeholderDevelopmentData);
  
  useEffect(() => {
    if (userData?.development) {
      setDevelopment(userData.development);
    }
  }, [userData]);

  // Icons for different development areas
  const getIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'frontend':
        return <FaCode className="text-2xl" />;
      case 'mobile':
        return <FaMobileAlt className="text-2xl" />;
      case 'backend':
        return <FaServer className="text-2xl" />;
      case 'database':
        return <FaDatabase className="text-2xl" />;
      default:
        return <FaCode className="text-2xl" />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-900 text-white">
        <SectionContainer className="py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Development
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-indigo-100 max-w-3xl mx-auto">
              {development.introduction || "Showcasing my software development projects, skills, and experience in building robust applications."}
            </p>
          </motion.div>
        </SectionContainer>
      </div>

      {/* Development Skills */}
      <SectionContainer>
        <SectionHeader 
          title="Development Skills" 
          subtitle="My technical expertise in various development areas"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {development.skills && development.skills.map((skill, index) => (
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
            title="Development Projects" 
            subtitle="Applications and systems I've built or contributed to"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {development.projects && development.projects.map((project, index) => (
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

      {/* Development Process */}
      <SectionContainer>
        <SectionHeader 
          title="My Development Process" 
          subtitle="How I approach software development from concept to deployment"
        />
        
        <div className="mt-12">
          <ol className="relative border-l border-gray-300">
            {development.process && development.process.map((step, index) => (
              <motion.li 
                key={index}
                className="mb-10 ml-6" 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-white font-bold">{index + 1}</span>
                </span>
                <h3 className="flex items-center mb-2 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                {step.tools && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </SectionContainer>
    </div>
  );
};

Development.propTypes = {
  userData: PropTypes.object,
};

export default Development;