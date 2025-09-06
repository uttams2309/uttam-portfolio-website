import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaNetworkWired, FaLock, FaServer } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import { placeholderComputerScienceData } from '../data/placeholder';

const ComputerScience = ({ userData }) => {
  const [computerScience, setComputerScience] = useState(placeholderComputerScienceData);
  
  useEffect(() => {
    if (userData?.computerScience) {
      setComputerScience(userData.computerScience);
    }
  }, [userData]);

  // Icons for different CS areas
  const getIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'algorithms':
        return <FaCode className="text-2xl" />;
      case 'systems':
        return <FaServer className="text-2xl" />;
      case 'networks':
        return <FaNetworkWired className="text-2xl" />;
      case 'security':
        return <FaLock className="text-2xl" />;
      default:
        return <FaLaptopCode className="text-2xl" />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <SectionContainer className="py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Computer Science
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300 max-w-3xl mx-auto">
              {computerScience.introduction || "Exploring the fundamental concepts and principles that form the foundation of computing."}
            </p>
          </motion.div>
        </SectionContainer>
      </div>

      {/* Core CS Areas */}
      <SectionContainer>
        <SectionHeader 
          title="Core Computer Science Areas" 
          subtitle="Fundamental principles and concepts I've mastered"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {computerScience.coreAreas && computerScience.coreAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SkillCard
                icon={getIcon(area.category)}
                title={area.name}
                description={area.description}
                level={area.level}
              />
            </motion.div>
          ))}

          {/* Fallback if no core areas data */}
          {(!computerScience.coreAreas || computerScience.coreAreas.length === 0) && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <SkillCard
                  icon={<FaCode className="text-2xl" />}
                  title="Algorithms & Data Structures"
                  description="Proficient in designing efficient algorithms and implementing various data structures to solve complex computational problems."
                  level={90}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <SkillCard
                  icon={<FaServer className="text-2xl" />}
                  title="Operating Systems"
                  description="Understanding of OS principles, process management, memory allocation, file systems, and system programming."
                  level={85}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <SkillCard
                  icon={<FaNetworkWired className="text-2xl" />}
                  title="Computer Networks"
                  description="Knowledge of network protocols, architecture, security, and distributed systems principles."
                  level={80}
                />
              </motion.div>
            </>
          )}
        </div>
      </SectionContainer>

      {/* CS Projects */}
      <div className="bg-gray-50">
        <SectionContainer>
          <SectionHeader 
            title="Computer Science Projects" 
            subtitle="Projects that demonstrate my CS fundamentals and skills"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {computerScience.projects && computerScience.projects.map((project, index) => (
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

            {/* Fallback if no projects data */}
            {(!computerScience.projects || computerScience.projects.length === 0) && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <ProjectCard
                    title="Custom Hash Map Implementation"
                    description="Developed a high-performance hash map with collision resolution and dynamic resizing capabilities."
                    technologies={['C++', 'Data Structures', 'Algorithms']}
                    githubLink="#"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <ProjectCard
                    title="Mini Unix Shell"
                    description="Implemented a shell with process management, piping, redirection and job control capabilities."
                    technologies={['C', 'Unix', 'Systems Programming']}
                    githubLink="#"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <ProjectCard
                    title="Network Packet Analyzer"
                    description="Built a tool for analyzing network traffic, packet inspection and protocol identification."
                    technologies={['Python', 'Networking', 'Wireshark']}
                    githubLink="#"
                  />
                </motion.div>
              </>
            )}
          </div>
        </SectionContainer>
      </div>

      {/* Research Interests */}
      <SectionContainer>
        <SectionHeader 
          title="Research Interests" 
          subtitle="Areas of computer science that I'm passionate about researching"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {computerScience.researchInterests && computerScience.researchInterests.map((interest, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">{interest.title}</h3>
              <p className="text-gray-600 mb-4">{interest.description}</p>
              
              {interest.relatedConcepts && interest.relatedConcepts.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Related Concepts:</h4>
                  <div className="flex flex-wrap gap-2">
                    {interest.relatedConcepts.map((concept, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Fallback if no research interests data */}
          {(!computerScience.researchInterests || computerScience.researchInterests.length === 0) && (
            <>
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">Distributed Systems</h3>
                <p className="text-gray-600 mb-4">
                  Exploring consensus algorithms, fault tolerance, and scalability challenges in distributed computing environments. Particularly interested in blockchain technologies and decentralized applications.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Related Concepts:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Consensus Algorithms', 'Byzantine Fault Tolerance', 'Distributed Ledgers', 'CAP Theorem'].map((concept, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">Computational Theory</h3>
                <p className="text-gray-600 mb-4">
                  Investigating complexity theory, automata, and formal languages to understand the fundamental limits and capabilities of computation.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Related Concepts:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['P vs NP', 'Turing Machines', 'Complexity Classes', 'Formal Languages'].map((concept, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </SectionContainer>

      {/* Core CS Concepts */}
      <div className="bg-gray-50">
        <SectionContainer>
          <SectionHeader 
            title="Core Computer Science Concepts" 
            subtitle="Key theoretical and practical concepts I've mastered"
          />
          
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {computerScience.coreConcepts && computerScience.coreConcepts.slice(0, 6).map((concept, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{concept.name}</h3>
                  <p className="text-gray-600">{concept.description}</p>
                </motion.div>
              ))}

              {/* Fallback if no core concepts data */}
              {(!computerScience.coreConcepts || computerScience.coreConcepts.length === 0) && (
                <>
                  {[
                    { name: "Time & Space Complexity", description: "Analyzing algorithms to determine their efficiency in terms of execution time and memory usage." },
                    { name: "Object-Oriented Design", description: "Designing systems using classes, inheritance, encapsulation, and polymorphism principles." },
                    { name: "Database Theory", description: "Understanding relational database design, normalization, and query optimization." },
                    { name: "Concurrency", description: "Managing simultaneous execution of computations with principles like mutex, semaphores and deadlock prevention." },
                    { name: "Compilation & Interpretation", description: "Knowledge of how programming languages are translated to machine code through various phases." },
                    { name: "Virtual Memory", description: "Understanding how operating systems manage memory through paging, segmentation, and address translation." }
                  ].map((concept, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{concept.name}</h3>
                      <p className="text-gray-600">{concept.description}</p>
                    </motion.div>
                  ))}
                </>
              )}
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

ComputerScience.propTypes = {
  userData: PropTypes.object,
};

export default ComputerScience;