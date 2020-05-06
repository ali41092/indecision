// const user = {
//     name: "Ali Zahid",
//     cities: ['Islalamad', 'Lahore','Karachi'],
//     printplacesLived: function () {
//         return this.cities.map((city) => this.name + " has lived in " + city);
//     }
// }
// console.log(user.printplacesLived());

const multiplier = {
    numbers: [10,20,30],
    multiplyBy: 2, 
    multiply() {
        return this.numbers.map((x) => x * this.multiplyBy)
    }
}
console.log(multiplier.multiply());