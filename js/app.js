const rightColumn = document.querySelector('#column3');
const leftColumn = document.querySelector('#column1');
const age = document.createElement('h3');
rightColumn.appendChild(age);
const hunger = document.createElement('h3');
const boredom = document.createElement('h3');
const sleepiness = document.createElement('h3');
rightColumn.appendChild(sleepiness);
rightColumn.appendChild(boredom);
const alert = document.createElement('h1');
const feedButton = document.createElement('button');
const playButton = document.createElement('button');
const sleepButton = document.createElement('button');

class PuppyDoggie {
    constructor(name, hunger=0, sleepiness=0, boredom=0, age=0){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
        
    }
    initPup(){
        const centerColumn = document.querySelector('#column2');
        const rightColumn = document.querySelector('#column3');

        const imgdoggie = document.createElement('img');
        imgdoggie.setAttribute('src', 'img/puppy.jpg');
        imgdoggie.setAttribute("id", "puppy-begin");
        centerColumn.appendChild(imgdoggie);
        
        const newDoggie = document.createElement('h2');
        newDoggie.innerText = `Lil ${this.name}`;
        centerColumn.appendChild(newDoggie);
        
        
        rightColumn.appendChild(hunger);
        hunger.innerText = `Hunger: ${this.hunger}`;
        age.innerText = `Age: ${this.age}`;
        boredom.innerText = `Boredom: ${this.boredom}`;
        sleepiness.innerText = `Sleepiness: ${this.sleepiness}`

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
        sleepButton.addEventListener('click', e => {
            sleepiness.innerText = `Sleepiness: 0`;
            this.sleepiness = 0;
          });
        const soSleepy = setInterval(() => {
            this.sleepiness ++;
            sleepiness.innerText = `Sleepiness: ${this.sleepiness}`;
        }, 6450);
        
    }   
    startAging(){
        const doggieAge = setInterval(() => {
            this.age ++;
            age.innerText = `Age: ${this.age}`;
        }, 100009);
      }
    startGettingHungry(){
        feedButton.addEventListener('click', e => {
            hunger.innerText = `Hunger: 0`;
            this.hunger = 0;
          });
        const dogHungry = setInterval(() => {
            this.hunger ++;
            // if(this.hunger === 8){
            //     const nav = document.querySelector('nav');
            //     alert.innerText = `WOOF WOOF feed lil ${this.name} they are getting HUNGRY!!`;   
            //     nav.appendChild(alert)
            // }
            // if(this.hunger === 10){
            //     const nav = document.querySelector('nav');
            //     alert.innerText = `So sad! ... lil ${this.name} died from hunger`;   
            //     nav.appendChild(alert)
            // }
            hunger.innerText = `Hunger: ${this.hunger}`;
        }, 5100);
        
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


