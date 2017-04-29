var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var data = require("../static/data");

function NumberList(list) {
    list = list || [];
    
    var viewModel = new Observable({
        listNumbers: new ObservableArray(list)
    });

    viewModel.switchTo = function(operatorName) {
        numbers = data.operatorInfo[operatorName] || [];
        viewModel.listNumbers.length = 0;
        viewModel.listNumbers.push(numbers);
    };

    return viewModel;
}

module.exports = NumberList;