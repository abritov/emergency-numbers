var data = require("../../static/data");

exports.loaded = function() {
    console.log("Hello world!");
};
exports.tapOperator = function(e) {
    console.log(e.view.name);
    console.log(data.operatorInfo[e.view.name]);
};