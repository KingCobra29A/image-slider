const imageSlider = () => {
  let currentIndex = 0;

  const makeBlankSquare = (color) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add(color);
    return square;
  };

  let images = [
    makeBlankSquare("red"),
    makeBlankSquare("green"),
    makeBlankSquare("blue"),
  ];
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
    leftArrow.addEventListener("click", slideLeft);
    rightArrow.src = svgArrow;
    rightArrow.classList.add(...["arrow", "arrow-right"]);
    rightArrow.addEventListener("click", slideRight);

    container.appendChild(leftArrow);
    container.appendChild(rightArrow);
  };

  //returns a dom element
  //specifically, "bubbles" to navigate to specific pictures
  const navigationBubbles = (container) => {
    const navigateToIndex = () => {};

    const bubbleFactory = (index) => {
      const element = document.createElement("img");
      element.src = svgCircle;
      element.classList.add("bubble");
      element.addEventListener("click", () => navigateToIndex(index));
      return {
        element,
        index,
      };
    };
    const wrapper = document.createElement("div");
    wrapper.classList.add("bubble-wrapper");
    for (let i = 0; i < images.length; i += 1) {
      wrapper.appendChild(bubbleFactory(i).element);
    }
    container.appendChild(wrapper);
  };

  //returns dom elements
  //specifically, all of the controll related elements (arrows, bubbles)
  const createControls = (container) => {
    leftRightArrows(container);
    navigationBubbles(container);
  };

  //returns a dom element
  //specifically, the wrapper element that will slide left/right
  const createWrapper = () => {};

  const init = (container) => {
    dimensionWidth = container.clientWidth;
    dimensionHeight = container.clientHeight;
    container.classList.add("image-slider-frame");
    createControls(container);
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
