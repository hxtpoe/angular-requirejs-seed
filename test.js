var tests = [];
for (var file in window.__karma__.files) {
    if (/^\/base\/scripts\/.*spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {
        'angular': './bower_components/angular/angular.min',
        'sassbootstrap': './bower_components/sass-bootstrap/dist/js/bootstrap',
        'sass-bootstrap': './bower_components/sass-bootstrap/dist/js/bootstrap',
        'angular-scenario': './bower_components/angular-scenario/angular-scenario',
        'angular-sanitize': './bower_components/angular-sanitize/angular-sanitize',
        'angular-resource': './bower_components/angular-resource/angular-resource',
        'angular-mocks': './bower_components/angular-mocks/angular-mocks',
        'angular-cookies': './bower_components/angular-cookies/angular-cookies',
        'angular-ui-router': './bower_components/angular-ui-router/release/angular-ui-router'
    },

    shim: {
        'angular': {'exports': 'angular'},
        'angular-cookies': ['angular'],
        'angular-sanitize': ['angular'],
        'angular-resource': ['angular'],
        'angular-ui-router': ['angular'],
        'angular-mocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
