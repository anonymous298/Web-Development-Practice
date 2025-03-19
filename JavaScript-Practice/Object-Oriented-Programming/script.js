// Prototypes in JavaScript.

// const engine = {
//     type : 'petrol',
//     strokes : 'v6',
//     start : () => {
//         console.log('Engine Starting...')
//     }

// }

// const car = {
//     model : 'Toyota Supra mk4',
//     brand : 'Toyota',
//     start : () => {
//         console.log('Car Starting...')
//     },
//     stop : () => {
//         console.log('Stopping...')
//     }
// }

// car.__proto__ = engine;

// Classes in Java Script.

// class ModelTraining {
//     initiate_training(X_train, X_test, y_train, y_test) {
//         console.log('Model Trained 90% accuracy');
//     }

// }

// let obj = new ModelTraining();

// let X_train = [[1,2,3], [1,2,3], [1,2,3]];
// let X_test = [[1,2,3]];
// let y_train = (0, 1, 0);
// let y_test = 0;

// obj.initiate_training(X_train, X_test, y_train, y_test);

class Employee {
    constructor(name, employee_id, salary) {
        this.name = name;
        this.employee_id = employee_id;
        this.salary = salary;
    }

    employeeInfo() {
        console.log(`Employee name ${this.name}, employee id ${this.employee_id}, employee salary ${this.salary}`);
    }
}

let emp1 = new Employee('Mustufa', 101, 100000);
