import {StreakClass} from "./classes/StreakClass.js";

// div elements
const welcomePage = document.querySelector(".welcome-page") as HTMLDivElement;
const addTask = document.querySelector(".add-task") as HTMLDivElement;
// Button Elements
const addButton =  document.getElementById("add-streak") as HTMLButtonElement;
const closeButton = document.querySelector(".close-button") as HTMLButtonElement;
// Pop up
const popUp = document.querySelector(".pop-up") as HTMLDivElement;
// Pop up buttons
const popUpClose = document.querySelector(".close-btn") as HTMLButtonElement;
const popUpDelete = document.querySelector(".delete-btn") as HTMLButtonElement;
// Form button
const formButton = document.getElementById("add-btn") as HTMLButtonElement;
// Form Div
// const form = document.querySelector('form') as HTMLFormElement;

// Form Input
const taskName = document.getElementById("name") as HTMLInputElement;
const urlname = document.getElementById("image") as HTMLInputElement;
const streakDate = document.getElementById("date") as HTMLInputElement;
// Bottom page
// const bottomText = document.querySelector('.bottom-text') as HTMLParagraphElement;
// const bottomIcon = document.querySelector('.activity-icon') as HTMLDivElement;
// const bottomDate = document.querySelector('.activity-date') as HTMLDivElement;
// const popupdiv = document.querySelector('.activity-display') as HTMLDivElement;
const popupdiv = document.querySelector('.bottom-page2') as HTMLDivElement;

// const bottomdesc = document.querySelector('.activity-title') as HTMLDivElement;

// ----------new Streak Object
const thisStreak = new StreakClass();


// plus page+
addButton.addEventListener('click',()=>{
    const list = welcomePage.classList
    list.add('not-active');
    const addTaskList = addTask.classList;
    addTaskList.remove('not-active');
    
});
closeButton.addEventListener('click',()=>{
    const list = welcomePage.classList
    list.remove('not-active');
    const addTaskList = addTask.classList;
    addTaskList.add('not-active');  
});
// Open popup
popupdiv.addEventListener('click', function(e: Event) {
    // console.log(e.target);
    
// const hello = document.querySelector('.activity-display') as HTMLDivElement;
// if(hello){
    thisStreak.openTask(popUp, e.target)
    
// }

    });
// Remove pop-up
popUpClose.addEventListener('click',()=>{
    thisStreak.closeTask(popUp);
});
popUpDelete.addEventListener('click',()=>{
    const list = popUp.classList;
    list.remove('pop-up-active')
});

formButton.addEventListener('click' , (event)=>{
    event.preventDefault();
    const title = taskName.value;
    const link = urlname.value;
    const date = streakDate.value;
    thisStreak.addTask(title, link, date);
})







