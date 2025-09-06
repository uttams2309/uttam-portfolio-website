import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import AchievementCard from '../components/AchievementCard';
import { placeholderAchievementsData } from '../data/placeholder';

const Achievements = ({ userData }) => {
  const [achievements, setAchievements] = useState(placeholderAchievementsData);
  
  useEffect(() => {
    if (userData?.achievements) {
      setAchievements(userData.achievements);
    }
  }, [userData]);

  // Group achievements by type
  const groupedAchievements = achievements.items
    ? achievements.items.reduce((acc, achievement) => {
        const type = achievement.type || 'Other';
        if (!acc[type]) acc[type] = [];
        acc[type].push(achievement);
        return acc;
      }, {})
    : {};
  
  // Get all types in array form
  const achievementTypes = Object.keys(groupedAchievements);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-red-600 text-white">
        <SectionContainer className="py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Achievements
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white max-w-3xl mx-auto">
              {achievements.introduction || "A showcase of my awards, recognitions, and accomplishments throughout my career."}
            </p>
          </motion.div>
        </SectionContainer>
      </div>

      {/* Achievement Stats */}
      <SectionContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold text-yellow-600 mb-2">
              {achievements.totalAwards || '10+'}
            </h3>
            <p className="text-gray-600 font-medium">Awards</p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-yellow-600 mb-2">
              {achievements.totalCertifications || '5+'}
            </h3>
            <p className="text-gray-600 font-medium">Certifications</p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-yellow-600 mb-2">
              {achievements.totalPublications || '3+'}
            </h3>
            <p className="text-gray-600 font-medium">Publications</p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-yellow-600 mb-2">
              {achievements.totalHonors || '7+'}
            </h3>
            <p className="text-gray-600 font-medium">Honors</p>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Achievement Sections by Type */}
      {achievementTypes.map((type, index) => (
        <div key={type} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
          <SectionContainer>
            <SectionHeader 
              title={`${type} Achievements`} 
              subtitle={`My accomplishments in ${type.toLowerCase()}`}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {groupedAchievements[type].map((achievement, achIndex) => (
                <motion.div
                  key={achIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                >
                  <AchievementCard
                    title={achievement.title}
                    organization={achievement.organization}
                    date={achievement.date}
                    description={achievement.description}
                    type={achievement.type}
                  />
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </div>
      ))}

      {/* No Achievements Case */}
      {achievementTypes.length === 0 && (
        <SectionContainer>
          <div className="text-center py-12">
            <p className="text-gray-600">Achievement data will appear here once added.</p>
          </div>
        </SectionContainer>
      )}

      {/* Recognition Quote */}
      <div className="bg-yellow-50">
        <SectionContainer>
          <div className="max-w-3xl mx-auto text-center py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <blockquote className="text-xl font-semibold text-gray-800 italic mb-4">
                {achievements.quote || '"Success is not final, failure is not fatal: It is the courage to continue that counts."'}
              </blockquote>
              <cite className="text-gray-600">— {achievements.quoteAuthor || 'Winston Churchill'}</cite>
            </motion.div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

Achievements.propTypes = {
  userData: PropTypes.object,
};

export default Achievements;