const dogName = document.querySelector('#dogName');
const rightColumn = document.querySelector('#column3');
const leftColumn = document.querySelector('#column1');
const age = document.createElement('p');
dogName.appendChild(age);
const hungerEl = document.createElement('p');
const boredom = document.createElement('p');
const sleepiness = document.createElement('p');
dogName.appendChild(sleepiness);
dogName.appendChild(boredom);
const alert = document.createElement('h1');

const feedButton = document.createElement('button');
const playButton = document.createElement('button');
const sleepButton = document.createElement('button');
const imgdoggie = document.createElement('img');
imgdoggie.setAttribute('src', 'img/puppypix.gif');
imgdoggie.setAttribute("id", "puppy-begin");
dogName.appendChild(hungerEl);
let sleepBoolean = false;
let timerCounter = 0;
let hungerTimerCounter = 0;
let boredTimerCounter = 0;
const wrapper = document.querySelector('.wrapper');
const navBar = document.querySelector('nav');


class PuppyDoggie {
    constructor(name='Bertrand', hunger=0, sleepiness=0, boredom=0, age=0, bedTime=0, mealTime=0){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;     
    }
    initPup(){
        const centerColumn = document.querySelector('#column2');
        const rightColumn = document.querySelector('#column3');
        const puppersDiv = document.querySelector('#dogHouse');
        const path1 = document.createElement('path');
        
        centerColumn.appendChild(puppersDiv)
        centerColumn.appendChild(dogName)
        puppersDiv.appendChild(imgdoggie);
        const newDoggie = document.createElement('h2');
        newDoggie.innerText = `Lil ${this.name}`;
        dogName.appendChild(newDoggie);
        
        
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
        this.pickImage();
        this.dogHouse();
    }
    dogHouse(){
        const svgWindow = document.querySelector('svg')
        const dogHouseColor = setInterval(() => {
            svgWindow.innerHTML=`<path fill="none" stroke="rgb(${timerCounter*25.5}, ${hungerTimerCounter*25.5}, ${boredTimerCounter*25.5})" stroke-width="${(this.age)+.1}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M211.244,82.245c13.75,14.25,30.25,25.75,30.25,25.75l1.494,7.75l-2.244-0.5c-9.25-1.5-9.25,5.25-9.25,5.25c-69.25-2.25-63-5-63-5
        l-75.5-91l24.75-2.75c0,0,29.5,32.25,19.5,30.5l-6,0.75l19,19.5l-1.5,5.5l29.25,26.25l37,2.25l-0.25,1.5h26.75l1.494,7.75l-30.744-2
        l9.083,7.083c0.333,18-3.333,12-3.333,12l-53-2c-26-3.667-32.667,0-32.667,0l2,36c12.334-5.666,30,0,30,0
        c10.333,1.333,51.333,5.333,51.333,5.333l2.334-39.333l-6,39.333c0,0-3,32,2.333,32.667c0,0,0-1.666-5,0.667s-0.333-6-0.333-6
        l-5,2.666l2-5.666l-9.667,8.666v-13.333c0,0-3.667,15.333-10.667,15.333s5.667-8,5.667-8l-9.667,1.667l-2,4.333
        c0,0-9.667-4.666-2-9.666l-9,9.666c0,0-4-4.333-3-12.333s-4.666,15-4.666,15l-6-7c0,0-4.334,14-7.667,3s7.334,19.666-10.333-2.667
        l22.333,1.667c-3.333-4.333-0.333-38-0.333-38h1.666c3.333-23.333,0-33.333,0-33.333l4.334-0.667c2.334-1.333,0.333-17,0.333-17
        l-27.333-31c-20.667-0.667-52.573-3.456-71.667-2.333c-10.56,0.621-15.667,3-15.667,3l29-37.333c0,0,27.333-4,29.667,0l14.667,5.834
        l49,1c1.75,3.25,25.25,24,25.25,24l17.25-2.75c-13.25-9.25-25.25-25.25-25.25-25.25h-27l-1.75,3.5l-2.75-0.25v-6.75l-21,0.5l9,6.75
        c0,0,20.098,15.695,23.949,22.633c0.551,0.991,0.77,1.804,0.551,2.367l-0.5,1.5c0,0-2,6.25,28.25,3l1.25-5c0,0-24.25,0-28-0.75
        l-3.5-2l-17.75-3.25l-2.25,6.75l18.75,3.25l23.25,3c2,6.5,24.25,22.25,24.25,22.25l-2.75,7.25l-36.25-2.25
        c-8.5-3.5-48.25-52.5-48.25-52.5c-0.25-4-32-40-32-40l-5.417-1.167c0,0,28.94,4.851,53.186,6.615
        c10.859,0.79,20.776,0.961,26.73-0.198c0,0,25.5,24,27.25,24s-34.25,0.75-34.25,0.75s-13.25-13.25-20-23.25l-49.5-6L6.16,104.828
        c0,0-9.833-1.833,32-30.667c0,0-6.16-3.982-2-9.167c4.496-5.604,19.739-12.69,31.333-19.833l-1.667-6.5c0,0,12.333-12.5,24.5-20.833
        c0,0-19.534,24.498-40.583,47.417c-21.491,23.4-44.38,45.24-31.75,46.25l10.75-0.75c0,0-0.75-4.75,23.75-28.5
        c0,0-9.692,5.279-2.25-4c4.891-6.098,18.654-12.588,42.25-51.75c0,0,5.001-5.916-6.5,6.25c-21.958,23.227-67.477,72.258-66,72.75
        l7.667,5.333l4.333,18.667c0,0,1.333,0.666,20.667-0.667l-20.333,2c0,0,5,41,3.667,43c0,0,4-6,14.667-3l-14.667,3
        c0,0,2.667,24.334-1.333,26.667c0,0,0.333,3.666,5.667,3.666s19-1.666,19-1.666"/>
    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="72.9436" y1="177.7573" x2="148.2771" y2="108.4233">
        <stop  offset="0" style="stop-color:#969696"/>
        <stop  offset="0.2077" style="stop-color:#545454"/>
        <stop  offset="0.4154" style="stop-color:#181818"/>
        <stop  offset="0.514" style="stop-color:#000000"/>
    </linearGradient>
    <path fill="url(#SVGID_1_)" d="M58.689,203.954c0,0-12.304-58.82,2.368-94.045c8.408-23.288,40.072-25.578,50.585-16.624
        c22.205,18.913,22.923,30.604,22.782,111.334"/>`
        }, 200)
            
        
        
    }
    startSleepiness(){
        let myTimer = setInterval(() => {
            const i = timerCounter
            timerCounter ++;
            sleepiness.innerText = `Sleepiness: ${timerCounter}`
            }, 6000);
            
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
                        // imgdoggie.setAttribute('src', 'img/puppypix.gif');
                        sleepiness.innerText = `Sleepiness: ${timerCounter}`
                        }, 6000);
                }, 5000)
          });
    }   
    startGettingHungry(){
        let hungerTimer = setInterval(() => {
            const i = hungerTimerCounter;
            hungerTimerCounter ++;
            hungerEl.innerText = `Hunger: ${hungerTimerCounter}`;
            }, 6000);
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
                        // imgdoggie.setAttribute('src', 'img/puppypix.gif');
                        hungerEl.innerText = `Hunger: ${hungerTimerCounter}`
                    }, 6000);
                }, 5000)
        });
    }
    startGettingBored(){
        let boredTimer = setInterval(() => {
            const i = boredTimerCounter;
            boredTimerCounter ++;
            boredom.innerText = `Boredom: ${boredTimerCounter}`;
            // if (boredTimerCounter >= 1){
            //     imgdoggie.setAttribute('src', 'img/puppyBored.gif');
            // }
            }, 6000);
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
                        // if (boredTimerCounter >= 1){
                        //     imgdoggie.setAttribute('src', 'img/puppyBored.gif');
                        // } else {imgdoggie.setAttribute('src', 'img/puppypix.gif');}
                        
                        boredom.innerText=`Boredom: ${boredTimerCounter}`
                        
                    }, 6000)
                    
                }, 1000)

        });
    }
    startAging(){
        const doggieAge = setInterval(() => {
            this.age ++;
            age.innerText = `Age: ${this.age}`;
        }, 24000);
      }
    pickImage(){
        const imagePicker = setInterval(() => {
        
            if (boredTimerCounter >= 5 && boredTimerCounter<10){
                imgdoggie.setAttribute('src', 'img/puppyBored.gif');
            } 
            else if (boredTimerCounter >= 10 || timerCounter >= 10 || hungerTimerCounter >= 10){
                wrapper.style.display = 'none';
                navBar.appendChild(alert);
                alert.innerText="YOUR PUPPY DIED!"
            }else if (this.age >= 5 && this.age < 10){
                imgdoggie.setAttribute('src', 'img/olderPup.gif');
            } else if (this.age >= 10){
                imgdoggie.setAttribute('src', 'img/oldestPup.gif');
            } else {imgdoggie.setAttribute('src', 'img/puppypix.gif');}
            
        }, 5000)
    }

    
    
}


document.querySelectorAll('input')[1].addEventListener('click', e => {
    e.preventDefault();
    const puppy = new PuppyDoggie(document.querySelector('input').value) ;
    const submitButton = document.querySelector('form');
    submitButton.style.display = 'none';
    puppy.initPup();
    
    
  });
