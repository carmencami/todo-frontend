// src/__tests__/setupTests.ts
import '@testing-library/jest-dom';

// Configuración de jsdom
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

// Declara navigator con las propiedades necesarias
Object.defineProperty(window, 'navigator', {
  value: {
    userAgent: 'node.js',
    clipboard: {},
    credentials: {},
    doNotTrack: {},
    geolocation: {},
    // Agrega más propiedades según sea necesario
  },
  writable: true,
});

// Hace que 'requestAnimationFrame' no arroje un error
window.requestAnimationFrame = (callback: any) => {
  return setTimeout(callback, 0);
};

// Limpia las animaciones después de las pruebas
afterEach(() => {
  jest.clearAllTimers();
});
