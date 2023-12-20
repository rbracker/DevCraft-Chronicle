const helpers = {
    // Function to format date
    formatDate: (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  
    // Function to truncate text to a specified length
    truncateText: (text, maxLength) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '...';
      }
      return text;
    },
  
    // Add more helper functions if needed
  };
  
  module.exports = helpers;
  