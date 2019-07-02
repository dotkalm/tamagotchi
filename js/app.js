class PuppyDoggie {
    constructor(name, hunger=1, sleepiness=1, boredom=1, age=0){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
    initPup(){
        const centerColumn = document.querySelector('#column2');
        const imgdoggie = document.createElement('img');
        imgdoggie.setAttribute('src', 'img/puppy.jpg');
        centerColumn.appendChild(imgdoggie);
        
        const newDoggie = document.createElement('h2');
        newDoggie.innerText = this.name;
        centerColumn.appendChild(newDoggie);
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

const beginLife = {

}

