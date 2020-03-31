
const mySlides = document.querySelector(`.slides`);
const myImages = document.querySelectorAll(`.slides img`);
 
//buttons here
 const previousB = document.querySelector(`#previousB`);
 const nextB = document.querySelector(`#nextB`);

 //Counter

 let counter = 1;
 const size = myImages[0].clientWidth;

 mySlides.style.transform = `translateX(` + (-400 * counter ) +`px)`;

 // Buttons
 
 nextB.addEventListener(`click`, () => {
    if(counter >= myImages.length-1) return;
 mySlides.style.transition = `transform 0.4s ease-in-out`;
 counter++;
 mySlides.style.transform = `translateX(` + (-400 * counter ) +`px)`;
 });

 previousB.addEventListener(`click`, () => {
    if(counter <=0) return;
    mySlides.style.transition = `transform 0.4s ease-in-out`;
    counter--;
    mySlides.style.transform = `translateX(` + (-400 * counter ) +`px)`;
    });

    mySlides.addEventListener(`transitionend`, () => {
       console.log(myImages[counter])
        if (myImages[counter].id === `lastImg`){
            mySlides.style.transition = `none`;
            counter = myImages.length-2;
            mySlides.style.transform = `translateX(` + (-400 * counter ) +`px)`;
        }
        else if(myImages[counter].id === `firstImg`){
            mySlides.style.transition = `none`;
            counter = myImages.length-6;
            mySlides.style.transform = `translateX(` + (-400 * counter ) +`px)`;
        }
    })

