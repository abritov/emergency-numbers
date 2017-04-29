var frameModule = require("ui/frame");
var NumberListModel = require("../../models/list");
var operatorInfoModel = new NumberListModel();
var pressedNumber;

exports.loaded = function(args) {
    var page = args.object;
    var context = page.navigationContext;
    operatorInfoModel.switchTo(context.operatorName);
    page.bindingContext = operatorInfoModel;
};

exports.listViewItemTap = function(e) {
    if (pressedNumber !== undefined) 
        pressedNumber.className = "";
    console.log(e.view.text);
    e.view.className = "pressed";
    pressedNumber = e.view;
};

exports.tapBackToMain = function() {
    var topmost = frameModule.topmost();
    var viewSetup = {
        moduleName: "views/main/main-page",
        context: { resetOperator: true }
    };
    topmost.navigate(viewSetup);
};