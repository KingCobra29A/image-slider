const imageSlider = () => {
  let currentIndex = 0;
  let currentBubble;
  let imageContainer;

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

  const setTransform = (index) => {
    imageContainer.style.transform =
      "translateX(-" + index * dimensionWidth + "px)";
  };

  const slide = () => {
    setTransform(currentIndex);
    currentBubble.classList.remove("bubble-active");
    currentBubble = document.getElementById("bubble" + currentIndex);
    currentBubble.classList.add("bubble-active");
  };

  const slideLeft = () => {
    currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
    console.log(currentIndex);
    slide();
  };

  const slideRight = () => {
    currentIndex = (currentIndex + 1) % images.length;
    slide();
  };

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
    const bubbleFactory = (indexIn) => {
      const element = document.createElement("img");
      const index = indexIn;

      //callback used when a bubble is clicked
      //navigates to that specific index of image
      const navigateToIndex = (e) => {
        setTransform(index);
        currentBubble.classList.remove("bubble-active");
        element.classList.add("bubble-active");
        currentBubble = element;
        currentIndex = index;
      };

      if (indexIn === 0) {
        element.classList.add("bubble-active");
        currentBubble = element;
      }

      element.src = svgCircle;
      element.classList.add("bubble");
      element.id = "bubble" + index;
      element.addEventListener("click", (e) => navigateToIndex(e));
      return element;
    };
    const wrapper = document.createElement("div");
    wrapper.classList.add("bubble-wrapper");
    for (let i = 0; i < images.length; i += 1) {
      wrapper.appendChild(bubbleFactory(i));
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

  const dummyDisplayImages = (container) => {
    const imageContainer = document.createElement("span");
    imageContainer.classList.add("image-container");
    for (let i = 0; i < images.length; i += 1) {
      imageContainer.appendChild(images[i]);
    }
    container.appendChild(imageContainer);
  };

  const init = (container) => {
    dimensionWidth = container.clientWidth;
    dimensionHeight = container.clientHeight;
    container.classList.add("image-slider-frame");
    createControls(container);
    dummyDisplayImages(container);
    imageContainer = document.querySelector(".image-container");
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
