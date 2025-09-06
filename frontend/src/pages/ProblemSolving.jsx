import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaTrophy } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { placeholderProblemSolvingData } from '../data/placeholder';

const ProblemSolving = ({ userData }) => {
  const [problemSolving, setProblemSolving] = useState(placeholderProblemSolvingData);
  
  useEffect(() => {
    if (userData?.problemSolving) {
      setProblemSolving(userData.problemSolving);
    }
  }, [userData]);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-teal-900 text-white">
        <SectionContainer className="py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Problem Solving
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100 max-w-3xl mx-auto">
              {problemSolving.introduction || "Showcasing my approach to tackling complex problems through algorithms, logical thinking, and creative solutions."}
            </p>
          </motion.div>
        </SectionContainer>
      </div>

      {/* Approach Section */}
      <SectionContainer>
        <SectionHeader 
          title="My Problem-Solving Approach" 
          subtitle="How I tackle complex challenges and find effective solutions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {problemSolving.approaches && problemSolving.approaches.map((approach, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-green-600 mb-4">
                {index === 0 ? <FaCode className="text-3xl" /> : 
                index === 1 ? <FaLaptopCode className="text-3xl" /> :
                <FaTrophy className="text-3xl" />}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{approach.title}</h3>
              <p className="text-gray-600">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Competitive Programming Section */}
      <div className="bg-gray-50">
        <SectionContainer>
          <SectionHeader 
            title="Competitive Programming" 
            subtitle="My achievements on coding platforms and programming contests"
          />
          
          <div className="mt-12">
            {problemSolving.platforms && problemSolving.platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="mb-10 bg-white rounded-lg shadow-md p-6 border border-gray-200"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                    <p className="text-gray-600">Handle: {platform.handle}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                      Rating: {platform.rating || 'N/A'}
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">{platform.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {platform.achievements && platform.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </div>

      {/* Problem Solving Projects */}
      <SectionContainer>
        <SectionHeader 
          title="Problem Solving Projects" 
          subtitle="Projects that demonstrate my problem-solving abilities"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {problemSolving.projects && problemSolving.projects.map((project, index) => (
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
  );
};

ProblemSolving.propTypes = {
  userData: PropTypes.object,
};

export default ProblemSolving;