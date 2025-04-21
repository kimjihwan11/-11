// script.js

const sliderImages = [
    'https://static.wixstatic.com/media/775e1e_39cc4bbc0856485197de9b23d5c6b39b~mv2.png',
    'https://static.wixstatic.com/media/11062b_e81e467b41f5440f92bab9ac565c7b28~mv2.jpg',
    'https://static.wixstatic.com/media/775e1e_799e28d41cfe4fe0ba331cf6b7ba2cc0~mv2.png'
  ];
  
  let currentSlide = 0;
  const sliderElement = document.getElementById('slider-image');
  
  function showNextSlide() {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    sliderElement.src = sliderImages[currentSlide];
  }
  
  setInterval(showNextSlide, 3500);