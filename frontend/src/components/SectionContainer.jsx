import PropTypes from 'prop-types';

const SectionContainer = ({ id, className = '', children }) => {
  return (
    <section
      id={id}
      className={`py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

SectionContainer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionContainer;