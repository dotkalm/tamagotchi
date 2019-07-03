const rightColumn = document.querySelector('#column3');
const leftColumn = document.querySelector('#column1');
const age = document.createElement('h3');
rightColumn.appendChild(age);
const hunger = document.createElement('h3');
const alert = document.createElement('h1');
const feedButton = document.createElement('button');

class PuppyDoggie {
    constructor(name, hunger=0, sleepiness=1, boredom=1, age=0){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
        feedButton.addEventListener('click', e => {
            console.log(this); 
            this.hunger = 0;
          });
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
        
        leftColumn.appendChild(feedButton);
        feedButton.setAttribute('type', 'button');
        feedButton.innerText = `Feed Lil ${this.name}`

        this.startAging();
        this.startGettingHungry();
    }
    startAging(){
        const doggieAge = setInterval(() => {
            this.age ++;
            age.innerText = `Age: ${this.age}`;
        }, 10000);
      }
    startGettingHungry(){
        const dogHungry = setInterval(() => {
            this.hunger ++;
            if(this.hunger === 8){
                const nav = document.querySelector('nav');
                alert.innerText = `WOOF WOOF feed lil ${this.name} they are getting HUNGRY!!`;   
                nav.appendChild(alert)
            }
            if(this.hunger === 10){
                const nav = document.querySelector('nav');
                alert.innerText = `So so sad! ... lil ${this.name} died from hunger`;   
                nav.appendChild(alert)
            }
            hunger.innerText = `Hunger: ${this.hunger}`;
        }, 1100);
        
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


