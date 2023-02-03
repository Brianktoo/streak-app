"use strict";
// import task from '../interfaces/interface.ts';
exports.__esModule = true;
exports.StreakClass = void 0;
var StreakClass = /** @class */ (function () {
    // streakname:string;
    // taskimage:string;
    // date:string;
    // currElement: HTMLAllCollection;
    function StreakClass() {
    }
    // constructor(streakname:string, taskimage:string, date:string){
    //     this.streakname=streakname
    //     this.taskimage=taskimage
    //     this.date=date
    // }
    StreakClass.prototype.openStreakModal = function () {
    };
    StreakClass.prototype.closeStreakModal = function () {
    };
    StreakClass.prototype.addTask = function (id) {
    };
    StreakClass.prototype.deleteTask = function (id) {
    };
    StreakClass.prototype.openTask = function (popUp) {
        var list = popUp.classList;
        list.add('pop-up-active');
    };
    StreakClass.prototype.closeTask = function () {
    };
    StreakClass.prototype.validateForm = function () {
    };
    return StreakClass;
}());
exports.StreakClass = StreakClass;
// export default StreakClass;
