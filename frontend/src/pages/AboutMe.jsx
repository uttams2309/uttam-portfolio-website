import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import SkillCard from '../components/SkillCard';
import { placeholderAboutData } from '../data/placeholder';

const AboutMe = ({ userData }) => {
  const [about, setAbout] = useState(placeholderAboutData);
  
  useEffect(() => {
    if (userData?.about) {
      setAbout(userData.about);
    }
  }, [userData]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
        <SectionContainer className="py-20">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {about.name}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">{about.title}</p>
          </motion.div>
        </SectionContainer>
      </div>

      {/* About Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-200">
                  {about.profileImage && (
                    <img 
                      src={about.profileImage} 
                      alt={about.name} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h2 className="text-2xl font-bold">{about.name}</h2>
                <p className="text-gray-600">{about.title}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 mr-3" />
                  <span className="text-gray-700">{about.email || 'contact@example.com'}</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 mr-3" />
                  <span className="text-gray-700">{about.location || 'City, Country'}</span>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="text-blue-600 mr-3" />
                  <a href={about.linkedinUrl || '#'} className="text-blue-600 hover:underline">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center">
                  <FaGithub className="text-blue-600 mr-3" />
                  <a href={about.githubUrl || '#'} className="text-blue-600 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">About Me</h3>
              <div className="prose text-gray-700">
                {about.bio && about.bio.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Education</h3>
              <div className="space-y-4">
                {about.education && about.education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.duration}</p>
                    {edu.description && <p className="text-gray-700 mt-2">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Skills Section */}
      <div className="bg-gray-50">
        <SectionContainer>
          <SectionHeader 
            title="Skills & Expertise" 
            subtitle="My technical proficiencies and knowledge areas"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {about.skills && about.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <SkillCard
                  icon={<FaUser className="text-2xl" />}
                  title={skill.name}
                  description={skill.description}
                  level={skill.level}
                />
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  userData: PropTypes.object,
};

export default AboutMe;