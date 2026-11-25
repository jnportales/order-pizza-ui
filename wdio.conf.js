exports.config = {
    max_sessions: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    services: [],
    framework: 'mocha',
    specs: ['./test/e2e/**/*.spec.mjs'],
    reporters: ['spec'],
    logLevel: 'info',
    full_screenshot: true,
    capture: 'viewport',
    baseUrl: 'http://localhost:8080',
    mochaOpts: {
        timeout: 60000
    },
    mochaHooks: {
        beforeEach: function (browser) {
            browser.url('/');
        }
    }
};
