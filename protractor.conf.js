exports.config = {
    // Your configuration options here

    specs: ['./test/hello.spec.js'], // Path to your test file
    capabilities: {
        browserName: 'chrome' // Use Chrome browser
    },
    baseUrl: 'http://localhost:3000', // Adjust as needed
    framework: 'jasmine', // Use Jasmine framework

    // Disable Angular synchronization
    ignoreUncaughtExceptions: true,
    onPrepare: function () {
        browser.ignoreSynchronization = true;
    }
};
