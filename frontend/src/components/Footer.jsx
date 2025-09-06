import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {year} Portfolio Website. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">
            Made with React, Tailwind CSS, and MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;