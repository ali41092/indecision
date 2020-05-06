"use strict";

// const user = {
//     name: "Ali Zahid",
//     cities: ['Islalamad', 'Lahore','Karachi'],
//     printplacesLived: function () {
//         return this.cities.map((city) => this.name + " has lived in " + city);
//     }
// }
// console.log(user.printplacesLived());

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (x) {
            return x * _this.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
