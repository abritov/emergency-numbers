var frameModule = require("ui/frame");
var applicationSettings = require("application-settings");

function loadOperatorView(name) {
    var topmost = frameModule.topmost();
    var viewSetup = {
        moduleName: "views/list/list",
        context: {
            operatorName: name
        }
    };
    applicationSettings.setString("currentOperator", name);
    topmost.navigate(viewSetup);
}

exports.loaded = function(args) {
    console.log("Hello world!");
    var page = args.object;
    var context = page.navigationContext;
    if (context.resetOperator) {
        applicationSettings.setString("currentOperator", "null");
    }
    currentOperator = applicationSettings.getString("currentOperator", "null");
    if (currentOperator !== "null") {
        console.log("Load last operator " + currentOperator);
        loadOperatorView(currentOperator);
    }
};
exports.tapOperator = function(e) {
    console.log(e.view.name);
    loadOperatorView(e.view.name);
};