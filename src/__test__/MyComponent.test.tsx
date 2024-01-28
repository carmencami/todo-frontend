module.exports = {
  // ...otras configuraciones de Jest...
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.css$': '<rootDir>/src/__mocks__/styleMock.js', // Agrega esta línea
  },
  transformIgnorePatterns: [
    // Ignora los estilos CSS de react-toastify
    'node_modules/(?!(react-toastify)/)',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
