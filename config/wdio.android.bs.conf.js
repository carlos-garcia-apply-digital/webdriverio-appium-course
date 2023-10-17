require('dotenv').config()
const {config} = require('./wdio.conf');

config.specs= [
    // ToDo: define location for spec files here
    '../test/specs/android/delete-note.spec.js'
];

config.user = process.env.BROWSERSTACK_USER,
config.key = process.env.BROWSERSTACK_KEY,
// config.services= [
//     ['browserstack', {
//         testObservability: true,
//         testObservabilityOptions: {
//             projectName: "Your project name goes here",
//             buildName: "The static build job name goes here e.g. Nightly regression"
//         },
//         browserstackLocal: true
//     }]
// ],

config.capabilities = [
    {
        // capabilities for local Appium web tests on an Android Emulator
        // platformName: 'Android',
        // browserName: 'Chrome',
        'platformName': 'Android',
        //browserName: 'Chrome',
        'appium:deviceName': 'Google Pixel 6 Pro',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://36611d55d3482035db90b7f72d19d4f2d50848cd',
        'appium:autoGrantPermissions': true
    }
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack']

exports.config = config;