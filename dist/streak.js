import { StreakClass } from "./classes/StreakClass.js";
// div elements
const welcomePage = document.querySelector(".welcome-page");
const addTask = document.querySelector(".add-task");
// Button Elements
const addButton = document.getElementById("add-streak");
const closeButton = document.querySelector(".close-button");
// Pop up
const popUp = document.querySelector(".pop-up");
// Pop up buttons
const popUpClose = document.querySelector(".close-btn");
const popUpDelete = document.querySelector(".delete-btn");
// Form button
const formButton = document.getElementById("add-btn");
// Form Div
// const form = document.querySelector('form') as HTMLFormElement;
// Form Input
const taskName = document.getElementById("name");
const urlname = document.getElementById("image");
const streakDate = document.getElementById("date");
// Bottom page
// const bottomText = document.querySelector('.bottom-text') as HTMLParagraphElement;
// const bottomIcon = document.querySelector('.activity-icon') as HTMLDivElement;
// const bottomDate = document.querySelector('.activity-date') as HTMLDivElement;
// const popupdiv = document.querySelector('.activity-display') as HTMLDivElement;
const popupdiv = document.querySelector('.bottom-page2');
// const bottomdesc = document.querySelector('.activity-title') as HTMLDivElement;
// ----------new Streak Object
const thisStreak = new StreakClass();
// plus page+
addButton.addEventListener('click', () => {
    const list = welcomePage.classList;
    list.add('not-active');
    const addTaskList = addTask.classList;
    addTaskList.remove('not-active');
});
closeButton.addEventListener('click', () => {
    const list = welcomePage.classList;
    list.remove('not-active');
    const addTaskList = addTask.classList;
    addTaskList.add('not-active');
});
// Open popup
popupdiv.addEventListener('click', function (e) {
    // console.log(e.target);
    // const hello = document.querySelector('.activity-display') as HTMLDivElement;
    // if(hello){
    thisStreak.openTask(popUp, e.target);
    // }
});
// Remove pop-up
popUpClose.addEventListener('click', () => {
    thisStreak.closeTask(popUp);
});
popUpDelete.addEventListener('click', () => {
    const list = popUp.classList;
    list.remove('pop-up-active');
});
formButton.addEventListener('click', (event) => {
    event.preventDefault();
    const title = taskName.value;
    const link = urlname.value;
    const date = streakDate.value;
    thisStreak.addTask(title, link, date);
});
