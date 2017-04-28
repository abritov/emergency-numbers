exports.mainPageLoaded = function() {
    console.log("Hello world!");
};
exports.operatorBtnClicked = function(e) {
    console.log("clicked!");
    console.log(e.view.name);
};