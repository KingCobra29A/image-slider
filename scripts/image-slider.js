const imageSlider = () => {
  let currentIndex = 0;
  let images = [];
  let dimensionWidth;
  let dimensionHeight;
  const svgCircle = "./../assets/noun-circle-5147182.svg";
  const svgArrow = "./../assets/noun-left-1920907.svg";

  //factory for image objects
  const Image = (source, description) => {
    return {
      source,
      description,
    };
  };

  const slideLeft = () => {};

  const slideRight = () => {};

  //returns a dom element
  //specifically, arrows to navigate left/right through pictures
  const leftRightArrows = (container) => {
    const leftArrow = document.createElement("img");
    const rightArrow = document.createElement("img");
    leftArrow.src = svgArrow;
    leftArrow.classList.add(...["arrow", "arrow-left"]);
    rightArrow.src = svgArrow;
    rightArrow.classList.add(...["arrow", "arrow-right"]);

    container.appendChild(leftArrow);
    container.appendChild(rightArrow);
  };

  const navigateToIndex = () => {};

  //returns a dom element
  //specifically, "bubbles" to navigate to specific pictures
  const navigationBubbles = () => {};

  //returns dom elements
  //specifically, all of the controll related elements (arrows, bubbles)
  const createControls = () => {};

  //returns a dom element
  //specifically, the wrapper element that will slide left/right
  const createWrapper = () => {};

  const init = (container) => {
    dimensionWidth = container.clientWidth;
    dimensionHeight = container.clientHeight;
    container.classList.add("image-slider-frame");
    leftRightArrows(container);
  };

  const addImage = (image, description) => {};

  return {
    init,
    addImage,
  };
};

const containerdiv = document.getElementById("image-slider");
const slider = imageSlider();
slider.init(containerdiv);
