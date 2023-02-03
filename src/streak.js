"use strict";
// import StreakClass from "./classes/StreakClass.ts";
// import {StreakClass} = require("./classes/StreakClass.ts");
exports.__esModule = true;
var StreakClass_js_1 = require("./classes/StreakClass.js");
// div elements
var welcomePage = document.querySelector(".welcome-page");
var addTask = document.querySelector(".add-task");
// Button Elements
var addButton = document.getElementById("add-streak");
var closeButton = document.querySelector(".close-button");
// Pop up
var popUp = document.querySelector(".pop-up");
// Pop up buttons
var popUpClose = document.querySelector(".close-btn");
var popUpDelete = document.querySelector(".delete-btn");
// Form button
var formButton = document.getElementById("add-btn");
// Form Div
var form = document.querySelector('form');
// Form Input
var taskName = document.getElementById("name");
var urlname = document.getElementById("image");
var streakDate = document.getElementById("date");
// Bottom page
var bottomText = document.querySelector('.bottom-text');
var bottomIcon = document.querySelector('.activity-icon');
var bottomDate = document.querySelector('.activity-date');
var popupdiv = document.querySelector('.activity-display');
var bottomdesc = document.querySelector('.activity-title');
// plus page+
addButton.addEventListener('click', function () {
    var list = welcomePage.classList;
    list.add('not-active');
    var addTaskList = addTask.classList;
    addTaskList.remove('not-active');
});
closeButton.addEventListener('click', function () {
    var list = welcomePage.classList;
    list.remove('not-active');
    var addTaskList = addTask.classList;
    addTaskList.add('not-active');
});
// Open popup
popupdiv.addEventListener('click', function () {
    //   console.log('Div was clicked');
    //   const list = popUp.classList;
    //   list.add('pop-up-active');
    var thisStreak = new StreakClass_js_1.StreakClass();
    thisStreak.openTask(popUp);
});
// Remove pop-up
popUpClose.addEventListener('click', function () {
    var list = popUp.classList;
    list.remove('pop-up-active');
});
popUpDelete.addEventListener('click', function () {
    var list = popUp.classList;
    list.remove('pop-up-active');
});
formButton.addEventListener('click', function (event) {
    event.preventDefault();
    var title = taskName.value;
    var link = urlname.value;
    var date = streakDate.value;
    if (title == "" || link == "" || date == "") {
        var p_1 = document.createElement('p');
        p_1.textContent = 'Please fill in all Fields';
        p_1.style.color = 'red';
        p_1.id = 'error-message';
        form.insertAdjacentElement('afterbegin', p_1);
        setTimeout(function () {
            p_1.style.display = 'none';
        }, 4000);
    }
    else {
        bottomIcon.innerHTML = "<ion-icon name=\"".concat(link, "\"></ion-icon>");
        bottomText.innerText = "Activities";
        bottomDate.innerHTML = "".concat(date);
        bottomdesc.innerHTML = "".concat(title);
        // popUpDiv.style.border='2px solid red'
    }
});
