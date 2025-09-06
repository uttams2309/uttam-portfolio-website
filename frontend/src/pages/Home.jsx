import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';

const Home = ({ userData }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Fallback to placeholder data if userData is not available
  const name = userData?.about?.name || 'John Doe';
  const title = userData?.about?.title || 'Software Engineer & Data Scientist';
  const summary = userData?.about?.summary || 'Passionate about building innovative solutions with cutting-edge technologies';
  const sections = [
    { title: 'About Me', path: '/about', icon: '👨‍💼' },
    { title: 'Problem Solving', path: '/problem-solving', icon: '🧩' },
    { title: 'Development', path: '/development', icon: '💻' },
    { title: 'Machine Learning/AI', path: '/machine-learning', icon: '🤖' },
    { title: 'Travelling', path: '/travelling', icon: '✈️' },
    { title: 'Achievements', path: '/achievements', icon: '🏆' },
    { title: 'Hackathons', path: '/hackathons', icon: '⚡' },
    { title: 'Data Engineering', path: '/data-engineering', icon: '📊' },
    { title: 'Computer Science', path: '/computer-science', icon: '🔍' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
        <SectionContainer className="py-20 md:py-32">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello, I'm {name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">{title}</p>
            <p className="max-w-2xl mx-auto text-lg mb-8">{summary}</p>
            <Link 
              to="/about" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-medium rounded-md shadow-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Learn More
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </SectionContainer>
      </div>

      {/* Sections Overview */}
      <SectionContainer>
        <SectionHeader 
          title="Explore My Portfolio" 
          subtitle="Discover my skills, projects, and experiences across different domains"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link 
                to={section.path} 
                className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-shadow"
              >
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{section.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                    <div className="flex items-center text-blue-600 font-medium">
                      <span>View details</span>
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Call to Action */}
      <div className="bg-gray-100">
        <SectionContainer>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Let's Connect</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in collaborating or have questions? Feel free to reach out!
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

Home.propTypes = {
  userData: PropTypes.object,
};

export default Home;