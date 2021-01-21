module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react'
      }),
      new webpack.DefinePlugin({
        GLOBALS: JSON.stringify({
          TITLE: 'NextJS Material Dashboard',
          PATH: {
            IMAGES: '/images'
          },
          PACKAGE: {
            homepage: 'https://github.com/morteza-jamali/nextjs-material-dashboard#readme'
          }
        })
      })
    );

    return config;
  }
};
