var exec = require('cordova/exec');

module.exports = {
    getCordovaIntent: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'BootFidelity', 'getCordovaIntent', []);
    },
    setNewIntentHandler: function (method) {
        exec(method, null, 'BootFidelity', 'setNewIntentHandler', [method]);
    },
    getRealPathFromContentUrl: function (uri, successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'BootFidelity', 'getRealPathFromContentUrl', [uri]);
    }
};
