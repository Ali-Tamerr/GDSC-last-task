let currentIndex = 0;

function updateCarousel() {
  const carousel = document.querySelector('#carousel');
  const items = document.querySelectorAll('#carousel-item');
  const totalItems = items.length;
  const itemWidth = items[0].offsetWidth;
  
  if (currentIndex >= totalItems) {
      currentIndex = 0;
  } else if (currentIndex < 0) {
      currentIndex = totalItems - 1;
  }

  carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

function prevSlide() {
  currentIndex =currentIndex - 1;
  updateCarousel();
}

function nextSlide() {
  currentIndex =currentIndex + 1;
  updateCarousel();
}

let currentIndex2 = 0;

function updateCarousel2() {
  const carousel2 = document.querySelector('#carousel-2');
  const items2 = document.querySelectorAll('#carousel-item-2');
  const totalItems2 = items2.length;
  const itemWidth2 = items2[0].offsetWidth;
  
  if (currentIndex2 >= totalItems2) {
      currentIndex2 = 0;
  } else if (currentIndex2 < 0) {
      currentIndex2 = totalItems2 - 1;
  }

  carousel2.style.transform = `translateX(${-currentIndex2 * itemWidth2}px)`;
}

function prevSlide2() {
  currentIndex2 -= 1;
  updateCarousel2();
}

function nextSlide2() {
  currentIndex2 += 1;
  updateCarousel2();
}
function goToCategories(){
  var element =   document.getElementById('categories-header');
  if(element){
    document.getElementById('categories-header').scrollIntoView({
      behavior: 'smooth'
    });
  } else{
    window.location.href = 'index.html#categories-header';
  }
}
