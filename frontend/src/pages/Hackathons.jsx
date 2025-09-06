import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUsers, FaLightbulb, FaCalendarAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { placeholderHackathonsData } from '../data/placeholder';

const Hackathons = ({ userData }) => {
  const [hackathons, setHackathons] = useState(placeholderHackathonsData);
  
  useEffect(() => {
    if (userData?.hackathons) {
      setHackathons(userData.hackathons);
    }
  }, [userData]);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white">
        <SectionContainer className="py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hackathons
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-purple-100 max-w-3xl mx-auto">
              {hackathons.introduction || "My experiences, projects, and achievements from various hackathons and coding competitions."}
            </p>
          </motion.div>
        </SectionContainer>
      </div>

      {/* Hackathon Stats */}
      <SectionContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              {hackathons.totalParticipated || '8+'}
            </h3>
            <p className="text-gray-600 font-medium">Hackathons</p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              {hackathons.totalWins || '3+'}
            </h3>
            <p className="text-gray-600 font-medium">Wins</p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              {hackathons.totalProjects || '10+'}
            </h3>
            <p className="text-gray-600 font-medium">Projects</p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              {hackathons.teamSize || '3-5'}
            </h3>
            <p className="text-gray-600 font-medium">Team Size</p>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Why Hackathons */}
      <div className="bg-gray-50">
        <SectionContainer>
          <SectionHeader 
            title="Why I Participate in Hackathons" 
            subtitle="The benefits and experiences gained from hackathon participation"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="text-purple-600 mb-4">
                <FaLightbulb className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                Hackathons provide the perfect environment to think outside the box and come up with innovative solutions to real-world problems under time constraints.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="text-purple-600 mb-4">
                <FaUsers className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Teamwork</h3>
              <p className="text-gray-600">
                Working closely with talented individuals from diverse backgrounds enhances my collaboration skills and exposes me to different perspectives.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="text-purple-600 mb-4">
                <FaLaptopCode className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Skill Development</h3>
              <p className="text-gray-600">
                Each hackathon is an opportunity to learn new technologies, improve coding abilities, and practice rapid prototyping in a high-pressure environment.
              </p>
            </motion.div>
          </div>
        </SectionContainer>
      </div>

      {/* Featured Hackathon Projects */}
      <SectionContainer>
        <SectionHeader 
          title="Featured Hackathon Projects" 
          subtitle="Projects developed during hackathons and coding competitions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {hackathons.projects && hackathons.projects.map((project, index) => (
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

      {/* Hackathon Timeline */}
      <div className="bg-gray-50">
        <SectionContainer>
          <SectionHeader 
            title="Hackathon Journey" 
            subtitle="A timeline of my hackathon experiences"
          />
          
          <div className="mt-12 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
            
            {hackathons.timeline && hackathons.timeline.map((event, index) => (
              <motion.div 
                key={index}
                className={`mb-12 flex items-center ${index % 2 === 0 ? 'justify-end md:justify-start' : 'justify-start md:justify-end'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex items-center mb-2 justify-start">
                      <FaCalendarAlt className="text-purple-600 mr-2" />
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{event.name}</h3>
                    <p className="text-gray-600 mb-3">{event.location}</p>
                    <p className="text-gray-700 mb-3">{event.description}</p>
                    {event.achievement && (
                      <div className="bg-purple-100 text-purple-800 text-sm font-medium p-2 rounded">
                        {event.achievement}
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

Hackathons.propTypes = {
  userData: PropTypes.object,
};

export default Hackathons;