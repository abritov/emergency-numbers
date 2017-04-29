var frameModule = require("ui/frame");
var NumberListModel = require("../../models/list");
var operatorInfoModel = new NumberListModel();


exports.loaded = function(args) {
    var page = args.object;
    var context = page.navigationContext;
    operatorInfoModel.switchTo(context.operatorName);
    page.bindingContext = operatorInfoModel;
};

exports.tapBackToMain = function() {
    var topmost = frameModule.topmost();
    var viewSetup = {
        moduleName: "views/main/main-page",
        context: { resetOperator: true }
    };
    topmost.navigate(viewSetup);
};