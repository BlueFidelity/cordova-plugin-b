function BootFidelity() {
    'use strict';
}

BootFidelity.prototype.getCordovaIntent = function(successCallback, failureCallback) {
    'use strict';

    return cordova.exec (
        successCallback,
        failureCallback,
        "BootFidelity",
        "getCordovaIntent",
        []
    );
};

BootFidelity.prototype.setNewIntentHandler = function(method) {
    'use strict';

    cordova.exec (
        method,
        null,
        "BootFidelity",
        "setNewIntentHandler",
        [method]
    );
};

BootFidelity.prototype.getRealPathFromContentUrl = function(uri, successCallback, failureCallback) {
    'use strict'

    cordova.exec (
        successCallback,
        failureCallback,
        'BootFidelity',
        'getRealPathFromContentUrl',
        [uri]
    );

}

var pluginInstance = new BootFidelity();
module.exports = pluginInstance;

// Make plugin work under window.plugins
if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.bootfidelity) {
    window.plugins.bootfidelity = pluginInstance;
}
