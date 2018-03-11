const path = require('path');

module.exports = {
    name: 'McRobb.info',
    short_name: 'McRobb',
    start_url: ".",
    description: 'Everything about Andrew McRobb!',
    ios: true,
    background_color: '#000000',
    icons: [
      {
        src: path.resolve('src/images/icon-large.png'),
        sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
      },
      {
        src: path.resolve('src/images/icon-large.png'),
        sizes: [120, 152, 167, 180, 1024], // multiple sizes
        ios: true
      }
    ]
};
