exports.loaded = function() {
    console.log("Hello world!");
};
exports.tapOperator = function(e) {
    console.log(e.view.name);
};