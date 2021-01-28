let position = 0;
const container = document.querySelector('.section-reviews-content__reviews-container');
const track = document.querySelector('.review__list');
const items = document.querySelectorAll('.review__item');
const itemCount = items.length;

if (window.innerWidth > 992) {
  const slidesToShow = 3;
  const slidesToScroll = 3;

  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
  })

  setInterval(() => {
    const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  
  
    if(position <= -(itemCount - slidesToShow) * itemWidth) {
      setTimeout(() => {
        position = 0;
      }, 2000)
    }
  
    setPosition();
  }, 4000);

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };
  
} else if (window.innerWidth < 992 && window.innerWidth > 600) {
  const slidesToShow = 2;
  const slidesToScroll = 2;

  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
  })

  setInterval(() => {
    const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  
  
    if(position <= -(itemCount - slidesToShow) * itemWidth) {
      setTimeout(() => {
        position = 0;
      }, 2000)
    }
  
    setPosition();
  }, 4000);

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };
  
} else if (window.innerWidth < 600) {
  const slidesToShow = 1;
  const slidesToScroll = 1;

  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
  })

  setInterval(() => {
    const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  
  
    if(position <= -(itemCount - slidesToShow) * itemWidth) {
      setTimeout(() => {
        position = 0;
      }, 2000)
    }
  
    setPosition();
  }, 4000);

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };
  
}

