module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  esModuleInterop: true,
  moduleNameMapper: {
    '\\.svg$': 'jest-svg-transformer',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
