const imageSlider = () => {
  let currentIndex = 0;
  let currentBubble;
  let slidingContainer;

  const makeBlankSquare = (color) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add(color);
    return square;
  };

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

  const setTransform = (index) => {
    slidingContainer.style.transform =
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

  //
  //
  const wrapImage = (image) => {
    let imageWrapper = document.createElement("div");
    let imageElement = document.createElement("img");
    imageWrapper.classList.add("image-wrapper");
    imageElement.src = image.source;
    imageElement.classList.add("slider-image");
    imageWrapper.appendChild(imageElement);
    return imageWrapper;
  };

  const DisplayImages = (container) => {
    const slidingContainer = document.createElement("span");
    slidingContainer.classList.add("image-container");
    for (let i = 0; i < images.length; i += 1) {
      slidingContainer.appendChild(wrapImage(images[i]));
    }
    container.appendChild(slidingContainer);
  };

  const init = (container) => {
    let root = document.documentElement;
    dimensionWidth = container.clientWidth;
    dimensionHeight = container.clientHeight;
    root.style.setProperty("--slide-container-width", dimensionWidth + "px");
    root.style.setProperty("--slide-container-height", dimensionHeight + "px");
    container.classList.add("image-slider-frame");
    createControls(container);
    DisplayImages(container);
    slidingContainer = document.querySelector(".image-container");
  };

  const addImage = (imageSrc, description) => {
    images.push(Image(imageSrc, description));
  };

  return {
    init,
    addImage,
  };
};

const containerdiv = document.getElementById("image-slider");
const slider = imageSlider();
let source1 = "./../assets/testImages/istockphoto-175422366-612x612.jpg";
let source2 =
  "./../assets/testImages/lbrevirostris_rcb1282_stack1_20190423-dsc_1936.jpg";
let source3 =
  "./../assets/testImages/red-eyed-tree-frog-square-1.jpg.optimal.jpg";
let source4 = "./../assets/testImages/ww-frogs-long-nosed-horn_16x9.jpg";
slider.addImage(source1, "a frog");
slider.addImage(source2, "a frog");
slider.addImage(source3, "a frog");
slider.addImage(source4, "a frog");
slider.init(containerdiv);
