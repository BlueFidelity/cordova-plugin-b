var exec = require('cordova/exec');

module.exports = {
    getIntent: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'BootFidelity', 'getIntent', []);
    },
    setHandleIntent: function (method) {
        exec(method, null, 'BootFidelity', 'setHandleIntent', [method]);
    },
    getPermission: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'BootFidelity', 'getPermission', []);
    },
    getNativePath: function (uri, successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'BootFidelity', 'getNativePath', [uri]);
    }
};
