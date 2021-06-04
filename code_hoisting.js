tipper("5")

function tipper(a) {
    var bill = parseInt(a)
    console.log(bill + 5);
}


bigTipper(200)
// This will give error
var bigTipper = function (a) {
    var bill = parseInt(a)
    console.log(bill + 5);
}