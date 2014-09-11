define([
], function () {
    'use strict';

    var HomepageController = function () {
        this.test = true;
        this.modal = {
            "title": "Title",
            "content": "Hello Modal<br />This is a multiline message!"
        };
    };

    return [ HomepageController ];
});
