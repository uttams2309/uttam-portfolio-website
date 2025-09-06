import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaServer, FaCloudUploadAlt, FaChartBar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import { placeholderDataEngineeringData } from '../data/placeholder';

const DataEngineering = ({ userData }) => {
  const [dataEngineering, setDataEngineering] = useState(placeholderDataEngineeringData);
  
  useEffect(() => {
    if (userData?.dataEngineering) {
      setDataEngineering(userData.dataEngineering);
    }
  }, [userData]);

  // Icons for different data engineering areas
  const getIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'database':
        return <FaDatabase className="text-2xl" />;
      case 'pipeline':
        return <FaServer className="text-2xl" />;
      case 'cloud':
        return <FaCloudUploadAlt className="text-2xl" />;
      case 'analytics':
        return <FaChartBar className="text-2xl" />;
      default:
        return <FaDatabase className="text-2xl" />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white">
        <SectionContainer className="py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Data Engineering
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto">
              {dataEngineering.introduction || "Building robust data pipelines and systems to process, store, and analyze large-scale data."}
            </p>
          </motion.div>
        </SectionContainer>
      </div>

      {/* Data Engineering Skills */}
      <SectionContainer>
        <SectionHeader 
          title="Data Engineering Skills" 
          subtitle="My technical expertise in data processing, storage, and analytics"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {dataEngineering.skills && dataEngineering.skills.map((skill, index) => (
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

      {/* Data Pipeline Architecture */}
      <div className="bg-gray-50">
        <SectionContainer>
          <SectionHeader 
            title="Data Pipeline Architecture" 
            subtitle="My approach to designing and implementing data pipelines"
          />
          
          <div className="mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  {dataEngineering.pipelineImage ? (
                    <img 
                      src={dataEngineering.pipelineImage} 
                      alt="Data Pipeline Architecture" 
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <div className="bg-blue-100 w-full aspect-video rounded-lg flex items-center justify-center">
                      <FaDatabase className="text-6xl text-blue-500" />
                    </div>
                  )}
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Architecture Approach</h3>
                  <div className="prose text-gray-700 max-w-none">
                    {dataEngineering.pipelineDescription ? (
                      dataEngineering.pipelineDescription.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))
                    ) : (
                      <>
                        <p className="mb-4">
                          My approach to data engineering focuses on building scalable, fault-tolerant systems that can handle large volumes of data efficiently. I design pipelines that enable seamless data flow from various sources to analytical endpoints.
                        </p>
                        <p className="mb-4">
                          I prioritize robust ETL processes, data quality checks, and monitoring, ensuring that stakeholders can trust the data for critical decision-making. My architectures typically leverage modern cloud technologies and containerization for flexibility and scalability.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Projects Section */}
      <SectionContainer>
        <SectionHeader 
          title="Data Engineering Projects" 
          subtitle="Systems and pipelines I've designed and implemented"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {dataEngineering.projects && dataEngineering.projects.map((project, index) => (
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

      {/* Technologies & Tools */}
      <div className="bg-gray-50">
        <SectionContainer>
          <SectionHeader 
            title="Technologies & Tools" 
            subtitle="The data engineering technologies I specialize in"
          />
          
          <div className="mt-12">
            {dataEngineering.technologies && Object.entries(dataEngineering.technologies).map(([category, tools], index) => (
              <motion.div
                key={category}
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Fallback if no technologies data */}
            {!dataEngineering.technologies && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Databases</h3>
                  <div className="flex flex-wrap gap-3">
                    {['PostgreSQL', 'MongoDB', 'Cassandra', 'Redis', 'Elasticsearch'].map((tool, i) => (
                      <span key={i} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">ETL & Processing</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Apache Spark', 'Apache Kafka', 'Apache Airflow', 'dbt', 'Luigi'].map((tool, i) => (
                      <span key={i} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Cloud Platforms</h3>
                  <div className="flex flex-wrap gap-3">
                    {['AWS', 'Google Cloud', 'Azure', 'Snowflake', 'Databricks'].map((tool, i) => (
                      <span key={i} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Data Quality & Monitoring</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Great Expectations', 'Prometheus', 'Grafana', 'dbt Tests', 'Monte Carlo'].map((tool, i) => (
                      <span key={i} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

DataEngineering.propTypes = {
  userData: PropTypes.object,
};

export default DataEngineering;