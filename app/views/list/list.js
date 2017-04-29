var NumberListModel = require("../../models/list");
var operatorInfoModel = new NumberListModel();


exports.loaded = function(args) {
    var page = args.object;
    var context = page.navigationContext;
    operatorInfoModel.switchTo(context.operatorName);
    page.bindingContext = operatorInfoModel;
};