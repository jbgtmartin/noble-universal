'use strict';

const os = require('os');

if (os.platform() === 'darwin') {
	module.exports = require('noble-mac');
} else {
	module.exports = require('noble-uwp');
}