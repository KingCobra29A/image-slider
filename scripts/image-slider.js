const imageSlider = () => {
  let currentIndex = 0;
  let images = [];
  let dimensionWidth;
  let dimensionHeight;

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
  const leftRightArrows = () => {};

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
