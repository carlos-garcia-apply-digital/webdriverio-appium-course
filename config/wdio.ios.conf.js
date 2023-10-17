const {config} = require('./wdio.conf');
const path = require('path');

config.port= 4723;

config.specs= [
    '../test/specs/ios/ios-todo-item-screen.spec.js'
];

config.capabilities = [
    {
        // capabilities for local Appium web tests on an Android Emulator
        // platformName: 'Android',
        // browserName: 'Chrome',
        'appium:platformName': 'ios',
        //browserName: 'Chrome',
        'appium:deviceName': 'iPhone 14',
        'appium:platformVersion': '16.4',
        'appium:automationName': 'XCUITest',
        //'appium:app': path.join(process.cwd(), 'app/ios/UIKitCatalog.app')
        'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app')
    }
]

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium']

exports.config = config;