const rightColumn = document.querySelector('#column3');
const leftColumn = document.querySelector('#column1');
const age = document.createElement('h3');
rightColumn.appendChild(age);
const hunger = document.createElement('h3');
const boredom = document.createElement('h3');
rightColumn.appendChild(boredom);
const alert = document.createElement('h1');
const feedButton = document.createElement('button');
const playButton = document.createElement('button');

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
        centerColumn.appendChild(imgdoggie);
        
        const newDoggie = document.createElement('h2');
        newDoggie.innerText = `Lil ${this.name}`;
        centerColumn.appendChild(newDoggie);
        
        
        rightColumn.appendChild(hunger);
        hunger.innerText = `Hunger: ${this.hunger}`;
        age.innerText = `Age: ${this.age}`;
        boredom.innerText = `Boredom: ${this.boredom}`;
        
        leftColumn.appendChild(feedButton);
        feedButton.setAttribute('type', 'button');
        feedButton.innerText = `Feed Lil ${this.name}`

        leftColumn.appendChild(playButton);
        playButton.setAttribute('type', 'button');
        playButton.innerText = `Play with lil ${this.name}`

        this.startAging();
        this.startGettingHungry();
        this.startBoredom()
    }
    startAging(){
        const doggieAge = setInterval(() => {
            this.age ++;
            age.innerText = `Age: ${this.age}`;
        }, 10000);
      }
    startGettingHungry(){
        feedButton.addEventListener('click', e => {
            console.log(this); 
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
            console.log(this); 
            boredom.innerText = `Boredom: 0`;
            this.boredom = 0;
          });
        const boredToDeath = setInterval(() => {
            this.boredom ++;
            // if(this.boredom === 8){
            //     const nav = document.querySelector('nav');
            //     alert.innerText = `lil ${this.name} is so bored!!`;   
            //     nav.appendChild(alert)
            // }
            // if(this.boredom === 10){
            //     const nav = document.querySelector('nav');
            //     alert.innerText = `Sad! lil ${this.name} died from boredom`;   
            //     nav.appendChild(alert)
            // }
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


