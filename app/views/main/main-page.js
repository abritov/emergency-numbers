var frameModule = require("ui/frame");

exports.loaded = function() {
    console.log("Hello world!");
};
exports.tapOperator = function(e) {
    console.log(e.view.name);
    var topmost = frameModule.topmost();
    var viewSetup = {
        moduleName: "views/list/list",
        context: {
            operatorName: e.view.name
        }
    };
    topmost.navigate(viewSetup);
};