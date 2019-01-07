const path = require('path');

export default {
  exportStatic: {
    htmlSuffix: true
  },
  plugins: [
    ['umi-plugin-react', {
      hd: true
    }]
  ]
}
