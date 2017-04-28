var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;

function NumberList(list) {
    list = list || [];
    
    var viewModel = new Observable({
        listNumbers: new ObservableArray(list)
    });

    viewModel.update = function(list) {
        viewModel.length = 0;
        viewModel.push(list);
    };

    return viewModel;
}

module.exports = NumberList;