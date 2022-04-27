function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  svg4everybody();

  // Introduction slider
  $('#introducing-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500
  });

  // Our Spaces slider
  $('#our-spaces-slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    asNavFor: '#our-spaces-slider-counter',
    variableWidth: true,
  });

  $('#our-spaces-slider-counter').slick({
    arrows: false,
    accessibility: false,
    slidesToShow: 1,
    speed: 0,
    swipe: false,
    variableWidth: true
  });
  // const OurSpacesSlider = document.querySelector('#our-spaces-slider');
  // const OurSpacesSliderOptions = {
  //   type: 'carousel',
  //   startAt: 0,
  //   perView: 3,
  //   gap: 30,
  //   rewind: false,
  // }
  // const OurSpacesGlide = new Glide(OurSpacesSlider, OurSpacesSliderOptions);
  // OurSpacesGlide.mount();

  // =========== END OF READY FUNC
});
