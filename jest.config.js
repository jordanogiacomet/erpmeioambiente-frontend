// jest.config.js
module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)", // Transforma axios e outros módulos necessários
  ],
};
