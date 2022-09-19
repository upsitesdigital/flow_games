/**
 * Slider
 */
export default function() {
  const $fullslider = $('.slide-full');
  $fullslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });
  const $pagFeaturedslider = $('.slide-pag-featured');
  $pagFeaturedslider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });


  const $webstoriesslide = $('.slide-webstories');
  $webstoriesslide.slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    appendDots: $('.webstories .dots'),
    arrows: true,
    nextArrow: '.webstories .next',
    prevArrow: '.webstories .prev',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });
}