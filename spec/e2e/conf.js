exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['toDontListFeature.js'],
    capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true,
  }
};
