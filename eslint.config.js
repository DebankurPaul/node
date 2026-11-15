const jest = require("eslint-plugin-jest");

module.exports = [
  {
	files:['*/.test.js'],
	...jest.configs['flat/recommended'],
  }
];
