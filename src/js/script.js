function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  // Introduction slider
  const IntroducingSlider = document.querySelector('#introducing-slider');
  const IntroducingSliderOptions = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 4000,
    animationDuration: 1500,
  }
  const IntroducingGlide = new Glide(IntroducingSlider, IntroducingSliderOptions);
  IntroducingGlide.mount();

  // Our Spaces slider
  const OurSpacesSlider = document.querySelector('#our-spaces-slider');
  const OurSpacesSliderOptions = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 30,
  }
  const OurSpacesGlide = new Glide(OurSpacesSlider, OurSpacesSliderOptions);
  OurSpacesGlide.mount();

  // =========== END OF READY FUNC
});
