const rightColumn = document.querySelector('#column3');
const leftColumn = document.querySelector('#column1');
const age = document.createElement('h3');
rightColumn.appendChild(age);
const hungerEl = document.createElement('h3');
const boredom = document.createElement('h3');
const sleepiness = document.createElement('h3');
rightColumn.appendChild(sleepiness);
rightColumn.appendChild(boredom);
const alert = document.createElement('h1');
const feedButton = document.createElement('button');
const playButton = document.createElement('button');
const sleepButton = document.createElement('button');
const imgdoggie = document.createElement('img');
imgdoggie.setAttribute('src', 'img/puppypix.gif');
imgdoggie.setAttribute("id", "puppy-begin");
let sleepBoolean = false;
let timerCounter = 0;
let hungerTimerCounter = 0;
let boredTimerCounter = 0;
class PuppyDoggie {
    constructor(name, hunger=0, sleepiness=0, boredom=0, age=0, bedTime=0, mealTime=0){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;     
    }
    initPup(){
        const centerColumn = document.querySelector('#column2');
        const rightColumn = document.querySelector('#column3');
        const puppersDiv = document.querySelector('#puppers');
        puppersDiv.appendChild(imgdoggie);
        
        const newDoggie = document.createElement('h2');
        newDoggie.innerText = `Lil ${this.name}`;
        centerColumn.appendChild(newDoggie);
        
        rightColumn.appendChild(hungerEl);
        hungerEl.innerText = `Hunger: ${hungerTimerCounter}`;
        age.innerText = `Age: ${this.age}`;
        boredom.innerText = `Boredom: ${this.boredom}`;
        sleepiness.innerText = `Sleepiness: ${timerCounter}`

        leftColumn.appendChild(feedButton);
        feedButton.setAttribute('type', 'button');
        feedButton.innerText = `Feed Lil ${this.name}`

        leftColumn.appendChild(playButton);
        playButton.setAttribute('type', 'button');
        playButton.innerText = `Play with lil ${this.name}`

        leftColumn.appendChild(sleepButton);
        sleepButton.setAttribute('type', 'button');
        sleepButton.innerText = `got to sleep lil ${this.name}`

        this.startSleepiness();
        this.startGettingHungry();
        this.startGettingBored();
        this.startAging();
    }
    startSleepiness(){
        let myTimer = setInterval(() => {
            const i = timerCounter
            timerCounter ++;
            sleepiness.innerText = `Sleepiness: ${timerCounter}`
            }, 15000);
        sleepButton.addEventListener('click', e => {
                timerCounter = 0;
                sleepiness.innerText = `Sleepiness: ${timerCounter}`
                clearInterval(myTimer);
                myTimer = -1
                imgdoggie.setAttribute('src', 'img/puppysleep.gif');
                let napTime = setTimeout(() => {
                    myTimer = setInterval(() => {
                        const i = timerCounter
                        timerCounter ++;
                        imgdoggie.setAttribute('src', 'img/puppypix.gif');
                        sleepiness.innerText = `Sleepiness: ${timerCounter}`
                        }, 15000);
                }, 5000)
          });
    }   
    startGettingHungry(){
        let hungerTimer = setInterval(() => {
            const i = hungerTimerCounter;
            hungerTimerCounter ++;
            hungerEl.innerText = `Hunger: ${hungerTimerCounter}`;
            }, 15000);
        feedButton.addEventListener('click', e => {
                hungerTimerCounter = 0;
                hungerEl.innerText = `Hunger: ${hungerTimerCounter}`
                clearInterval(hungerTimer);
                hungerTimer = -1;
                imgdoggie.setAttribute('src', 'img/puppyeating.gif');
                const dinnerTime = setTimeout(() => {
                    hungerTimer = setInterval(() => {
                        const i = hungerTimerCounter;
                        hungerTimerCounter ++;
                        imgdoggie.setAttribute('src', 'img/puppypix.gif');
                        hungerEl.innerText = `Hunger: ${hungerTimerCounter}`
                    }, 15000);
                }, 5000)
        });
    }
    startGettingBored(){
        let boredTimer = setInterval(() => {
            const i = boredTimerCounter;
            boredTimerCounter ++;
            boredom.innerText = `Boredom: ${boredTimerCounter}`;
            }, 15000);
        playButton.addEventListener('click', e => {
                boredTimerCounter = 0;
                boredom.innerText = `Boredom: ${boredTimerCounter}`
                clearInterval(boredTimer);
                boredTimer = -1;
                imgdoggie.setAttribute('src', 'img/puppyhappy.gif');
                const playTime = setTimeout(() => {
                    boredTimer = setInterval(() => {
                        const i = boredTimerCounter;
                        boredTimerCounter ++;
                        imgdoggie.setAttribute('src', 'img/puppypix.gif');
                        boredom.innerText=`Boredom: ${boredTimerCounter}`
                    }, 15000)
                    
                }, 5000)

        });
    }
    startAging(){
        const doggieAge = setInterval(() => {
            this.age ++;
            age.innerText = `Age: ${this.age}`;
        }, 20000);
      }
    
    
}


document.querySelectorAll('input')[1].addEventListener('click', e => {
    // console.log('puppy doggie')
    e.preventDefault();
    const puppy = new PuppyDoggie(document.querySelector('input').value) ;
    console.log(puppy.name);
    const submitButton = document.querySelector('form');
    submitButton.style.display = 'none';
    puppy.initPup();
    // const navBar = document.querySelector('nav');
    
    
  });
