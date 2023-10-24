let vehicle = {
    "seats":5,
    "wheels": 4,
    "door": 2,
    __proto__:{
       'name': starboy
    }
}
console.log(vehicle.__proto__)
console.log(Object.getPrototypeOf(vehicle))