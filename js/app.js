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





    
class PuppyDoggie {
    constructor(name, hunger=0, sleepiness=0, boredom=0, age=0, bedTime=0, mealTime=0){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
        this.bedTime = bedTime;
        this.mealTime = mealTime;        
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
        hungerEl.innerText = `Hunger: ${this.hunger}`;
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

        this.startAging();
        this.startGettingHungry();
        this.startBoredom()
        this.startSleepiness()
    }
    startSleepiness(){
        let myTimer = setInterval(() => {
            const i = timerCounter
            timerCounter ++;
            console.log(`${timerCounter} <- timer counter  `);
            console.log(`${i} <-- I`)
            sleepiness.innerText = `Sleepiness: ${timerCounter}`

            }, 250);;

        sleepButton.addEventListener('click', e => {
            
            if (myTimer === -1){
                myTimer = setInterval(() => {
                    const i = timerCounter
                    timerCounter ++;
                    console.log(`${timerCounter} <- timer counter  `);
                    sleepiness.innerText = `Sleepiness: ${timerCounter}`
                    console.log(`${i} <-- I`)
                    }, 250);
            } else { 
                timerCounter = 0;
                sleepiness.innerText = `Sleepiness: ${timerCounter}`
                clearInterval(myTimer);
                myTimer = -1
                
                }
                
          });
          
        
    }   
    startAging(){
        const doggieAge = setInterval(() => {
            this.age ++;
            age.innerText = `Age: ${this.age}`;
        }, 1009);
      }
      startGettingHungry(){
        feedButton.addEventListener('click', e => {
            alert.innerText = ``; 
            // hungerEl.innerText = `Hunger: 0`;
            imgdoggie.setAttribute('src', 'img/puppyeating.gif');
            clearInterval(soHungry);
            const dogEating = setInterval(() => {
                const i = this.mealTime
                this.mealTime ++;
                console.log(`yum ${this.mealTime}`);
                console.log(i)
                if(this.mealTime===i+1){
                    clearInterval(soHungry);
                    this.startGettingHungry();
                    clearInterval(dogEating);
                    imgdoggie.setAttribute('src', 'img/puppypix.gif');
                    this.hunger = 0
                    

                }
                }, 5000);
          });
        const soHungry = setInterval(() => {
            this.hunger++
            if(this.hunger === 5){
                const nav = document.querySelector('nav');
                alert.innerText = `WOOF WOOF lil ${this.name} is hungry!!`; 
                nav.appendChild(alert)
                // imgdoggie.setAttribute('src', 'img/puppysleepy.gif');
            }
            hungerEl.innerText = `Hunger: ${this.hunger}`;
        }, 5000);
    } 
    
    startBoredom(){
        playButton.addEventListener('click', e => {
            boredom.innerText = `Boredom: 0`;
            this.boredom = 0;
          });
        const boredToDeath = setInterval(() => {
            this.boredom ++;
            boredom.innerText = `Boredom: ${this.boredom}`;
        }, 6000);
        
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
