const sliderLineLastChild = document.querySelector('.slider-line').children[2];
const inNumbersFirstChild = document.querySelector('.in-numbers__img-content').children[0];

const slideImages = (event, direction) => {
  const target = event.target;
  const parent = target.parentNode;
  const children = parent.children;
  const firstChild = children[0];
  parent.appendChild(firstChild);
  if (direction === 'straight') {
    const newFirstChild = children[0];
    addSlideStraight(newFirstChild);
  }
  if (direction === 'reverse') {
    const lastChildIndex = children.length - 1;
    const newLastChild = children[lastChildIndex];
    addSlideReverse(newLastChild);
  }
}

const slideStraight = (event) => {
  slideImages(event, 'straight');
};

const slideReverse = (event) => {
  slideImages(event, 'reverse');
};

const addSlideStraight = (htmlElement) => {
  htmlElement.removeEventListener('click', slideStraight);
  htmlElement.addEventListener('click', slideStraight);
}

const addSlideReverse = (htmlElement) => {
  htmlElement.removeEventListener('click', slideReverse);
  htmlElement.addEventListener('click', slideReverse);
}


addSlideReverse(sliderLineLastChild);
addSlideStraight(inNumbersFirstChild);

$(document).ready(function(){
  $('.section-gallery').slick({
    arrows:false,
    slidesToShow: 2,
    speed: 600,
    dots: true,
  });
});

const animItems = document.querySelectorAll('.anim-items');

if(animItems.length>0){
  window.addEventListener('scroll',animOnScroll);
  function animOnScroll(){
    for(let index=0;index<animItems.length;index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart =4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight>window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset>animItemOffset-animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight)) {
        animItem.classList.add('active');
      } else {
        if(!animItem.classList.contains('anim-no-hide')){
          animItem.classList.remove('active');
        }
      }
    }
  }
function offset(el){
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top:rect.top + scrollTop, left: rect.left + scrollLeft}
}
}