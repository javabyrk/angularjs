"use strict";
var Student = (function () {
    function Student() {
    }
    Student.students = [
        { id: 1, name: 'student1', pocketMoney: 1000, jeeScore: 2204, attemptDate: new Date("9/27/2017 11:25") },
        { id: 2, name: 'student2', pocketMoney: 5000, jeeScore: 2876, attemptDate: new Date("9/27/2016 11:25") },
        { id: 3, name: 'student3', pocketMoney: 2500, jeeScore: 2600, attemptDate: new Date("9/27/2015 11:25") },
        { id: 4, name: 'student4', pocketMoney: 7000, jeeScore: 2800, attemptDate: new Date("9/27/2013 11:25") }
    ];
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=student.js.map