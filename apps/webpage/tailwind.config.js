const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const themeHorizon = require('../../settings/tailwind/horizon');

module.exports = {
  mode: 'jit',
	content: [
    join(__dirname, 'pages/**/*.{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
	],
	theme: themeHorizon,
	plugins: [],
};
