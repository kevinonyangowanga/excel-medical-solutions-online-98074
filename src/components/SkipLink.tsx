const SkipLink = () => {
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-medical-blue focus:text-white focus:rounded focus:shadow-lg focus:outline-none focus:ring-3 focus:ring-yellow-400"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
