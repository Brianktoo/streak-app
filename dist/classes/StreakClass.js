// import task from '../interfaces/interface.ts';
export class StreakClass {
    constructor() {
        this.tasks = [];
    }
    // constructor(streakname:string, taskimage:string, date:string){
    //     this.streakname=streakname
    //     this.taskimage=taskimage
    //     this.date=date
    // }
    openStreakModal() {
    }
    closeStreakModal() {
    }
    addTask(title, link, date) {
        const form = document.querySelector('form');
        const bottomText = document.querySelector('.bottom-text');
        if (this.validateForm(title, link, date)) {
            const newTask = { id: Math.random(), name: title, taskimage: `<ion-icon name="${link}"></ion-icon>`, date: date };
            this.tasks = [...this.tasks, newTask];
            // this.tasks.push(newTask);
            bottomText.innerText = `Activities`;
            this.displayTasks(newTask);
            // bottomIcon.innerHTML=`<ion-icon name="${link}"></ion-icon>`
            // bottomText.innerText=`Activities`;
            // bottomDate.innerHTML=`${date}`
            // bottomdesc.innerHTML = `${title}`
        }
        else {
            const p = document.createElement('p');
            p.textContent = 'Please fill in all Fields';
            p.style.color = 'red';
            p.id = 'error-message';
            form.insertAdjacentElement('afterbegin', p);
            setTimeout(() => {
                p.style.display = 'none';
            }, 1000);
        }
        ;
    }
    displayTasks(task) {
        const containerDiv = document.querySelector('.bottom-page2');
        const bottomIcon = document.createElement("div");
        const list = bottomIcon.classList;
        list.add('activity-icon');
        bottomIcon.innerHTML = task.taskimage;
        const bottomDate = document.createElement("div");
        const list2 = bottomDate.classList;
        list2.add('activity-date');
        bottomDate.innerHTML = task.date;
        const bottomdesc = document.createElement("div");
        const list3 = bottomdesc.classList;
        list3.add('activity-title');
        bottomdesc.innerHTML = task.name;
        const popupdiv = document.createElement("div");
        const list4 = popupdiv.classList;
        list4.add('activity-display');
        popupdiv.setAttribute('id', task.id.toString());
        popupdiv.appendChild(bottomIcon);
        popupdiv.appendChild(bottomDate);
        popupdiv.appendChild(bottomdesc);
        containerDiv.append(popupdiv);
        // const popupdivr = document.querySelector('.activity-display') as HTMLDivElement;
        // popupdiv.addEventListener('click', function() {
        //     const popUp = document.querySelector(".pop-up") as HTMLDivElement;
        //     this.openTask(popUp);
        // });
    }
    validateForm(title, link, date) {
        if (title == `` || link == `` || date == ``) {
            return false;
        }
        return true;
    }
    deleteTask(id) {
    }
    openTask(popUp, target) {
        const id = target.id;
        // Look for our current element in the list of tasks using id
        const currTask = this.tasks.filter(task => task.id.toString() === id)[0];
        const date = document.querySelector(".pop-up-date");
        const title = document.querySelector(".pop-up-title");
        const days = document.querySelector(".pop-up-days");
        const icon = document.querySelector(".pop-icon-par");
        if (date) {
            date.innerHTML = currTask.date;
        }
        if (title) {
            title.innerHTML = currTask.name;
        }
        if (days) {
            const noOfDays = this.calculateDays(currTask.date);
            days.innerHTML = `${noOfDays} days`;
        }
        if (icon) {
            icon.innerHTML = currTask.taskimage;
        }
        const list = popUp.classList;
        list.add('pop-up-active');
    }
    closeTask(popUp) {
        const list = popUp.classList;
        list.remove('pop-up-active');
    }
    setEventListener() {
        this.tasks.forEach(task => {
            const card = document.getElementById(task.id.toString());
            card === null || card === void 0 ? void 0 : card.addEventListener('click', () => {
                const popUp = document.querySelector(".pop-up");
                // this.openTask(popUp);
                const list = popUp.classList;
                list.add('pop-up-active');
            });
            // const popupdivr = document.querySelector('.activity-display') as HTMLDivElement;
            //  popupdiv.addEventListener('click', function() {
            //     this.openTask(popUp);
            // });
        });
    }
    calculateDays(date) {
        let span = Math.abs(new Date(date).getTime() - new Date().getTime());
        return Math.ceil(span / (1000 * 3600 * 24));
        ;
        // let span = Math.round(Number((new Date(date) - new Date()) / (1000 * 60 * 60 * 24)));
    }
}
// export default StreakClass;
// popUpClose.addEventListener('click',()=>{
//     thisStreak.closeTask(popUp);
// });
// popUpDelete.addEventListener('click',()=>{
//     const list = popUp.classList;
//     list.remove('pop-up-active')
// });
