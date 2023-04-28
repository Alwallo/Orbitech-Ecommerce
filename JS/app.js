const arrows = document.querySelectorAll(".arrow");
const carouselLists = document.querySelectorAll(".carousel-list");

arrows.forEach((arrow, i) => {
  const itemNumber = carouselLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      carouselLists[i].style.transform = `translateX(${
        carouselLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      carouselLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//Nocturno

const interruptor = document.querySelector('#interruptor');
const body = document.querySelector('body');
interruptor.addEventListener('click', e =>{
  body.classList.toggle('darkmode');
});



const ball = document.querySelector(".interruptor");
const items = document.querySelectorAll(".header-top,.interruptor");

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});