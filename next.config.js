const path = require('path');

module.exports = {
  // Your other Next.js configurations go here
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

};

